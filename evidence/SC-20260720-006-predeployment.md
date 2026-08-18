# SC-20260720-006 pre-deployment report

- Prospect and source: Exceed Excavations, prospect `SC-20260720-006`; source repository `siterefresh-com-au/siterefresh-prospect-demos`, branch `prospect/sc-20260720-006-exceed-excavations`, immutable source commit `71e713356467eec46fc45320da9bf32851d9ed21`.
- Preview result: deterministic Astro artifact passed secret scan, dependency audit with zero vulnerabilities, Astro diagnostics, production build, links, practical asset-size checks, source-logo and placement gates, and rendered desktop, ultrawide, mobile, light-preference and dark-preference QA.
- Production hostname and route: `https://siterefresh.com.au/work/exceed-excavations-8d3f7c/`.
- Cloudflare target and namespace: existing legacy `site-refresh` Cloudflare Pages production project. This is an additive unlisted prospect-preview route, not a client production launch.
- Release checks: progressive image decode, exact MIME, same-origin SHA-256 comparison against the approved artifact, responsive overflow, photo coverage, centred rail, overlays, angled transitions, and `noindex, nofollow, noarchive`.
- Rollback: restore Cloudflare Pages deployment `468cc7c6-4b15-48b1-b9d4-510906ffc257`, source commit `63b5a5c1d15135e9eb13e9e18d96dcc7cf41d270`.
- Manual steps: none. The delegated instruction explicitly authorises this named prospect through the clean-domain SMS handoff.
- Known exception: the current clean SiteRefresh domain remains on the existing Cloudflare Pages project rather than Workers for Platforms. This release preserves the exact current shared artifact and changes no DNS, billing, production client domain, or existing route.
