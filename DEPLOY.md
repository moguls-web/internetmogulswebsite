# Deployment / Build

## If install fails with `specifiers in the lockfile ({})`

Your platform is using an old pnpm that can't read this lockfile.

**Fix:** Use `npm run install:frozen` for the install step (uses pnpm 9).

- **Vercel:** Configured in `vercel.json`.
- **Railway:** Configured in `railpack.json`. If it still fails, add a variable in Railway dashboard: **Variables** → **New Variable** → `RAILPACK_INSTALL_CMD` = `npm run install:frozen`.
- **Netlify / Render / etc.:** In project settings, set **Install command** to `npm run install:frozen`.
