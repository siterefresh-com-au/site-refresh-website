# SC-20260721-011 pre-deployment report

- Prospect and source: Morrisons Maintenance Plumbing, prospect `SC-20260721-011`; source repository `siterefresh-com-au/siterefresh-prospect-demos`, branch `prospect/sc-20260721-011-morrisons-plumbing-clean`, immutable source commit `c7bb4c1e2f15407c087eea44820f6a4560b3721f`.
- Preview result: deterministic Astro artifact passed secret scan, dependency audit with zero vulnerabilities, Astro diagnostics, production build, links, practical asset-size checks, official-logo source and placement gates, and rendered desktop, ultrawide and mobile QA.
- Production hostname and route: `https://siterefresh.com.au/work/morrisons-maintenance-plumbing-4f8c2a/`.
- Cloudflare target and namespace: existing legacy `site-refresh` Cloudflare Pages production project. This is an additive unlisted prospect-preview route, not a client production launch.
- Cumulative release base: Eddie Marshall Excavations production artifact commit `bcf88736f19a9e8f48fc5f6fa8763670bf855e5d`; its route and all other existing routes are retained before this additive change.
- Release checks: full shared commercial-flow tests and static checks, progressive image decode, exact MIME, same-origin SHA-256 comparison against the approved artifact, responsive overflow, photo coverage, centred rail, overlays, angled transitions, and `noindex, nofollow, noarchive`.
- Rollback: restore Cloudflare Pages deployment `1881f4a9-486d-4bec-a1d7-1f0cbc991c37`, source commit `bcf88736f19a9e8f48fc5f6fa8763670bf855e5d`.
- Manual steps: none. Ryan's current batch instruction and the root coordinator's serialized release go-ahead explicitly authorise this named prospect through the clean-domain SMS handoff.
- Known exception: the current clean SiteRefresh domain remains on the existing Cloudflare Pages project rather than Workers for Platforms. This release preserves the exact current shared artifact and changes no DNS, billing, production client domain, or existing route.
