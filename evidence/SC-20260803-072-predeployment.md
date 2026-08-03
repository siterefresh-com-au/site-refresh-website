# SC-20260803-072 pre-deployment report

- Client/prospect ID: `SC-20260803-072` - Gill Handyman Services Brisbane.
- Source repository: `siterefresh-prospect-demos`, branch `prospect/sc-20260803-072-gill-handyman`, commit `e05eb3246bff7dcd5c0763447268e51f2d0d3507`.
- Staging result: local production artifact passed secret-pattern scan, dependency audit, Astro diagnostics, deterministic build, broken-link scan, asset-size checks and desktop, tablet and mobile browser QA.
- Production hostname and route: `https://siterefresh.com.au/work/gill-handyman-fix-list-6d4a91/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Release base: cumulative prospect release `3b5e552`, preserving the concurrently published Bayside Fencing, Homefield Mowing and Brisbane electrical routes.
- Current SiteRefresh checks: commercial-flow tests and static checks must pass before deployment; the published `$3,950 + GST` project price and `$89 + GST/month` hosting price remain intact.
- Rollback: restore Cloudflare Pages deployment `d02f34a7-0330-41da-97e3-237d37d3bb8c`.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly authorised this named prospect workflow through the email-drafted stage.
- Known exception: the existing public preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This isolated additive preview release preserves that deployment method and changes no DNS, billing, homepage or existing prospect route.
