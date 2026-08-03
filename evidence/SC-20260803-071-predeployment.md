# SC-20260803-071 pre-deployment report

- Client/prospect ID: `SC-20260803-071` - Handyman & Gardening Services Brisbane.
- Source repository: `siterefresh-prospect-demos`, branch `prospect/sc-20260803-071-handyman-gardening`, commit `5c83a469feb1107c21eb62c8a2976b3ce70ebd8c`.
- Staging result: local Astro build and anonymous-style desktop/mobile browser QA passed.
- Production hostname: `https://siterefresh.com.au/work/handyman-gardening-brisbane-saturday-list-a4e9c7/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Checks: secret scan, dependency audit, Astro diagnostics, static build, broken links, asset sizes, robots metadata, four-photo coverage, overlay/transition counts, 1440x900 and 390x693 responsive DOM, fixed light palette, no overflow, and telephone link verification.
- Rollback: restore production deployment `8327fd4e-cf5d-4e76-98de-e1f46a20bcaa` from release commit `83f4614`.
- Manual steps: none. Ryan authorised this named public, unlisted prospect preview in the outreach instruction.
- Known exception: the preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This additive release changes no DNS, billing, homepage, or existing prospect route.
