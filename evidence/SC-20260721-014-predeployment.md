# Reliable Refrigeration clean-demo predeployment

- Client/prospect ID: SC-20260721-014
- Source repository: siterefresh-prospect-demos, branch `prospect/sc-20260721-014-reliable-refrigeration`
- Source commit: `915e0fad9d0c4fcf20739582d02b577ee7f862d8`
- Preview result: PASS at 1440x900, 1920x1080 and 390x693 in light and dark browser preferences; decoded assets, local hashes, overflow, console and network checks passed.
- Public hostname: `siterefresh.com.au`
- Public route: `/work/reliable-refrigeration-6a47c8e3/`
- Target: legacy Cloudflare Pages project `site-refresh`, production branch `main`.
- Cumulative base: `a0f1fa13e6b54f98d31310e1a4fd4cbe06e59dcb` (Morrisons deployment `6525f148-03f9-4934-8e49-3d951053e371`).
- Checks: secret scan, zero high-severity audit findings, Astro diagnostics/build, links, asset-size, logo source and placement, rendered browser QA.
- Rollback: redeploy the cumulative base artifact above if live verification fails.
- Exception: this is an additive noindex prospect demo on the existing legacy Pages project, not a new client production launch or Workers-for-Platforms migration.
- Manual steps: none. No DNS, billing, client production or send action is authorised.
