# SC-20260803-073 pre-deployment report

- Client/prospect ID: `SC-20260803-073` - Bayside Fencing & Gates.
- Source repository: `siterefresh-prospect-demos`, branch `prospect/sc-20260803-073-bayside-fencing`, commit `698340e82d4f4abb5d24ee80c3c1cd13927f2530`.
- Staging result: local Astro build and anonymous-style desktop, tablet and mobile browser QA passed.
- Production hostname: `https://siterefresh.com.au/work/bayside-fencing-gates-openline-73c9a4/`.
- Cloudflare target: existing legacy `site-refresh` Pages production project, production branch `main`.
- Checks: secret scan, dependency audit, Astro diagnostics, static build, broken links, asset sizes, robots metadata, canonical and social metadata, four-photo coverage, overlay and transition counts, responsive DOM, fixed light palette, reduced motion, no overflow and console cleanliness.
- Rollback: preserve production deployments `d02f34a7-0330-41da-97e3-237d37d3bb8c` and `1ed05feb-8221-4859-a645-9a94092d0adc`; the cumulative release also retains all concurrent preview routes.
- Manual steps: none. Ryan authorised this named public, unlisted prospect preview in the outreach instruction.
- Known exception: the preview fleet still uses legacy Cloudflare Pages rather than Workers for Platforms. This additive release changes no DNS, billing, homepage or existing prospect route.
