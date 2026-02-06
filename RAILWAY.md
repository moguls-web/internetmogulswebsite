# Railway – fix pnpm / lockfile error

This repo uses **npm only**. Railway must use the **Dockerfile** so it runs `npm ci`, not pnpm.

## In Railway dashboard (required)

1. Open [Railway](https://railway.app) → your project → **this service**.
2. Go to **Settings** → **Build**.
3. Set **Root Directory** to **empty** or **`.`** (repo root).  
   If this is wrong, Railway won’t see the Dockerfile.
4. Set **Builder** to **DOCKERFILE** (not Railpack / Nixpacks).
5. **Save**.
6. Go to **Deployments** → **Redeploy** (or push a new commit).

After this, the build should use the Dockerfile and the pnpm error should stop.  
If it still uses pnpm, the builder or root directory in the dashboard is overriding the repo config.
