# SEO setup

Canonical production URL: **https://valentinusgilbert.social/**

## What is already in the repo

- `index.html` — title, description, robots meta, canonical, Open Graph, Twitter card, `Person` + `WebSite` + `ProfilePage` + project `ItemList` JSON-LD.
- `public/robots.txt` — allows crawling and points to the sitemap.
- `public/sitemap.xml` — homepage URL with `lastmod`.
- `public/og-image.png` — 1200×630 social preview image.
- `profile.js` — `identity.website` now points to the new domain.

## Deploy first

Search Console can only verify and index a live site. As of 18 Nov 2026, both the old `.me` domain and the Vercel URL returned `DEPLOYMENT_NOT_FOUND`, and `valentinusgilbert.social` did not resolve yet.

1. Deploy the current `portfolio` build to Vercel.
   - If the Vercel project points at the repository root, set **Root Directory** to `portfolio`.
   - Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
2. Add `valentinusgilbert.social` in Vercel → Project → Settings → Domains.
3. Add `www.valentinusgilbert.social` too, then redirect it to the apex domain so only one canonical URL is indexed.
4. Make sure `https://valentinusgilbert.social/` returns the site, not a 404.

## Google Search Console

1. Open Search Console → **Add property** → **Domain**.
2. Enter `valentinusgilbert.social`. Domain properties cover both apex and `www`.
3. Verify with a DNS TXT record in Vercel DNS. This is more reliable than the HTML tag method.
4. After verification, open **Sitemaps** and submit:
   `https://valentinusgilbert.social/sitemap.xml`
5. Use **URL Inspection** on `https://valentinusgilbert.social/` and click **Request indexing**.
6. Check **Pages / Indexing** after a few days. Indexing is not instant and is not guaranteed.

If you prefer HTML tag verification instead, paste the tag from Search Console into `<head>` in `index.html`; DNS verification is still the better option for a domain property.

## Project visibility

The site is a single-page portfolio, so project names and descriptions are included in the page content and in the `ItemList` structured data. That gives Google project keywords to associate with your name and site.

For stronger project-level search results, the next step is to give each project its own URL and prerendered/static HTML, for example:

- `/projects/juragan-truk`
- `/projects/insuren`
- `/projects/diskonan`

That requires routing plus prerendering or SSR. Start with the homepage indexing first; it is the highest-impact step.

## After deployment

- Open `/robots.txt` and `/sitemap.xml` in the browser to confirm they are served.
- Test the social preview with LinkedIn Post Inspector or Facebook Sharing Debugger.
- Add the site URL to your LinkedIn profile, GitHub profile, and resume so Google can discover it through backlinks.
- Update `lastmod` in `public/sitemap.xml` when the page content changes materially.
