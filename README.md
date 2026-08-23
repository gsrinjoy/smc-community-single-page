# SMC India — Smart Money Concepts landing page

Single-page React landing page. Visual language of the GETNOS audit page
(cream canvas, condensed black display type, lime CTA with a hard shadow,
dashed fun-fact box), with Smart Money Concepts content.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle -> dist/
npm run preview  # serve the built bundle
```

## Structure

```
index.html                 fonts + root mount
src/
  main.jsx                 React entry
  App.jsx                  page composition
  data/content.js          all copy lives here — edit this, not the components
  hooks/useTheme.js        light/dark toggle, persisted to localStorage
  styles/global.css        design tokens (color, type, spacing) + resets
  components/
    Header.jsx             logo mark, wordmark, tagline
    Hero.jsx               emoji, headline, subhead, CTA, proof, strip, fun fact
    CtaButton.jsx          lime button with offset shadow (sizes: lg | sm)
    StarRating.jsx         ★★★★★ + social proof line
    MicroStrip.jsx         uppercase monospace strip
    FunFact.jsx            dashed callout box
    InsideSection.jsx      "Inside" bullet list + second CTA
    Disclaimer.jsx         SEBI / risk footer
    ThemeToggle.jsx        floating light/dark switch
    MetaPixel.jsx          loads the Meta Pixel, fires PageView
  lib/metaPixel.js         pixel init + trackEvent/trackCustom helpers
```

Each component ships its own CSS file next to it. Colors, fonts and spacing
come from CSS custom properties in `src/styles/global.css` — change the
`--lime`, `--bg` and `--ink` tokens to rebrand the whole page.

## Wiring up the CTAs

Both buttons point at `#join`. Swap `cta.href` in `src/data/content.js`
for the real Telegram / Instagram invite links.

## Meta Pixel

Live. The pixel ID `1383279596465717` is set in `.env`, which is committed —
a pixel ID is a public identifier (it ships in the client bundle regardless),
so keeping it in the repo means any clone or CI build is configured already.

To point a build at a different pixel, put an override in `.env.local`
(gitignored) and rebuild.

If the ID is ever removed, everything degrades safely: nothing loads, no request
reaches Meta, and the helpers in `src/lib/metaPixel.js` all no-op.

What it tracks once enabled:

| Event      | When |
| ---------- | ---- |
| `PageView` | on load |
| `Lead`     | either "Join the community" button is clicked, with `content_category` set to `hero` or `inside` so you can tell them apart |

The `<noscript>` fallback beacon is injected into `index.html` at build time by
a small plugin in `vite.config.js` — a React-rendered `<noscript>` would be
inert, since a visitor with JS disabled never runs React.

To add more events, call `trackEvent('Contact')` or `trackCustom('WatchedDemo')`
from any component.

### Verifying

Install the Meta Pixel Helper extension, or watch the network tab for requests
to `connect.facebook.net` and `facebook.com/tr`. `VITE_META_PIXEL_ID` is read at
**build** time, so a rebuild is required after changing it.
