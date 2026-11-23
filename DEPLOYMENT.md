# Frontend deployment (Vercel)

The frontend is a Vite single-page app. Its `vercel.json` already rewrites app
routes to `index.html`.

1. Import the `folatube` repository into Vercel and use the repository root as
   the project root.
2. Set the production environment variable `VITE_API_URL` to the public Render
   backend URL, without a trailing slash (for example,
   `https://your-backend.onrender.com`).
3. If using Vercel Preview deployments, set `VITE_API_URL` for the Preview
   environment as well.
4. Deploy. Vercel uses `npm run build` and the `dist` output directory.

Production builds fail if `VITE_API_URL` is missing.
`VITE_API_URL` is bundled into public browser code; never put credentials or
other secrets in a `VITE_*` variable. For local development, copy
`.env.example` to `.env`.

Before deploying, verify the frontend locally with:

```powershell
npm ci
npm run build
```
