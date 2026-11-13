# Salman Design & Consultant — Portfolio Website

> **We Build Your Dreams** — A mobile-first single-page portfolio for a civil engineering consultancy.

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18.x |
| Vite | 5.x |
| Lenis | smooth scroll |
| Framer Motion | hero animations |
| react-icons | service & UI icons |
| gh-pages | deployment |

---

## Project Structure

```
salman_design/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js          ← ALL client content lives here
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Stats.jsx / .css
        ├── Services.jsx / .css
        ├── Projects.jsx / .css
        ├── Process.jsx / .css
        ├── Testimonials.jsx / .css
        ├── Contact.jsx / .css
        ├── Footer.jsx / .css
        └── FloatingButtons.jsx / .css
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

---

## GitHub Pages Deployment

Live URL: **https://Harsh20-gif.github.io/SalmanDesign/**

### Deployment Steps

```bash
git remote add origin https://github.com/Harsh20-gif/SalmanDesign.git
git branch -M main
git push -u origin main
npm run deploy
```

### Step 3 — Deploy

```bash
npm run deploy
```

This runs `npm run build` first (predeploy), then pushes the `dist/` folder to the `gh-pages` branch.

### Step 4 — Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Set **Source** to **Deploy from branch**, branch = `gh-pages`, folder = `/ (root)`
4. Save — your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

---

## Deployment Checklist

- [ ] Update `base` in `vite.config.js` to match repo name
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm run deploy`
- [ ] Enable GitHub Pages on `gh-pages` branch
- [ ] Verify live URL loads correctly

---

## ⚠️ Placeholders the Client Must Replace

| Placeholder | File | What to change |
|-------------|------|---------------|
| `EMAIL` | `src/data/content.js` | Replace `info@salmandesign.com` with real email |
| Project images | `src/data/content.js` | Replace Unsplash URLs with real project photos |
| Testimonials | `src/data/content.js` | Replace placeholder reviews with real client feedback |
| Google Maps URL | `src/data/content.js` | Replace with real Google Maps link to office |
| OG image | `index.html` | Add real `og-image.png` to `public/` folder |
| Favicon | `index.html` | Add real `favicon.ico` to `public/` folder |
| GitHub username | `package.json` + `index.html` | Update all references |

---

## Editing Content

**All text, services, projects, and contact info** are in one file:

```
src/data/content.js
```

Edit that file only — no React knowledge needed for content updates.

---

## Performance Notes

- Images are lazy-loaded (`loading="lazy"`)
- Fonts use `font-display: swap`
- Lenis smooth scroll is disabled for `prefers-reduced-motion` users
- CSS 3D transforms use `will-change: transform` where needed
- No heavy UI frameworks (Bootstrap, MUI, Tailwind)

