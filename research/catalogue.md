# Reading catalogue

Each link opens a local Markdown reading copy. Page numbers in the notes refer to physical PDF pages. Each copy identifies its original relative path under `4. Open Directory`. This inventory keeps translations, course materials and duplicate files visible without counting them as independent evidence.

**Coverage.** 53 PDFs, 3,678 page headings, and one transcribed JPEG flyer. Poppler extracted the embedded text. Local Windows OCR was attempted on all 346 pages with fewer than 60 non-whitespace characters and supplied additional text on 169 pages across 25 files. After OCR, 220 pages still had fewer than 60 characters, including 107 with no readable text. Covers, photographs, notation diagrams, charts and embedded images can require the original even on pages with abundant surrounding text. The [page inventory](text/manifest.json) records short pages, OCR pages, file hashes and source paths.

**Use on another computer.** Cloning this private repository gives you the page-indexed Markdown, the manifest, the OCR cache and the transcribed flyer. Start with the catalogue or search `rg -n -g "*.md" "search term" research/text` from the repository root. The preceding PDF page heading gives the locator. For diagrams and tables, open the source path listed at the top of the reading copy under your synced Nextcloud `4. Open Directory`. The original-PDF shortcuts are relative to the layout on the computer that generated them. If your layout differs, run `node research/extract.mjs "<local path to 4. Open Directory>"` with Poppler on the path to rebuild the shortcuts locally.

## Activity design and inclusive facilitation

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [Creability](text/Books/456d402cf7-Creability-Praxishandbuch-DE1.md) | 154 | Participatory arts handbook. Begin with the shared start/stop game (pp. 76–77) and the design, testing and rejection of tools (pp. 133–141). |
| [Motor Capacities’ Handbook](text/Books/ee202785e1-Motor-Capacities-Handbook-in-the-Educational-Cir.md) | 138 | Botteri’s capacity taxonomy spans balance, acrobatics, juggling and physical theatre. The exercise generator on pp. 131–132 offers a concrete predecessor to this project. |
| [Motor Capacities’ Handbook · second English file](text/Books/0ed221b206-Motor-Capacities-Handbook.md) | 138 | Identical embedded page text to the other English file, despite a different PDF hash. |
| [Motor capacities · German edition](text/Books/48d6610b88-Motor-Capacities-Handbook-de.md) | 244 | Parallel resource for German-language teaching. Pagination differs from the English edition. |
| [Circus Transformation · trainer guide](text/Books/399dbf4a5e-CTF-Guidebook-min.md) | 294 | Caravan training curriculum. PDF pp. 11–13 map trainer responsibilities, adapted objectives and social context. |
| [Cirque du Monde · Social Circus Trainer’s Guide](text/Books/f8f695dd1a-Social-Circus-Trainer-s-Guide-V-Cirque-du-Monde.md) | 336 | Trainer manual. The instructor–community worker tandem (p. 47 onward) is useful for mapping roles beyond a single educator. |
| [Cirque du Monde · German edition](text/Books/f2d9e84de1-Social-Circus-Trainer-s-Guide-V-Cirque-du-Monde-.md) | 511 | Parallel-language guide with different pagination. Use alongside the English manual as one source family. |
| [Circus Clinic](text/Books/cc4cbc3a4d-Circus-Clinic-Exploring-the-therapeutic-potentia.md) | 188 | Interdisciplinary practitioner stories, workshop tools and ethics. Distinguish a reported encounter from an intervention study. See contents p. 4 and ethics pp. 154–155. |
| [Palla, pallina, pallone · Italian original](text/Research%20%2B%20Studies/Functional%20Juggling/9fab11f754-Elaborato-da-stampare.md) | 73 | Sara Papadato’s primary-school teacher project. Reflections distinguish a proposed picture choice from actual classroom observation (pp. 63–64). |
| [Palla, pallina, pallone · German version](text/Research%20%2B%20Studies/Functional%20Juggling/6036e000e2-Elaborato-da-stampare-de.md) | 110 | Companion to Papadato’s qualification project. Check the Italian edition for wording and page references. |

