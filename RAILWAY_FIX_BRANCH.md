# Fix: "Dockerfile does not exist" on Railway

## Cause

Your GitHub repo **default branch is `temp-clean`**. Railway builds from the default branch.  
The **Dockerfile exists only on `main`**, not on `temp-clean`. So Railway never sees it.

---

## Fix: Build from `main` in Railway

1. Open **Railway** → your **service**.
2. Go to **Settings**.
3. Find **Source** or **Branch** (under the connected repo).
4. Set the branch to **`main`** (not temp-clean).
5. Save.
6. Go to **Deployments** → **Redeploy**.

Railway will then clone **main**, where the Dockerfile is, and the build should succeed.

---

## Optional: Make `main` the default on GitHub

So new clones and Railway use `main` by default:

1. Open **https://github.com/moguls-web/internetmogulswebsite**.
2. Go to **Settings** → **General**.
3. Under "Default branch", switch from **temp-clean** to **main**.
4. Save.

After that, Railway will use `main` if you don’t set a branch.
