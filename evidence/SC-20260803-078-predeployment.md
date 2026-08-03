# SC-20260803-078 predeployment

- Prospect: MJ's Mowing (`SC-20260803-078`)
- Source repository: `siterefresh-prospect-demos`
- Source commit: `e22ec538277011635271bf28cef82a6937b66713`
- Preview route: `https://siterefresh.com.au/work/mjs-mowing-4f8b2d/`
- Deployment target: legacy `site-refresh` Cloudflare Pages production project
- Current rollback deployment: `50a4c2ae-6fcc-49ce-ae79-12664c968b79`
- Checks required before release: test suite, link and asset checks, `noindex` response header, anonymous desktop and mobile rendering
- Rollback method: restore the Pages production alias to the deployment above
- Exception: this existing outreach preview host predates the Workers for Platforms fleet standard; this release only adds an isolated unlisted prospect route and does not alter DNS or billing.
