import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ── DEPLOYMENT NOTE ───────────────────────────────────────────────
  // Netlify & Vercel: leave `base` as '/' (the default below).
  //
  // GitHub Pages ONLY (project site at username.github.io/<repo>):
  // uncomment the next line and set it to your repo name with slashes.
  //   base: '/your-repo-name/',
  // (If you use a custom domain or a username.github.io repo, keep '/'.)
  base: '/',
})
