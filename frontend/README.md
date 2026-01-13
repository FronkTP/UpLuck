# UpLuck

A React + Vite single-page app for quick daily “fortune” content: daily horoscope, lucky shirt colours, a lucky item suggestion, and a sacred places map.

## Features

- **Daily Horoscope**: deterministic daily message based on today’s date.
- **Lucky Shirt Colour**: recommended colours by weekday (Thai locale).
- **Lucky Item**: deterministic daily item + description (shows a matching image).
- **Sacred Map**: embedded Google My Maps of sacred locations.

## Tech stack

- React 19 + Vite 6
- React Router DOM
- MUI + Emotion (installed)
- `react-slick` / `slick-carousel` for the carousel
- ESLint

## Getting started

From the `frontend/` folder:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview the build locally
- `npm run lint` — run ESLint

## Project structure

```
frontend/
	components/        # UI building blocks
	pages/             # Route pages (Home, About Us)
	public/images/     # Static images served at /images/...
	src/
		App.jsx          # Route definitions
		main.jsx         # React entry + BrowserRouter
		index.css        # Global styles
```

Key files:

- App routes: `src/App.jsx`
- Home composition: `pages/Home.jsx`

## Adding / fixing Lucky Item images

`components/LuckyItem.jsx` builds an image path from the item name:

1. Lowercases the Thai/English item name
2. Removes spaces
3. Appends `.jpg`

Images must exist in `public/images/` and be reachable as `/images/<name>.jpg`.

Example: item name `Power Bank` → `/images/powerbank.jpg`.

## Deployment

Build output goes to `dist/`:

```bash
npm run build
```
