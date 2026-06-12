# Personal Portfolio

A personal academic + creative design portfolio website, built with **React + Vite**.

## ✨ Features

- Single-page site with About, Research/Publications, Design Portfolio, and Contact sections
- Light & dark mode (remembers your choice, respects system preference)
- Fully responsive with a mobile menu
- Smooth scrolling and subtle animations
- **All content lives in one file** — no need to touch the components

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # build for production into /dist
npm run preview  # preview the production build locally
```

## ✏️ Editing your content

Open **`src/data/content.js`** and replace the placeholder values:

| What | Where |
| --- | --- |
| Name, tagline, intro, email, affiliation | `profile` |
| Social links (GitHub, LinkedIn, Scholar…) | `socials` |
| About paragraphs & skill tags | `about` |
| Publications / research projects | `research` |
| Design portfolio projects | `portfolio` |
| Contact blurb | `contact` |

### Images

- **Headshot:** drop a file at `public/avatar.jpg` and set `profile.avatar = '/avatar.jpg'`.
  Leave it `null` to show your initials in a gradient circle.
- **Portfolio thumbnails:** put images in `public/portfolio/` and set each project's
  `image` field (e.g. `'/portfolio/project1.jpg'`). Leave `null` for a colored placeholder.
- **CV:** put a PDF in `public/` and set `profile.cvUrl = '/cv.pdf'` to show a download button.

## 🌐 Deploying

### GitHub Pages (already set up)
A workflow at `.github/workflows/deploy.yml` builds and deploys the site
automatically on every push to `main`. One-time setup:

1. In the repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
2. Merge to `main` (or run the workflow manually) — the site will appear at
   `https://saharoyani.github.io/io/`.

`vite.config.js` already has `base: '/io/'` to match. If you switch to a
custom domain or a `username.github.io` user page, change `base` to `'/'`.

### Netlify / Vercel
- Build command: `npm run build`
- Publish directory: `dist`

## 🎨 Customizing the look

Colors, fonts, and spacing are defined as CSS variables at the top of
`src/styles/index.css` (the `--accent`, `--accent-2`, etc. tokens). Change
those to re-theme the whole site instantly.
