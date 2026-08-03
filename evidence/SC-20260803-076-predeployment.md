# SC-20260803-076 pre-deployment report

- Client ID: `SC-20260803-076`.
- Source repository: `siterefresh-com-au/siterefresh-prospect-demos`.
- Approved source commit: `cd0be50` on `prospect/sc-20260803-076-redcliffe-lawn-garden`.
- Release repository: `siterefresh-com-au/site-refresh-website`.
- Production hostname and route: `https://siterefresh.com.au/work/redcliffe-lawn-garden-7b4e9c/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Staging result: deterministic Astro build and local browser QA passed at 390x693 mobile and 1280x900 desktop with no horizontal overflow or console errors.
- Checks: secret-pattern scan, high-severity dependency audit, Astro diagnostics, production build, internal-link check, asset-size check, phone-link validation, responsive visual inspection, robots noindex directives and image-load verification.
- Rollback: immediately previous known-good Pages deployment `d02f34a7-0330-41da-97e3-237d37d3bb8c` (source `49b4b3e`).
- Manual DNS, billing or account step: none.
- Known exception: the established `site-refresh` Cloudflare Pages project is a legacy deployment target pending controlled migration to the fleet Workers-for-Platforms standard.
