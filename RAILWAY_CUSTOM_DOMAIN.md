# Point your custom domain to Railway

## Step 1: Add the domain in Railway

1. Open **Railway** → your **project** → your **service**.
2. Go to **Settings**.
3. Find **Public Networking** or **Networking** / **Domains**.
4. Click **+ Custom Domain** (or **Add domain**).
5. Enter your domain, e.g. **`yourdomain.com`** or **`www.yourdomain.com`**.
6. Railway will show a **CNAME target**, e.g. **`something.up.railway.app`**. Copy it.

---

## Step 2: Add DNS at your domain provider

Log in where you bought your domain (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.) and open **DNS** or **DNS settings**.

### For **www** (e.g. www.yourdomain.com)

| Type  | Name | Value / Target                    | TTL  |
|-------|------|-----------------------------------|------|
| CNAME | www  | (paste Railway’s CNAME target)    | 3600 |

- **Name:** `www` (or `www.yourdomain.com` depending on the provider).
- **Value/Target:** the CNAME Railway gave you (e.g. `xxxx.up.railway.app`).
- Save.

### For **root** (e.g. yourdomain.com with no www)

Railway needs a CNAME at the root. Not all providers allow this.

- **Cloudflare:** Add a CNAME with **Name** `@` and **Target** = Railway’s CNAME. Turn **Proxy** off (grey cloud) while testing if needed.
- **Other providers:** If they don’t support root CNAME, use a redirect:  
  **yourdomain.com** → **https://www.yourdomain.com** (and point **www** to Railway as above).

---

## Step 3: Wait and check

1. DNS can take from a few minutes up to **48–72 hours**.
2. In Railway, the domain will show a **checkmark** when it’s verified.
3. Railway will issue **SSL (HTTPS)** automatically after verification.

---

## Summary

| Where        | What to do |
|-------------|------------|
| **Railway** | Settings → Networking → **+ Custom Domain** → enter domain → copy CNAME target. |
| **DNS**     | Add **CNAME** record: name = `www` (or `@` for root), value = Railway’s CNAME. |
| **Wait**    | Up to 72 hours; often 5–30 minutes. |

Use **www.yourdomain.com** first if your provider doesn’t support root CNAME.
