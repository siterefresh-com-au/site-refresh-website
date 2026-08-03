# SC-20260803-077 pre-deployment report

- Client ID and repository: SC-20260803-077; source repository `siterefresh-com-au/siterefresh-prospect-demos`.
- Source commit: `09b22420f12a7a713ee0f919ff043549cf66d136`.
- Staging and preview result: local production artifact passed secret-pattern scan, dependency audit, Astro diagnostics, deterministic build, link checks, asset-size checks, desktop and mobile browser acceptance, interaction checks, overflow checks and robots checks.
- Production hostname and route: `https://siterefresh.com.au/work/homefield-mowing-weekend-7c4e91/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Release base: cumulative prospect release `e2acaa7`, preserving every currently published prospect preview.
- Current SiteRefresh checks: six commercial-flow tests and static checks must pass before deployment; the published `$3,950 + GST` project price and `$89 + GST/month` hosting price remain intact.
- Rollback: restore Cloudflare Pages deployment `68da99b2-df16-4e7b-96a8-ed78e764be41`.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly authorised this named prospect workflow through the email-drafted stage.
- Known exception: the existing public preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This isolated preview release preserves that deployment method and changes no DNS, billing or account configuration.
