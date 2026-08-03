# SC-20260803-070 pre-deployment report

- Client/prospect ID: `SC-20260803-070` — Logan Plumbing Co.
- Source repository: `siterefresh-prospect-demos`, branch `prospect/sc-20260803-070-logan-plumbing`, commit `b191daa3f91ce019fced94c79d04090ac748ec3d`.
- Staging result: local Astro build and anonymous-style desktop/mobile browser QA passed.
- Production hostname: `https://siterefresh.com.au/work/logan-plumbing-co-a82f6c/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Checks: secret scan, dependency audit, Astro diagnostics, static build, broken links, asset sizes, robots metadata, four-photo coverage, overlay/transition counts, 1440x900, 768x1024 and 390x693 responsive DOM, fixed light palette, no overflow, and console cleanliness.
- Rollback: restore the current immutable production deployment based on release commit `f5c0a02`.
- Manual steps: none. Ryan authorised this named public, unlisted prospect preview in the outreach instruction.
- Known exception: the preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This additive release changes no DNS, billing, homepage or existing prospect route.