## Pattern design, equipment and technical skill

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [Functional Juggling · English](text/Books/5612c3f498-Functional-Juggling-The-Book-EN.md) | 90 | Quat’s practitioner theory and manual. Compare the intent criterion (p. 22), notation (pp. 41–46) and packeting (p. 66). |
| [Functional Juggling · German](text/Books/d6b1ffde0e-Functional-Juggling-The-Book-DE.md) | 109 | German edition of the same work. Use as a language alternative. |
| [Juggle Board · A Practical Guide](text/Books/Functional%20Juggling/42e8ced794-Juggle-Board-Practical-Guide.md) | 34 | Illustrated pattern diagrams and directions. OCR aids lookup. Inspect the source before teaching a notation from it. |
| [JuggleBoard Intro](text/Books/Functional%20Juggling/6d37a3759e-JuggleBoard-Intro.md) | 47 | Image-based propswap reference, examples and diagrams. OCR cannot reliably distinguish crossings, numbers and arrows. |
| [Functional Juggling seminar 1](text/Books/Functional%20Juggling/50af5c7b23-Online-Seminar-Presentation-Class-1.md) | 38 | Philosophy, entry conditions and the distinction between expression and experience. |
| [Functional Juggling seminar 2](text/Books/Functional%20Juggling/55a6d2c1f4-Online-Seminar-Presentation-Class-2.md) | 36 | Process formations, signal and spatial/temporal classifications. A vocabulary for varying tasks. |
| [Functional Juggling seminar 3](text/Books/Functional%20Juggling/97e0a19cae-Online-Seminar-Presentation-Class-3.md) | 42 | Five-point maps and propswap notation. Relevant to formal rules and reproducibility. |
| [Functional Juggling seminar 4](text/Books/Functional%20Juggling/b72f8fa216-Online-Seminar-Presentation-Class-4.md) | 31 | Primary composition, tempo and tactile facilitation. Compare the mechanism claims against the empirical cluster. |
| [Functional Juggling seminar 5](text/Books/Functional%20Juggling/e59ab2d2bd-Online-Seminar-Presentation-Class-5.md) | 28 | Nonverbal strategies, packeting, changing tempo and support for independence. |
| [Quat Props resource guide](text/Books/Functional%20Juggling/ed58bf1166-QUAT-PROPS-RESOURCE-GUIDE-BOOK.md) | 20 | Desk reference for forward/lateral notation, timing, repetitions and start positions. |
| [Training course handout](text/Books/Functional%20Juggling/b860f402c7-Training-Course-Handout-Packet.md) | 13 | Condensed theory and course diagrams. Shares its evidence base with the book and slides. |
| [Ben Beever · Siteswap](text/Books/ce5411c737-BenBeeversGuidetoJugglingPatterns-EN.md) | 74 | Mathematical treatment of air-juggling patterns. Strong formal vocabulary for schedules of throws. |
| [Siteswap Cards](text/Books/67b739d64a-Siteswap-Cards.md) | 3 | Compact listings by period and object count. Tabular layout carries meaning that linear text may lose. |
| [Botteri · Juggleboard study](text/Books/Functional%20Juggling/74d027b2ef-BotteriETCJuggleboardReserch-MP-3B.md) | 23 | Small nonrandomized pilot. PDF pp. 17–21 include tablet and board tasks and illustrated statistics. See verified means in the review. |
| [Botteri · second location](text/Research%20%2B%20Studies/Functional%20Juggling/74d027b2ef-BotteriETCJuggleboardReserch-MP-3B.md) | 23 | Byte-identical to the copy under Books/Functional Juggling. One experiment. |

