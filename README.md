# openquanter.com

The website for [OpenQuanter](https://github.com/openquanter/openquanter)
and [Quanterdeck](https://github.com/openquanter/quanterdeck). English at
`/`, Chinese at `/zh/`.

A static [Astro](https://astro.build) site. Copy lives in `src/i18n/en.ts`
and `src/i18n/zh.ts`; the Chinese file is typed against the English one,
so a missing key fails the build. The latest release of each project is
read from GitHub when the site is built.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # dist/
npx astro check
```

Served by Cloudflare at openquanter.com and www.openquanter.com as static
assets (Worker `openquanter-com`, no Worker code; see `wrangler.jsonc`):

```bash
npm run deploy     # astro build && wrangler deploy
```

Every number on the page has a source in one of the two repositories:
change it there first.

## License

Apache-2.0, the same as [OpenQuanter](https://github.com/openquanter/openquanter)
and [Quanterdeck](https://github.com/openquanter/quanterdeck). See [LICENSE](LICENSE).
