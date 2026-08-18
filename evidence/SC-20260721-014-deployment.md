# SC-20260721-014 deployment record

- Published route: `https://siterefresh.com.au/work/reliable-refrigeration-6a47c8e3/`
- Final release artifact commit: `e2e6f4fc5df2a63361d0e38fea72640ef5f8d9e9`
- Cloudflare Pages deployment: `d4245a1a-30c4-469e-b22d-15eb975e56d3`
- Initial rejected deployment: `68df4fae-493a-43fc-b845-820523b0c0f5`; live QA detected the omitted hashed stylesheet before handoff and the corrected release added the exact dependency.
- Live QA: PASS at 1440x900, 1920x1080 and 390x693 in light and dark browser preferences, with decoded same-origin assets, exact SHA-256 parity, correct MIME types, no browser errors and no horizontal overflow.
- Robots: HTML meta and response header enforce `noindex, nofollow, noarchive`.
- Regression readback: SiteRefresh root plus Concrete Control, Exceed Excavations, Eddie Marshall Excavations and Morrisons Maintenance Plumbing all returned HTTP 200.
- Rollback deployment: `6525f148-03f9-4934-8e49-3d951053e371`.
- No DNS, client production, billing or outreach-send action occurred.