## Perception, coordination and transfer

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [Zelic et al. · audio-tactile cues](text/Research%20%2B%20Studies/6aeebc9f3f-Behavioral-Impact-of-Unisensory-and-Multisensory.md) | 11 | Seven jugglers. Timing of cue delivery changed the variability of performance; one combined condition helped and tactile-only stimulation degraded performance (pp. 1–2). |
| [Dessing et al. · gaze fixation](text/Research%20%2B%20Studies/5f07b61e94-Gaze-fixation-improves-the-stability-of-expert-j.md) | 10 | Five experts and five novices. Imposed fixation improved stability in experts; novices did not show that benefit (p. 1). |
| [Riegle van West · International Poi](text/Research%20%2B%20Studies/a78dbfd696-The-effects-of-International-Poi-on-phys.md) | 234 | Thesis comparing poi and tai chi in 79 healthy older adults. Repeated assessments and follow-up separate performance, experience and time (p. 3). |
| [Driemeyer et al. · learning and gray matter](text/Research%20%2B%20Studies/44a5bfdab0-Changes-in-Gray-Matter-Induced-by-Learning.md) | 5 | MRI study of 20 healthy adults learning a cascade. Localized structural change is the measured endpoint (p. 1). |
| [Boyke et al. · training in older adults](text/Research%20%2B%20Studies/03698b9fc5-Training-Induced-Brain-Structure-Changes-in-the-.md) | 5 | Older learners also showed regional gray-matter changes. Compare p. 1 against later practitioner accounts that describe this as white matter. |
| [Van der Weel & Van der Meer · handwriting](text/Research%20%2B%20Studies/61f72c681e-Van-der-Weel-and-Van-der-Meer-2024-handwriting-b.md) | 9 | EEG comparison of digital-pen writing and typing in 36 university students (p. 1). Neural connectivity is a different outcome from later recall. |
| [Collection of scientific studies](text/Research%20%2B%20Studies/fce5ce39f0-Collection-of-scientific-studies-on-the-benefit-.md) | 24 | Secondary collection and discovery aid. Several entries reappear here as complete papers. Retrieve the underlying work before counting or citing a result. |

## Participation, education and community

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [Agans et al. · self-determination](text/Research%20%2B%20Studies/661a4ee65a-9-2019-VazouS-Self-Determination-Through-Circus-.md) | 20 | Single-time survey of 111 youth circus participants aged 10–21. Relatedness was the strongest predictor of several self-reported outcomes (p. 1). |
| [Neave et al. · circus in school](text/Research%20%2B%20Studies/cc67a77694-Neave-etal-Circus-Skills-Theatre-Dance-Performan.md) | 18 | Six-month school comparison. Reported difference concerned teacher ratings of emotional problems (p. 3). |
| [Physical literacy in grades 4 and 5](text/Research%20%2B%20Studies/8905de6789-The-Impact-of-Circus-Arts-Instruction-on-the-Phy.md) | 85 | Clustered quasi-experiment, 211 pupils. Grade-specific motor results, multiple perspectives and unequal PE dosage (pp. 4, 70). |
| [Five Cs at Fekat Circus](text/Research%20%2B%20Studies/45810c1b89-THE-DEVELOPMENT-OF-THE-FEATURES-OF-POSITIVE-YOUT.md) | 99 | Mixed-method thesis in Addis Ababa, 35 practitioners and trainees. Local reports of youth development; selection limits causal interpretation (p. 5). |
| [Socioemotional benefits of the arts](text/Research%20%2B%20Studies/90c32fc603-Socioemotional-Benefits-of-the-Arts-Summary.md) | 18 | Multi-program arts education report. Modest improvement in arts interest; other outcomes varied with age and previous experience or baseline characteristics (pp. 7–12). |
| [Spiegel & Parent · social circus in Quebec](text/Research%20%2B%20Studies/Social%20Circus/c61bcd42a1-Re-approaching-community-development-through-the.md) | 18 | Critical mixed methods. Recognition and collective identity coexist with institutional expectations about productive citizenship (pp. 1–2). |
| [Guenther · Learning social circus](text/Research%20%2B%20Studies/Social%20Circus/7899783539-Learning-social-circus-jumping-through-hoops-to-.md) | 14 | Evaluation of two Tasmanian projects. Family–school connections and partner coordination were central to delivery (pp. 1–2). |
| [Caravan · Research on youth and social circus pedagogy](text/Research%20%2B%20Studies/Social%20Circus/2ca21ca885-Research-on-youth-and-social-circus-pedagogy.md) | 118 | European training and professional-profile mapping. Questionnaires and competence profiles concern the workforce (pp. 6–8, 89). |
| [Maglio & McKinstry · occupational therapy and circus](text/Research%20%2B%20Studies/6739f4dbdd-Occupational-therapy-and-circus-Potential-partne.md) | 4 | Program logic and evaluation design for Circus in Schools. Useful for separating activities from intended outcomes (p. 1). |
| [Fournier et al. · Cirque du Monde as a health intervention](text/Research%20%2B%20Studies/Social%20Circus/c8e9e1094c-Cirque-du-Monde-as-a-health-intervention.md) | 6 | Literature search and practitioner perspectives. The authors found little direct intervention evidence in their search at the time (p. 1). |

