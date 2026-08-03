# SC-20260803-074 predeployment

- Prospect: Burleigh Landscaping (`SC-20260803-074`)
- Source repository: `siterefresh-prospect-demos`
- Source commit: `654b27841872340b0cfb38690f62300c7c56b847`
- Staging route: `https://burleigh-landscaping-6f2c91.siterefresh.chatgpt.site/work/burleigh-landscaping-groundline-6f2c91/`
- Production route: `https://siterefresh.com.au/work/burleigh-landscaping-groundline-6f2c91/`
- Deployment target: legacy `site-refresh` Cloudflare Pages production project
- Current rollback deployment: `4f53f202-9353-49b4-bf79-c41c6f6a53aa`
- Checks passed before release: secret scan, dependency audit, Astro diagnostics/build, broken-link and asset-size checks, anonymous staging access, desktop 1440x900 and mobile 390x693 visual QA, no horizontal overflow, fixed light/dark rendering, 900-frame genuine mobile-scroll capture
- Rollback method: restore the Pages production alias to the deployment above
- Exception: this existing outreach preview host predates the Workers for Platforms fleet standard; this release only adds an isolated unlisted prospect route and does not alter DNS or billing.
