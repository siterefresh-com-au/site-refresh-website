# SC-20260720-008 pre-deployment report

- Prospect and source: Ross Baker Concreting, prospect `SC-20260720-008`, source repository `siterefresh-com-au/siterefresh-prospect-demos`, immutable source commit `b87618aa570fec5c45ba381ef68068efd600dced`.
- Staging and preview result: the local Astro production artifact passed secret-pattern scanning, a zero-vulnerability dependency audit, Astro diagnostics, deterministic build, link checks, asset-size checks, desktop, tablet and 390x693 mobile browser QA, interaction checks, overflow checks and robots checks.
- Production hostname: `https://siterefresh.com.au/work/ross-baker-concreting-formwork-8c6d41/`.
- Cloudflare target: existing legacy `site-refresh` Cloudflare Pages production project, production branch `main`.
- Scope: additive hard-to-guess noindex route only. No DNS, homepage, billing or existing prospect route changes.
- Rollback: restore the immediately previous known-good production source commit `4d947eb52731761dd35aa79cb88fad90a4dd20e9` and its Cloudflare Pages deployment.
- Manual steps: none expected.
- Known exception: the existing prospect preview fleet remains on legacy Cloudflare Pages rather than Workers for Platforms. This release preserves the current deployment method for an isolated Track A prospect concept.
