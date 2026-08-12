# SC-20260721-013 predeployment record

- Client: North Coast Commercial Cleaners
- Source repository: siterefresh-com-au/siterefresh-prospect-demos
- Approved source commit: c2187f6536e8b297e3b49a65aae10eeddc0cb315
- Release base: ec45b0dfa87118d295601120dfdd67e25bf2a0b1
- Public preview: https://siterefresh.com.au/work/north-coast-cleaners-shiftline-8c7f31/
- Cloudflare target: Pages project site-refresh, production environment
- Search directives: noindex, nofollow, noarchive in HTML and /work/* response headers
- Local checks: secret scan, dependency audit, Astro typecheck, build, broken links, practical asset sizes, desktop and mobile visual QA
- Rollback method: redeploy the immediately previous successful production deployment recorded before this release
- Exception: this legacy preview route uses the existing SiteRefresh Cloudflare Pages project; it does not change client DNS or launch a production client hostname
