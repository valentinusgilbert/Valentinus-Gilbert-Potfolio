# Compact portfolio revision

The latest owner instructions replace the long project gallery with a desktop vertical navigator and a single large preview. On phones, a native select and Previous / Next controls replace the side list. All thirteen original project records, images, descriptions, dates, technologies and URLs remain intact. No autoplay is used for project navigation.

The portrait now sits beside “I’m Gilbert”, including on phones. Frontend / Full-stack / ERP buttons change a short description only; the separate hero project-preview panel is removed. The greeting cycles through Halo, Hello, Hola, Bonjour, Ciao, Hallo and Japanese. It respects reduced motion and stops in background tabs; activating the greeting pauses it. Its timer is cleared on unmount. “Hello from Tangerang Selatan”, “One person / Quite a few hats”, and the visible pet caption/control text are gone. The new portrait caption is “Design. Code. Deploy.”

Original GIF sprites remain. The animal track itself is a chrome-free native button with an accessible action name, visible keyboard focus and optional tooltip, so motion can still be stopped without a separate visible Pause animals button. The existing static frames remain for pause and reduced motion. Music remains removed.

## Verification evidence

The local browser self-check was first observed failing on the old thirteen-card gallery, then updated to verify the new compact requirement. Independent review identified mixed Tab/arrow focus navigation jumping from the selected index; a regression assertion reproduced it and the handler was corrected to move relative to the focused button.

The browser check covers five widths (320, 390, 768, 1024 and 1440), one active project with thirteen available choices, traversal through all thirteen titles, previous/next boundaries, Home/End, mixed Tab/arrow navigation, mobile native selection, deep-link restoration, role description changes, multilingual greeting and pause, original GIF movement/pause/reduced motion, screenshots failing safely, resume download and existing WhatsApp validation/encoding/draft retention.

All 22 browser assertion groups passed. A production build passed with 58 modules, about 49 KB gzipped application JavaScript and 4.8 KB gzipped CSS. Design source lint found no failures or warnings in the three changed components.

The visual inspector allows `pill-nav` and `eyebrow` for functional rounded selectors and geometric label false positives, as in the earlier owner-selected reference. `few-pictures` is explicitly allowed for the owner's compact, single-preview explorer: showing thirteen pictures simultaneously would restore the long gallery they requested removing. All thirteen real screenshots remain selectable and their corresponding project titles are verified through the browser check. Disabled navigation text was darkened after a visual contrast warning.

The final inspector exited with zero failures and three documented style warnings (size count, muted secondary text and no supplied video). Desktop, tablet and phone captures were inspected, including the mobile project picker and the greeting changing language. Text contrast warnings were resolved.

Changed UI is reviewed against the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). Desktop and phone screenshots are inspected locally. Native controls, status announcements, keyboard focus, bounded navigation and reduced motion are preserved. No dependencies were added.

## Delivery decisions

PASS · Content integrity: all thirteen projects and source-backed employment/skill descriptions are retained; no unverified metrics, project technologies or customer claims are added.

PASS · Purpose and personality: portrait beside the name, functional role choices, multilingual greeting and original pet sprites carry the personal identity. Project selection is compact and manual.

PASS · Motion design: short heading/portrait entrances and a short project entrance are limited to transforms/opacity; greeting and pets can be paused without separate visible control chrome; reduced motion is respected.

PASS · Function and accessibility: all thirteen project selections, bounded controls, focus-relative arrow navigation, native mobile selection, direct project links, role descriptions, greeting control, GIF controls, contact and resume were verified. Visible focus, labels and status feedback are retained.

PASS · Craft: production build, 22 browser assertion groups, independent review with a reproduced/fixed keyboard regression, source lint and actual screenshot inspection completed.

Remaining limitations: runtime checks use Chrome, not Safari/Firefox. The rotating greeting and static pause frames are deliberate accessibility choices. No deployment or push is included in this task.

## Additional hero detail

Following another look at the owner's reference, the visible “based in Tangerang Selatan” phrase was removed from About. The hero now includes actual GitHub, LinkedIn and CV links with SVG data from the already-installed icon package and the existing resume asset. This supplies useful first-screen actions without adding filler claims or invented numbers.

The existing portrait responds subtly to mouse movement. Pointer work is scheduled through a cancellable animation frame, resets on leave/cancel, skips touch and reduced motion, and is cleaned up on unmount. It uses the existing image; no replacement photo or new bitmap was generated. Keyboard users retain the static portrait and native profile links.

Production build passed with 60 modules, about 50.3 KB gzipped application JavaScript and 5 KB CSS. All 23 browser assertion groups passed, including profile links and location-copy removal at five widths, portrait movement/reset and reduced-motion fallback. Source design lint returned zero failures and warnings. Independent focused review found no actionable defects. Updated desktop and phone screenshots were inspected.
