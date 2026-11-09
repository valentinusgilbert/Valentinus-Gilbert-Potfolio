# Portfolio verification · 9 November 2026

The redesign uses the approved warm editorial direction: off-white, dark ink, brick-red actions, personal typography, asymmetric project previews. Frontend development leads the introduction; full-stack ownership and ERP experience follow with concrete examples.

## Evidence

- Production: `npm.cmd run build` passed after restoring the pets; 57 modules, approximately 46 KB gzipped application JavaScript and 3.7 KB gzipped CSS. No dependencies added.
- Browser: `.taste-skill/browser-check.mjs` passed all 16 assertion groups, covering the portfolio flows and walking animals in isolated Chrome. Layouts at 320, 390, 768, 1024 and 1440 pixels have no horizontal overflow or runtime exceptions. Internal anchor destinations and labeled form fields were checked at each width. The animal track was visually checked in desktop and 320 px captures; keyboard pause, resume, static-frame switching and reduced motion all passed.
- Keyboard: skip link, project disclosures and the nine-project archive open/close using Tab and Enter; visible focus verified.
- Contact: special characters and multiline messages survive URL encoding; blocked popups show recovery instructions; drafts remain; whitespace-only inputs focus the invalid field and become valid after editing. No message was sent during testing.
- Media: failed archive images hide correctly; failed featured screenshots retain readable fallback and the live project link. Resume URL returns HTTP 200. Reduced motion disables smooth scrolling and decorative transitions.
- Static review: changed mounted UI checked against the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md); source design lint reports zero failures; `git diff --check` passes.
- Independent review: fixed the failed-image visibility issue it identified. A certification removal visible in the aggregate Git diff predates this task and was not changed here.

## Content and image sources

Employment follows the owner's [LinkedIn](https://www.linkedin.com/in/valentinus-gilbert-sanjaya/). Project descriptions follow the owner's messages and the public project sites. The owner confirmed planning, design, full-stack implementation and deployment for all four additions; frameworks, launch dates, usage metrics and financial outcomes were not invented.

Real public homepage screenshots were captured from [Juragan Truk](https://juragantruk.com), [Intra Niaga](https://intraniaga.com), [Diskonan](https://diskonan.online) and [Insuren](https://insuren.id). They are committed-source assets under `portfolio/src/assets/project/`, rather than runtime embeds. Earlier project screenshots and records remain in the archive. The existing personal photograph was re-encoded to a 212 KB JPEG; the original PNG remains intact.

## Design check exceptions

The browser inspector runs with `--allow palette-claude,still-page,eyebrow`. These are recorded decisions, not suppressed functional checks:

Redesign inspector result before the walking-pet addition: exit code 0, zero failures and five documented style warnings. Earlier captured baseline: 16 failures and eight warnings. After adding pets, the two changed components passed source design lint and were checked through the browser tests and dedicated screenshots.

- `palette-claude`: the warm off-white / brick palette is the direction proposed in the conversation and selected by the owner.
- `still-page`: the initial design deliberately used short hover feedback and native disclosures. The owner subsequently requested the original walking pets; these now live in a separate track below the introduction, with a keyboard-accessible pause control. Reduced motion selects static PNG frames and disables both walking and turning. Pausing also switches animated sprites to static frames, so the GIF animation stops too.
- `eyebrow`: the geometric detector reports hidden disclosure list items, a decorative arrow, and a previous employment bullet as labels for unrelated headings. The actual rendered layout and semantic headings were reviewed separately; these are not eyebrow components.

The remaining typeface, mixed-font, size-count, muted-secondary-text, name-only-heading and no-video warnings are style heuristics. The title is accompanied by the explicit frontend role and an explanation of the work. Small text meets AA contrast; all section body text remains 16 px or larger. Video would add weight without explaining these products better than the real screenshots.

## Antislop delivery gate

PASS · Hard gate, content: four real projects, confirmed ownership, source-backed employment, no invented statistics, customer quotes or certifications.

PASS · Hard gate, interactions: native navigation, disclosures, resume download and WhatsApp action have real destinations; missing-image and popup-blocking states are checked.

PASS · Hard gate, accessibility: semantic landmarks and headings, skip link, labeled fields, visible focus, native keyboard controls, invalid-input focus and reduced motion verified in Chrome.

PASS · Purpose gate: serif name treatment supplies personal typographic identity; project backgrounds frame real product screenshots; action arrows identify navigation. No gradient fills, glass cards, glow, ornamental grids or repeated feature-icon cards are mounted.

PASS · Liveliness: ENERGY 3 / RHYTHM 3 / MOTION 2 after the owner's request to restore walking pets. Oversized name, varied project widths, real interfaces, personal photograph and the original animal sprites carry the identity. The small transparent sprites reuse the existing assets; static frames are provided for pause and reduced motion.

PASS · Craft: production build, five viewport checks, source lint, independent review and before/after screenshots recorded. Existing project data, resume asset and original photos preserved.

## Limits

Preview: http://localhost:9000/. Production deployment, pushing and merging are outside this verification. Runtime checks used Chrome; Safari and Firefox were not run. Screenshots are snapshots and will need refreshing when the project sites change. Local design screenshots and browser-check scripts are in the ignored `.taste-skill/` directory and use the installed taste-skill CDP helper.
