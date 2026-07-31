# SC-20260729-035 pre-deployment report

- Client/prospect ID: SC-20260729-035
- Source repository: siterefresh-com-au/siterefresh-prospect-demos
- Source commit: a41580359e7ab056479490d5df648171f85cd005
- Release repository: siterefresh-com-au/site-refresh-website
- Release base: 016747bda8d1bf074d10406671f471b639af24b9
- Staging result: local production build passed secret scan, dependency audit, Astro diagnostics, link checks, asset limits, desktop/mobile visual QA, overflow checks, and robots checks.
- Production hostname and route: https://siterefresh.com.au/work/paul-newport-roof-4ac05c7c/
- Cloudflare target: existing legacy Pages project `site-refresh`, production branch `main`.
- Rollback: redeploy known-good Cloudflare Pages deployment `1d9770c0-5ce6-4b35-9f86-4286c889a345` built from release commit `016747b`.
- Manual steps: none.
- Known exception: this existing SiteRefresh public preview fleet still uses legacy Cloudflare Pages, not the Workers for Platforms fleet standard. This release preserves that deployment method and does not change DNS, billing, or account configuration.
