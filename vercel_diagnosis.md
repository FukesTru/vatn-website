# Vercel Preview Diagnosis

The GitHub-linked Vercel deployment was executing the project’s bundled long-running Express server (`dist/index.js`). That server starts its own HTTP listener and serves static files through `express.static`, while this public website is built by Vite into `dist/public`. Vercel’s Express documentation notes that static files are not served through `express.static` in its function environment, and Vercel’s Vite documentation requires an SPA rewrite for deep links.[1][2]

The targeted fix is a Vercel-only configuration. Vercel now runs the Vite client build directly, publishes `dist/public`, routes client-side page URLs to `index.html`, and proxies existing `/manus-storage/` and `/api/` paths to the live Manus deployment. The Manus deployment entry point and all website content, design, forms, images, and routes remain unchanged.

## References

[1]: https://vercel.com/docs/frameworks/backend/express "Express on Vercel"
[2]: https://vercel.com/docs/frameworks/frontend/vite "Vite on Vercel"

