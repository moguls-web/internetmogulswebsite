# Deploy to Railway – final checklist

Do these **in order**. After each step, save.

---

## Step 1: Create a new service (fresh start)

1. In Railway, open your **project**.
2. Click **+ New** → **GitHub Repo**.
3. Select this repo: **internetmogulswebsite** (or your repo name).
4. When asked for **Root Directory**, leave it **empty** → Continue.
5. Railway will create a new service.

---

## Step 2: Set build so Railway finds the Dockerfile

1. Open the **new service**.
2. Go to **Settings** → **Build**.
3. Set:
   - **Root Directory:** Delete any value so it is **empty**. If you can’t clear it, try **`.`** (one dot). The Dockerfile is in the repo root; if Root Directory is a subfolder, Railway looks there and fails with "Dockerfile does not exist".
   - **Builder:** **Dockerfile**.
   - **Dockerfile path:** `Dockerfile` (or try `./Dockerfile`).
4. Save.
5. In **Settings**, check **Source** (or similar): ensure the branch is **main** (the branch that has the Dockerfile).

---

## Step 3: Deploy

1. Go to **Deployments**.
2. Click **Deploy** / **Redeploy** (or push a commit to trigger deploy).
3. Wait for the build. You should see Docker steps: `npm ci`, then `npx next build`.

---

## Step 4: Get the URL

1. Go to **Settings** → **Networking** (or **Deployments** → your deployment).
2. Click **Generate Domain** (or use the one Railway gives you).
3. Open the URL to see your app.

---

If it still fails, copy the **full build log** from the failed deployment and share it so we can fix the exact error.
