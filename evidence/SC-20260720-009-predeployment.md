# SC-20260720-009 predeployment

- Prospect: Clean & Colour Roofing (`SC-20260720-009`).
- Source repository: `siterefresh-prospect-demos`.
- Approved source commit: `efdc4d09b962dbc90d77bb13de4758203bf5c30a` (after merging the current Sites source head).
- Clean production route: `https://siterefresh.com.au/work/clean-colour-roofing-9c4e7a/`.
- Deployment target: existing legacy `site-refresh` Cloudflare Pages production project.
- Current rollback deployment: `f479603c-a88c-401b-a525-8cc432d32088`.
- Checks completed before release: source quality suite, dependency audit, link and asset checks, noindex metadata, desktop and 390x693 mobile visual QA, public preview HTTP 200 and responsive navigation verification.
- Rollback method: use the Cloudflare Pages deployment rollback endpoint to restore deployment `f479603c-a88c-401b-a525-8cc432d32088`.
- Exception: the existing outreach preview host predates the Workers for Platforms fleet standard; this release adds one isolated unlisted prospect route and does not change DNS, billing or the SiteRefresh homepage.

