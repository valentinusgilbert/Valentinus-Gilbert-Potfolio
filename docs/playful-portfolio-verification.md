# Playful portfolio verification · 9 November 2026

The gallery and hero preview described below record the earlier revision. The latest owner request replaces them with a compact, vertically indexed project explorer and a portrait beside the introduction; see [compact revision verification](compact-portfolio-verification.md).

This revision supersedes the restrained warm-paper design in commit `40ee4d6`. The owner supplied [helloabdullah.com](https://helloabdullah.com/?ref=onepagelove) as a visual reference and explicitly required every earlier project to remain visible.

## What changed

The introduction now uses Bricolage Grotesque, cobalt emphasis, functional role buttons, Gilbert's existing portrait and an interactive project preview. Frontend shows the real Intra Niaga screenshot; Full-stack shows Juragan Truk; ERP shows an honest summary of mcframe capabilities rather than a fictional client interface. Rounded navigation, project browser frames, project hover feedback and a dark personal section follow the reference's playful quality using Gilbert's own content and assets.

All thirteen projects render directly in the gallery. The four recent projects have larger frames; the nine earlier projects retain their real screenshots, descriptions, technologies and existing live links. No project is hidden inside an archive. Original GIF animals, static pause/reduced-motion frames, validated WhatsApp behavior and resume download are preserved. Music stays removed.

## Verification

- Production build passed with 58 modules, approximately 50 KB gzipped JavaScript and 4.8 KB gzipped CSS. No package or dependency changes.
- Eighteen browser assertion groups passed in isolated Chrome. All thirteen projects are visible at 320, 390, 768, 1024 and 1440 px; no horizontal overflow or runtime exceptions were observed at those widths.
- Hero role controls switch actual screenshots and the ERP capability panel with keyboard input. Mobile project hashes remain below the two-row sticky header.
- Existing project links, project disclosures, image fallback, skip link and visible focus, WhatsApp encoding and draft retention, blocked popups, whitespace validation, resume HTTP 200, original GIF movement, pause/resume and reduced motion all passed.
- Source design lint found no failures. Its one warning is the single sticky header blur, used to keep navigation readable above scrolling content.
- Changed UI reviewed against the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). Independent review found no blocking defects; the suggested mobile header clearance was fixed and covered by a browser check.
- Desktop, tablet and phone screenshots were inspected, including the older-project gallery. A tablet heading that wrapped to three lines was shortened.

## Visual audit decisions

The visual inspector uses explicit allowances for `pill-nav`, `card-rows`, `eyebrow` and `icon-cards`. Rounded navigation and project surfaces follow the owner's reference and make all thirteen projects browsable. The eyebrow detector associates text across unrelated cards and closed disclosures. The icon-card detector treats the tiny browser-toolbar `<i>` dots before each real screenshot as a feature icon; the content is actual product imagery, not generic icon cards. These style allowances do not disable checks for overflow, image errors, contrast, text collisions or headline wrapping.

The final visual inspector exited successfully with zero failures and five documented style warnings across 1440, 768 and 390 px.

Remaining style warnings about size count, muted text, lack of video and alignment are design observations. Primary text is readable, secondary copy meets AA contrast, real screenshots carry the work, and no relevant real video was supplied. The explicit frontend role remains visible under the name on a phone.

## Delivery gate

PASS · Content: owner-confirmed scope, source-backed employment, thirteen existing projects, actual screenshots, no fabricated technology stacks, dates, metrics or testimonials.

PASS · Function: role controls, navigation, original project links, disclosures, resume and WhatsApp work; failure and reduced-motion states are checked.

PASS · Accessibility: native buttons and links, labeled form inputs, status feedback, visible focus, skip link, responsive layout, corrected sticky-header clearance and keyboard controls verified.

PASS · Purpose and character: ENERGY 3 / RHYTHM 3 / MOTION 2. The interactive browser preview demonstrates Gilbert's actual work; the original pets and personal photographs preserve his identity. No reference branding or proprietary artwork was copied.

PASS · Craft: production build, eighteen browser assertion groups, design source lint, independent review and actual desktop/mobile screenshot inspection completed.

Preview: http://localhost:9000/. Safari and Firefox were not run. No deployment or push was performed. Design screenshots and the local browser self-check remain in ignored `.taste-skill/` artifacts.
