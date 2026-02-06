# Railway – fix pnpm / lockfile error

You must do **both** steps below. Only setting "Dockerfile path" is not enough.

---

## Step 1: Use the Dockerfile as the builder

1. Railway → your **project** → open the **service** that deploys this repo.
2. Go to **Settings** (gear icon) → **Build** section.
3. Find the **Builder** dropdown (it may say "Railpack" or "Nixpacks").
4. Change it to **"Dockerfile"** (or "DOCKERFILE").  
   This is what actually switches the build to Docker. The "Dockerfile path" field only matters after this.
5. In **Dockerfile path**, keep: `Dockerfile`
6. **Root Directory** should be **empty** or `.`
7. Click **Save** / **Update**.

---

## Step 2: If you still see the pnpm error (fallback)

Railway is still using Railpack. Force it to use npm:

1. In the same service, go to **Variables**.
2. Click **New Variable** / **Add Variable**.
3. **Name:** `RAILPACK_INSTALL_CMD`  
   **Value:** `npm ci`
4. Save and **Redeploy**.

That makes the install step run `npm ci` instead of pnpm even when Railpack is used.

---

## Step 3: Redeploy

- **Deployments** tab → **Redeploy** (or push a new commit).

After Step 1 (and Step 2 if needed), the pnpm error should stop.
