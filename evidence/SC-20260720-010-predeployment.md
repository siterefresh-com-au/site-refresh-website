# SC-20260720-010 predeployment

- Prospect: Coastside Electrical (`SC-20260720-010`)
- Source repository: `siterefresh-com-au/siterefresh-prospect-demos`
- Source commit: `22f788430aa835df81cdc957589ceab0aade7e17`
- Preview route: `https://siterefresh.com.au/work/coastside-electrical-7c9a34/`
- Deployment target: legacy `site-refresh` Cloudflare Pages production project
- Current rollback deployment: `d4e096d6-b56b-40e0-aa7b-2fbef2399085`
- Checks completed before release: secret scan, dependency audit, Astro diagnostics and build, link and asset checks, exact noindex directives, desktop and mobile rendering, horizontal overflow and above-the-fold CTA checks
- Rollback method: restore the Pages production alias to the deployment above
- Exception: this existing outreach preview host predates the Workers for Platforms fleet standard; this release only adds an isolated unlisted prospect route and does not alter DNS, billing or account configuration.
