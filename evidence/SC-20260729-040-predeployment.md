# SC-20260729-040 pre-deployment

- Client ID: SC-20260729-040
- Source repository: siterefresh-com-au/siterefresh-prospect-demos
- Validated source commit: 00b5577f7a8383c7f5b020b316d97a992b933b7d
- Production repository: siterefresh-com-au/site-refresh-website
- Production hostname: siterefresh.com.au
- Route: /work/cairns-tiling-services-7c4e91/
- Cloudflare target: legacy `site-refresh` Pages project
- Checks: secret scan, dependency audit, Astro diagnostics, production build,
  link validation, asset budgets, responsive browser QA and console QA passed.
- Rollback: retain the production deployment immediately preceding this release
  and redeploy it if post-release verification fails.
- Approval: Ryan explicitly authorised autonomous completion through the
  verified Gmail draft stage for this prospect.
- Exception: this existing legacy Pages project predates the Workers for
  Platforms fleet standard; no migration is attempted in this release.
