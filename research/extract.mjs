// Rebuild local, page-addressable reading copies with Poppler on PATH.
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2];
if (!root) throw Error('Supply the source PDF directory as an argument.');
const dest = fileURLToPath(new URL('./text/', import.meta.url));
const cache = process.env.CIRCUS_OCR_DIR || join(dest, '.ocr');
function pdfs(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const p = join(dir, entry.name);
    return entry.isDirectory() ? pdfs(p) : /\.pdf$/i.test(p) ? [p] : [];
  });
}
const manifest = [];
for (const path of pdfs(resolve(root)).sort()) {
  const source = relative(resolve(root),path).split(sep).join('/');
  const sha = createHash('sha256').update(readFileSync(path)).digest('hex');
  const title = source.split('/').pop().slice(0,-4);
  const file = sha.slice(0,10) + '-' + title.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/-$/,'').slice(0,48) + '.md';
  // Separate paths for identical files in distinct folders.
  const out = join(dest,dirname(source),file);
  mkdirSync(dirname(out), {recursive:true});
  const raw = execFileSync('pdftotext',['-enc','UTF-8','-eol','unix',path,'-'],{encoding:'utf8', maxBuffer:100*1024*1024});
  const pages = raw.split('\f');
  if (pages.at(-1).trim()==='') pages.pop();
  const info = execFileSync('pdfinfo',[path],{encoding:'utf8'});
  if (pages.length !== Number(info.match(/^Pages:\s+(\d+)/m)?.[1])) throw Error('Page count mismatch: '+source);
  const sparse = [];
  const ocr = [];
  const body = pages.map((page,i)=>{
    const overlay = join(cache,sha+'-'+(i+1)+'.txt');
    if (existsSync(overlay)) {
      const candidate = readFileSync(overlay,'utf8').trim();
      if (candidate.replace(/\s/g,'').length > page.replace(/\s/g,'').length) {
        page = candidate;
        ocr.push(i+1);
      }
    }
    page = page.replace(/[\x00-\x08\x0b\x0e-\x1f]/g,' ').replace(/\u00ad/g,'');
    if(page.replace(/\s/g,'').length < 60) sparse.push(i+1);
    // Join wrapped prose; preserve blank lines, list boundaries and page references.
    const paragraphs = page.trim().split(/\n[ \t]*\n/).map(p=>p.replace(/\n(?![ \t]*[•▪●*-]\s)/g,' ').replace(/[ \t]+/g,' ').trim());
    return '## PDF page '+(i+1)+'\n\n'+(ocr.at(-1)===i+1?'*Machine OCR; check symbols against the PDF.*\n\n':'')+(paragraphs.join('\n\n') || '*No readable text extracted. Consult the source image.*');
  });
  const rel = relative(dest,out).split(sep).join('/');
  const pdfLink = relative(dirname(out),path).split(sep).map(encodeURIComponent).join('/').replaceAll('(','%28').replaceAll(')','%29');
  writeFileSync(out,'# '+title+'\n\nSource: `'+source+'` · [Open original PDF]('+pdfLink+')\n\nSHA-256: `'+sha+'`\n\nPDF page numbers below count from the first page. Text reading copy; consult the original for diagrams, tables and layout.'+(ocr.length?' OCR pages: '+ocr.join(', ')+'.':'')+'\n\n'+body.join('\n\n')+'\n');
  manifest.push({source,file:rel,sha,pages:pages.length,sparse,ocr});
}
writeFileSync(join(dest,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(manifest.length+' reading copies, '+manifest.reduce((n,x)=>n+x.pages,0)+' PDF pages.');
