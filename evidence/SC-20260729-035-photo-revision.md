# SC-20260729-035 photo revision

- Requested change: replace the roof-anatomy illustration with an appropriate generated photograph.
- Source commit: `58f2f7032c1f997dd05e381aade7f057b25161c7`
- Release base: `d12cf5e1202c2148b70748f3b67ba9cae3f3e8d1`
- Production route: `https://siterefresh.com.au/work/paul-newport-roof-4ac05c7c/`
- Cloudflare target: existing legacy Pages project `site-refresh`, production branch `main`.
- Rollback: redeploy known-good production deployment `1b100037-f39c-4e3f-a16e-fb81e7a820e6`.
- Checks: project quality suite, release tests, static checks, anonymous preview HTTP and asset checks, desktop and mobile visual QA.
- Concurrency: merged and rechecked the current Towers Carpet Care copy release before production publication.
- Scope: website revision only. Existing production video, thumbnail, checkout state and email state are unchanged.
- Known exception: this public preview fleet remains on the existing legacy Cloudflare Pages project.
