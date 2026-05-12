# Chaitash Patel — Computer Engineer · Portfolio

A heavy-animated, terminal-aesthetic single-page portfolio built with React, Tailwind CSS and Framer Motion.

## ✨ Features

- Hero with glitch typography, animated terminal card, marquee tech ticker, animated 3D shape
- Skills section with category tabs and animated proficiency bars
- Projects showcase with hover-driven detail panel
- Contact section with mailto form, direct contacts and social links
- Magnetic custom cursor + canvas particle network background
- Designed with a unique Magenta + Indigo + Black palette and Electric Green (#39FF14) accents
- Fully responsive (mobile menu included)

## 🛠 Tech

React 19 · Tailwind CSS 3 · Framer Motion · react-fast-marquee · Lucide Icons

## 🚀 Run locally

```bash
yarn install
yarn start          # http://localhost:3000
yarn build          # production build → ./build
```

> Requires Node 18+ and yarn. (npm also works if you delete `yarn.lock` and run `npm install`.)

## 🎨 Customize

All copy, projects, skills and links live in **`src/data/content.js`** — edit there and the UI updates instantly.

- Colors live in CSS variables inside `src/index.css` (`--neon`, `--magenta`, `--indigo`, `--bg`).
- Fonts: Unbounded (display) + JetBrains Mono (body), loaded in `public/index.html`.

## 📦 Project structure

```
src/
├── App.js
├── index.js
├── index.css
├── App.css
├── data/
│   └── content.js
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    ├── ParticleField.jsx
    └── Cursor.jsx
```

## 📄 License

Free to use and modify. Replace name, content and assets with your own.

— Made with care.
