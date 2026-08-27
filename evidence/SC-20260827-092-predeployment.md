# Pre-deployment report: SC-20260827-092

- Client ID: `SC-20260827-092`; source repository: `siterefresh-com-au/siterefresh-prospect-demos`; immutable source commit: `ef2281433c393e5aa656ba2262734dc542e45428`.
- Source route: `/work/queensland-beauty-training-academy-8c72f1/`; generated photography and prospect styling are isolated to that route.
- Preview result: PASS at desktop 1440x900, ultrawide 1920x1080 and true mobile 390x693, including progressive scrolling, decoded WebP imagery, no overflow, no browser errors, noindex metadata and exact local asset hashes.
- Production hostname: `https://siterefresh.com.au/work/queensland-beauty-training-academy-8c72f1/`.
- Cloudflare target: legacy Pages project `site-refresh`, production branch `main` (documented additive-preview architecture exception).
- Tests: prospect secret scan and dependency audit passed; Astro build, broken-link and asset-size checks passed. The repository-wide Astro diagnostic is blocked only by a pre-existing unrelated `DemoFrame` prop error in the concurrent El Lago route.
- Rollback: use the immediately previous Cloudflare Pages deployment; the additive release commit is also independently revertible.
- Manual steps: none. Ryan's delegated instruction explicitly authorises this named public noindex review route as part of the outreach workflow.
- Known exception: the existing clean-domain preview fleet remains on legacy Cloudflare Pages pending controlled migration to Workers for Platforms; no DNS change or client production launch is performed.
