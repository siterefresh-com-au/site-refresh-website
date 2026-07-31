# SC-20260729-042 pre-deployment report

- Client ID and repository: SC-20260729-042; source repository
  `siterefresh-com-au/siterefresh-prospect-demos`.
- Source commit: `d017686`.
- Staging and preview result: local production artifact passed secret scan,
  dependency audit, Astro diagnostics, build, link, asset-size and responsive
  browser acceptance checks.
- Production hostname and route:
  `https://siterefresh.com.au/work/angoves-fencing-6046c3/`.
- Cloudflare target: existing `site-refresh` Pages production project.
- Release base: exact current production commit
  `5e0306e65ca9a39fa3a55e7812882f7226d3afda`.
- Rollback: restore Cloudflare Pages deployment
  `1b244537-d141-4dd1-bc68-30654e982530`.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly
  authorised this named prospect workflow through the email-drafted stage.
- Known exception: the existing public preview fleet still uses legacy
  Cloudflare Pages rather than Workers for Platforms. This isolated release
  preserves that deployment method and changes no DNS, billing or account
  configuration.
