# Akshathaa Gopalakrishna, Portfolio

A clean, one-page React + Vite portfolio site.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies
npm run dev      # start the dev server  → http://localhost:5173
npm run build    # production build       → /dist
npm run preview  # preview the build locally
```

## Add your files

Everything in `/public` is served from the site root.

- **Résumé**, put your PDF in `/public` named `AkshathaaResume.pdf`. The
  "Download résumé" buttons already point to `/AkshathaaResume.pdf`. To use a
  different filename, edit `RESUME_PATH` at the top of `src/App.jsx`.
- **Project screenshots**, add images to `/public/projects/`, then in
  `src/App.jsx` replace the `<Shot/>` placeholders with
  `<img src="/projects/your-image.png" alt="..." />`.

## Edit content & style

- **Copy** lives in `src/App.jsx`, grouped by section (Hero, About, Projects,
  Experience, Skills, Contact). Skills and nav links are simple arrays near the
  bottom of the file, add or remove items there.
- **Colors, fonts, spacing** live in `src/index.css` under the `:root` tokens at
  the very top. Change `--accent` to recolor the whole site.

---

## Deploy

### Option A, Netlify (easiest)
1. Push this folder to a GitHub repo.
2. On [netlify.com](https://netlify.com): **Add new site → Import an existing project** → pick the repo.
3. Build command: `npm run build` · Publish directory: `dist`.
4. Deploy. (No config change needed, keep `base: '/'` in `vite.config.js`.)

### Option B, Vercel
1. Push to GitHub.
2. On [vercel.com](https://vercel.com): **Add New → Project** → import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`). Deploy.
4. Keep `base: '/'` in `vite.config.js`.

### Option C, GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'` (with the slashes).
2. Push to GitHub. Repo **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
   every push to `main`. Site URL: `https://<username>.github.io/<your-repo-name>/`.

> Tip: if you later add a custom domain, switch `base` back to `'/'`.

---

## Project structure

```
vite-portfolio/
├─ index.html              # page shell + font links + <title>/meta
├─ vite.config.js          # build config (set base here for GitHub Pages)
├─ package.json
├─ .github/workflows/      # GitHub Pages auto-deploy
├─ public/                 # résumé PDF + screenshots go here
└─ src/
   ├─ main.jsx             # React entry point
   ├─ App.jsx              # all sections + content (edit copy here)
   └─ index.css            # theme tokens + styles (edit look here)
```
