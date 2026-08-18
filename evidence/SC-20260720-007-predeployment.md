# SC-20260720-007 pre-deployment report

- Prospect and source: Eddie Marshall Excavations, prospect `SC-20260720-007`; source repository `siterefresh-com-au/siterefresh-prospect-demos`, branch `prospect/sc-20260720-007-eddie-marshall-excavations`, immutable source commit `a14f559dbb227b41211188fa2650bf8d22fdd43b`.
- Preview result: deterministic Astro artifact passed secret scan, dependency audit with zero vulnerabilities, Astro diagnostics, production build, links, practical asset-size checks, official-logo source and placement gates, and rendered desktop, ultrawide and mobile QA.
- Production hostname and route: `https://siterefresh.com.au/work/eddie-marshall-excavations-06ea1ebc/`.
- Cloudflare target and namespace: existing legacy `site-refresh` Cloudflare Pages production project. This is an additive unlisted prospect-preview route, not a client production launch.
- Cumulative release base: Exceed Excavations production artifact commit `f1bc7c47d684a7c647ce1aad89f045321e0f4ef9`; its route and all other existing routes were retained before this additive change.
- Release checks: full shared commercial-flow tests and static checks, progressive image decode, exact MIME, same-origin SHA-256 comparison against the approved artifact, responsive overflow, photo coverage, centred rail, overlays, angled transitions, and `noindex, nofollow, noarchive`.
- Rollback: restore Cloudflare Pages deployment `33c4fe58-2d8b-424e-9105-1f763ceb21a7`, source commit `f1bc7c47d684a7c647ce1aad89f045321e0f4ef9`.
- Manual steps: none. The delegated instruction explicitly authorises this named prospect through the clean-domain SMS handoff.
- Known exception: the current clean SiteRefresh domain remains on the existing Cloudflare Pages project rather than Workers for Platforms. This release preserves the exact current shared artifact and changes no DNS, billing, production client domain, or existing route.
