# SC-20260729-046 pre-deployment report

- Prospect ID and repository: `SC-20260729-046`; source repository `siterefresh-com-au/siterefresh-prospect-demos`.
- Source commit: `d4735d69a92581cb1d5116fa459fab594d6cba4e`.
- Staging and preview result: local production artifact passed secret-pattern scan, dependency audit, Astro diagnostics, deterministic build, link and asset checks, logo source and placement gates, desktop 1440x900 and mobile 390x693 progressive browser review, image decoding, overflow and robots checks.
- Production hostname and route: `https://siterefresh.com.au/work/the-avenues-property-services-access-6f2c91/`.
- Cloudflare target and namespace: existing legacy `site-refresh` Cloudflare Pages production project, production branch `main`.
- Release base: current production commit `afe3078`, preserving the SiteRefresh homepage and every existing prospect preview, including Sparkrite Electrical published concurrently before this release.
- Current rollback deployment: `1b5ba23d-6b24-4090-98dc-d7e5bbe9dc75`.
- Rollback method: restore the Pages production alias to the deployment above.
- Manual DNS, account, billing or approval steps: none. Ryan explicitly authorised this named prospect workflow through the email-review endpoint.
- Known exception: the existing public preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This additive release changes no DNS, billing, homepage or existing prospect route.
