# Reading the site

The navigation follows the [method](index.md), the [cases](cases.md), the [inquiry](inquiry.md), and the evidence. The source catalogue and full reading copies are available in the private GitHub repository.

## Download a built site

Open the latest successful [Build documentation run](https://github.com/abhuva/adaptive-circus/actions/workflows/docs.yml) and download **adaptive-pedagogy-site** under Artifacts. Unzip it. From the directory containing `index.html`, run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [the local site](http://127.0.0.1:8000/). This serves the completed site without installing Zensical.

## Preview from a checkout

From the repository root, create a Python environment and install the pinned documentation dependency. On Windows:

```powershell
py -3.13 -m venv .venv
.\.venv\Scripts\python -m pip install -r requirements-docs.txt
.\.venv\Scripts\zensical serve
```

On macOS or Linux:

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-docs.txt
.venv/bin/zensical serve
```

Open the address shown by Zensical. To verify a change, run `zensical build --clean --strict` from the activated environment. GitHub Actions runs the same build on every push to `main`.
