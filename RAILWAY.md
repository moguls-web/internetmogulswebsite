# Railway – fix pnpm / lockfile error

You must do **both** steps below. Only setting "Dockerfile path" is not enough.

---

## Step 1: Use the Dockerfile as the builder

1. Railway → your **project** → open the **service** that deploys this repo.
2. Go to **Settings** (gear icon) → **Build** section.
3. **Root Directory** must be **empty** (blank). If it’s set to a folder like `app` or `frontend`, Railway looks for the Dockerfile inside that folder and fails with "Dockerfile does not exist". Clear this field.
4. Find the **Builder** dropdown and set it to **"Dockerfile"** (or "DOCKERFILE").
5. **Dockerfile path:** `Dockerfile` (no leading slash)
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
