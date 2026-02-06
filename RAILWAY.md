# Railway deployment – fix “pnpm” / lockfile error

This project uses **npm** only (no pnpm). If Railway runs `pnpm install`, the build will fail.

## Fix in Railway Dashboard

Do **one** of the following.

### Option A – Use Dockerfile (recommended)

1. Open your project on [Railway](https://railway.app).
2. Select the **service** that deploys this repo.
3. Go to **Settings** → **Build**.
4. Set **Builder** to **DOCKERFILE** (not Nixpacks / Railpack).
5. Set **Dockerfile path** to `Dockerfile` (or leave default).
6. **Redeploy** (Deployments → ⋮ → Redeploy, or push a new commit).

The Dockerfile runs `npm ci` and `npm run build`; it never uses pnpm.

### Option B – Force install command (if you keep Nixpacks/Railpack)

1. In the same service, go to **Variables**.
2. Add a variable:
   - **Name:** `RAILPACK_INSTALL_CMD`
   - **Value:** `npm ci`
3. **Redeploy**.

That makes the install step use `npm ci` instead of pnpm.

---

After this, new deployments should no longer run `pnpm install --frozen-lockfile` and the lockfile error should stop.
