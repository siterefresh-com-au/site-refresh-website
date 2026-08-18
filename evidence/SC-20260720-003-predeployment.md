# SC-20260720-003 pre-deployment report

- Prospect and source: Concrete Control, prospect `SC-20260720-003`, source repository `siterefresh-com-au/siterefresh-prospect-demos`, isolated source commit `be20da46c7d67bea5e65a6561af9c6e9e0daf478`.
- Local review result: the immutable Astro artifact passed secret scanning, dependency audit, diagnostics, deterministic build, broken-link and asset-size checks, plus progressive Chrome rendering at desktop, ultrawide and mobile sizes with decoded image, MIME, SHA-256, overflow, fixed-palette, photo-coverage, overlay, transition and robots checks.
- Production hostname and route: `https://siterefresh.com.au/work/concrete-control-8d31b7f2/`.
- Cloudflare target and namespace: existing legacy `site-refresh` Cloudflare Pages production project, production branch `main`.
- Release base: exact current production source `eb0f705`, preserving the SiteRefresh homepage and every existing prospect preview.
- Current rollback deployment: `a04a165c-958e-4b5b-ba0c-06dd52a556c5`.
- Rollback method: restore the Pages production alias to the deployment above.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly authorised the selected prospect workflow through its governed terminal branch.
- Known exception: the existing prospect-preview fleet remains on legacy Cloudflare Pages rather than Workers for Platforms. This additive release changes no DNS, billing, homepage or existing prospect route and is not a client production launch.
