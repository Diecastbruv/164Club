# 1:64 Club — Digital Experience

A minimal, cinematic ecommerce website for the 1:64 Club hoodie.

---

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router v6
- DM Sans / Playfair Display / DM Mono (Google Fonts)

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom cursor with blend mode
│   ├── Nav.jsx             # Fixed navigation + mobile menu
│   ├── PageWrapper.jsx     # Page transition wrapper
│   └── RevealText.jsx      # Scroll-triggered text reveals
├── hooks/
│   └── useReveal.js        # Intersection observer hook
├── pages/
│   ├── Home.jsx            # Immersive scroll experience
│   ├── Shop.jsx            # Product page
│   ├── Story.jsx           # Editorial manifesto
│   └── Contact.jsx         # Minimal contact form
├── App.jsx                 # Router + AnimatePresence
├── main.jsx
└── index.css               # Global styles + cursor + grain
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero with parallax, philosophy, product tease, CTA |
| `/shop` | Product detail with image gallery, size selector |
| `/story` | Editorial manifesto in 4 chapters |
| `/contact` | Ultra-minimal contact form |

---

## Design Notes

- **Cursor**: Custom dot + ring with mix-blend-mode: difference
- **Grain**: SVG noise overlay at 35% opacity for tactile feel
- **Fonts**: Playfair Display (display), DM Sans (body), DM Mono (labels)
- **Palette**: #0a0a0a ink, #f4f1eb bone, #8c8c8c ash
- **Animations**: Framer Motion scroll-linked parallax + viewport reveals
- **Typography scale**: clamp() for fluid responsive sizes

---

## Brand Philosophy

> "Minimal by design. Loud in meaning."

1:64 Club is not a streetwear brand. It is a cultural object for collectors who understand scale, restraint, and intentionality.
