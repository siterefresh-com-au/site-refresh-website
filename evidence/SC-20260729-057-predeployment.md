# SC-20260729-057 predeployment

- Prospect: Rob's Tree Solutions (`SC-20260729-057`)
- Source repository: `siterefresh-prospect-demos`
- Source commit: `aa8b138569b2675c88ef958e0909ec4d3a233861`
- Production hostname and route: `https://siterefresh.com.au/work/robs-tree-solutions-7f2c9d/`
- Cloudflare target: legacy `site-refresh` Pages production project, production branch `main`
- Current rollback deployment: `41b1014b-8437-4eb5-adb7-f99acce7acbd`
- Checks completed before release: secret scan, dependency audit, Astro diagnostics, deterministic build, link check, asset-size check, desktop/ultrawide/mobile rendered QA, decoded image MIME and hash checks, accessibility review, fixed light/dark palette verification, and zero horizontal overflow.
- Checks required after release: anonymous exact-route load, robots header/meta, progressive desktop/mobile rendering, console/network errors, decoded image MIME and live-to-artifact hashes.
- Rollback method: restore the Pages production alias to deployment `41b1014b-8437-4eb5-adb7-f99acce7acbd`.
- Manual DNS, billing or account step: none.
- Exception: this existing outreach preview host predates the Workers for Platforms fleet standard. This authorised release adds only an isolated, unlisted prospect route and does not alter DNS, the SiteRefresh homepage, or billing.
