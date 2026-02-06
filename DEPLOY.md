# Deployment

This project uses **npm** and **package-lock.json**. Railway is configured to build with the **Dockerfile** (see `railway.json`).

## Railway

- **Builder:** Dockerfile (set in `railway.json`).
- **Start command:** `node server.js` (Railway sets `PORT` automatically).

If the build fails on Railway:

1. In Railway dashboard go to **Deployments** → open the failed deployment → copy the **full build log**.
2. Check that the build is using the Dockerfile (log should show Docker build steps like `RUN npm ci` and `RUN npx next build`). If you see `pnpm install` instead, Railway is not using the Dockerfile — in **Settings** → **Build** set **Builder** to **Dockerfile**.
3. Share the exact error message from the build log to debug further.
