# SC-20260721-011 deployment record

- Published route: `https://siterefresh.com.au/work/morrisons-maintenance-plumbing-4f8c2a/`
- Release artifact commit: `a0f1fa13e6b54f98d31310e1a4fd4cbe06e59dcb`
- Cloudflare Pages deployment: `6525f148-03f9-4934-8e49-3d951053e371`
- Deployment status: success; production aliases include `https://siterefresh.com.au` and `https://www.siterefresh.com.au`
- Live QA: pass at 1440x900, 1920x1080 and 390x693 with five decoded `image/*` assets, exact same-origin SHA-256 matches, no browser errors, no horizontal overflow and `noindex, nofollow, noarchive`
- Regression readback: SiteRefresh root, privacy, terms, start, Concrete Control, Exceed Excavations and Eddie Marshall Excavations routes all returned HTTP 200 after deployment
- Rollback deployment: `1881f4a9-486d-4bec-a1d7-1f0cbc991c37`
