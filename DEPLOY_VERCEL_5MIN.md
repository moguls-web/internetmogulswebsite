# Deploy in ~5 minutes (Vercel – no Docker)

If Railway keeps failing, you can get your app live on **Vercel** very quickly. Vercel is made for Next.js and usually works with one click.

---

## Steps

1. Go to **https://vercel.com** and sign in (e.g. with GitHub).
2. Click **Add New** → **Project**.
3. **Import** your GitHub repo (internetmogulswebsite or this repo).
4. Leave settings as default (Vercel will detect Next.js).
5. Click **Deploy**.
6. Wait 2–3 minutes. You’ll get a URL like `your-app.vercel.app`.

No Docker, no pnpm issues. Your app is live.

---

## After deploy

- Your site will be at the URL Vercel gives you.
- Every push to `main` can auto-deploy (optional).
- You can add a custom domain later in Vercel project settings.

You can always try Railway again later; this is so you’re not blocked.
