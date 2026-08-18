# SC-20260720-007 release result

- Source commit: `a14f559dbb227b41211188fa2650bf8d22fdd43b`.
- Cumulative release commit: `bcf88736f19a9e8f48fc5f6fa8763670bf855e5d`.
- Cloudflare Pages production deployment: `1881f4a9-486d-4bec-a1d7-1f0cbc991c37`.
- Clean route: `https://siterefresh.com.au/work/eddie-marshall-excavations-06ea1ebc/`.
- Result: anonymous HTTP 200; HTML meta and response header both `noindex, nofollow, noarchive`.
- Exactness: live HTML, CSS, favicon, official logo and four image assets match the approved release artifact byte-for-byte by SHA-256 with correct MIME types.
- Rendered QA: PASS at desktop, ultrawide and mobile; zero horizontal overflow; all images decoded; no reported failures.
- Regression check: public homepage, Exceed Excavations, Concrete Control and Switched On Electrical routes remained HTTP 200 after the additive release.
- Rollback: restore Cloudflare Pages deployment `33c4fe58-2d8b-424e-9105-1f763ceb21a7` based on cumulative source commit `f1bc7c47d684a7c647ce1aad89f045321e0f4ef9`.
