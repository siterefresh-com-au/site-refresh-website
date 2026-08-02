# SC-20260729-053 pre-deployment report

- Client ID and repository: SC-20260729-053; source repository `siterefresh-com-au/siterefresh-prospect-demos`.
- Source commit: `2a3fa8aa6b83160473bacd3a07f269787cf49b1f`.
- Staging and preview result: local production artifact passed secret-pattern scan, dependency audit, Astro diagnostics, deterministic build, link checks, asset-size checks, desktop and mobile browser acceptance, interaction checks, overflow checks and robots checks.
- Production hostname and route: `https://siterefresh.com.au/work/exterminate-innisfail-e8c55f7dcc/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Release base: current SiteRefresh pricing release `4d947eb52731761dd35aa79cb88fad90a4dd20e9`, cumulative prospect release `7de4270`, and concurrently published Bowen preview `8384ef7e17a471db55d90cb12436e131d9feb76a`.
- Current SiteRefresh checks: six commercial-flow tests pass, static checks pass, and the published `$3,950 + GST` project price and `$89 + GST/month` hosting price remain intact.
- Rollback: restore Cloudflare Pages deployment `a084a85a-538c-45dd-b0ef-ddac5913d6d5`.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly authorised this named prospect workflow through the email-drafted stage.
- Known exception: the existing public preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This isolated preview release preserves that deployment method and changes no DNS, billing or account configuration.