## Health, safety and professional experience

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [Kingsnorth et al. · therapeutic clowns](text/Research%20%2B%20Studies/a725581e22-Physiological-and-Emotional-Responses-of-Disable.md) | 11 | Mixed-method ABAB pilot comparing clown visits and television. Ten children contributed to all or part of data collection. Physiology, expression, self-report and nurse interpretation offer different evidence (p. 1). |
| [Nakahara et al. · juggling and anxiety](text/Research%20%2B%20Studies/d065891d22-Effect-of-Juggling-therapy-on-anxiety-disorders-.md) | 4 | Seventeen female outpatients, eight allocated to juggling added to ongoing care. Small adjunctive treatment study (p. 1). |
| [Circus exercise and lymphocytes](text/Research%20%2B%20Studies/16893c5755-Effect-of-Regular-Circus-Physical-Exercises-on-L.md) | 16 | Sixty children, exercise and comparison groups, immune markers. The measured physiological endpoints have limited relevance to workshop design (pp. 1–2). |
| [Ross & Shapiro · performer psychology](text/Research%20%2B%20Studies/31c6efc599-An-exploratory-analysis-of-psychological-factors.md) | 3 | Interviews with four performers (two aerialists and two clowns/mimes). Local file contains only three PDF pages; read the abstract as an account of a small exploratory study. |
| [Martinez et al. · occupational pain](text/Research%20%2B%20Studies/dc3af51827-Occupational-Identification-and-Assimilation-of-.md) | 26 | Interviews and arts-based elicitation with 27 professional aerialists. How a group interprets discomfort can influence what people feel able to disclose (p. 2). |
| [Circus-specific concussion consensus](text/Research%20%2B%20Studies/5ca5db17fe-Circus-specific-extensions-of-the-6th-internatio.md) | 9 | Domain-specific professional consensus. Relevant to the boundary between pedagogical choices and clinical decisions; a separate genre from an effectiveness study. |

## NICA practice and research infrastructure

| Reading copy | PDF pages | What it contributes |
|---|---:|---|
| [NICA · BAG poi workshop](text/NICA/4e6e098547-Poi-Workshop-Fachtagung-BAG-22-03-2025.md) | 22 | Workshop materials connecting prop length, weight, grip, timing, planes and direction to design choices (pp. 2–6). Mostly visual beyond the opening. |
| [NICA · Pusteblume poi workshop](text/NICA/c3466096e9-Poi-Workshop-Pusteblume-17-05-25-compressed.md) | 24 | Overlapping workshop with making, games and movement variants. Compare timing/direction and prop variants on pp. 9–13. |
| [NICA · brochure](text/NICA/Brosch%C3%BCre/094f3d09f3-Broschure-NICA-2.md) | 2 | Two-page public introduction to the organization, purpose and formats. Records intended participation. |
| [NICA · presentation](text/NICA/da02e78db7-NICA-Vorstellung.md) | 17 | Organizational history, partnerships and projects. Useful context for whose practice the collection represents. |
| [CircusWiki technical manual](text/Books/311d5997fb-CircusWiki-Technical-Manual.md) | 49 | Project infrastructure, Markdown, metadata, Git and contribution pathways. Start at pp. 3–7. |
| [NICA mini flyer](text/NICA/Brosch%C3%BCre/NICA-Mini-Flyer.md) | 1 image | Outreach language transcribed from the JPEG. |
