# BAJAFISH — Claude Project Instructions

Panga fishing intelligence app for Baja California. Covers both the Pacific coast and Sea of Cortez. Anglers use it to check live fishing reports, browse captains, view conditions, explore the zone map, and browse the full species gallery.

---

## Content Rules (enforced)

- Never use emojis anywhere in the product. Use inline SVG icons instead.
- Never use em dashes or en dashes in copy or data. Use commas, periods, or parentheses, and the word "to" for ranges (write "Dec to Jun", never a long dash). A plain hyphen is allowed only inside code identifiers, CSS, and URLs.
- Enforced by a PreToolUse hook at `.claude/hooks/no-emoji-em-dash.js` (wired in `.claude/settings.json`) that blocks any Write or Edit whose content contains an emoji or an em or en dash.

---

## Running the App

```bash
node serve.js        # starts http://localhost:8081
```

No build step. No bundler. No framework. Pure static HTML/CSS/JS served by a 30-line Node HTTP server.

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | SPA shell — all sections live here as `<main id="section-*">` blocks |
| `style.css` | ~3400 lines — full design system, CSS custom properties, all components |
| `app.js` | ~1650 lines — vanilla JS IIFE; nav router, data rendering, map, filters |
| `data.js` | Static fishing report + captain data arrays |
| `weather.js` | Conditions/weather section logic |
| `species-gallery.html` | Standalone 29-species photo gallery (self-contained, no external CSS) |
| `serve.js` | Minimal Node.js static file server |

---

## Architecture

### SPA Navigation (app.js)
- Nav is class-based, no hash routing
- `[data-section="X"]` buttons toggle `.active` on `#section-X` elements
- Sections: `reports` · `captains` · `conditions` · `species` · `map` · `crew` · `submit`

### Design System (style.css)
```css
--accent:   #FFC72C   /* gold — primary action color */
--navy-0:   #010810   /* darkest background */
--navy-1:   #04111e
--navy-2:   #071b2e
--t1:       #F0F6FF   /* primary text */
--t2:       #7A92A8   /* secondary text */
--t3:       #3F5568   /* muted text */
--glass-border: rgba(255,255,255,0.065)
```
Fonts: **Inter** (body) + **Space Grotesk** (display headings)

### Map
- Leaflet.js on `#baja-map`
- 44 panga village markers across both coasts
- Map section is full-viewport: `min-height: 100svh`, `#baja-map { flex: 1 }`

### Species Gallery (species-gallery.html)
- Standalone page linked from the Species section
- 29 species across 4 categories: Rockfish · Pelagic · Billfish · Inshore
- All photos from iNaturalist Open Data S3 (CC-licensed, hotlink-safe)
- Cartoon SVG filter: `feColorMatrix` saturate 3.2× + `feComponentTransfer` discrete posterize
- Filter function: `filterCards(type, btn)` — filters by `data-type` and `data-coast` attributes
- Bag limits per CONAPESCA 10-point system (1pt=5/day, 2.5pt=2/day, 5pt=1/day)

---

## Design Rules — Always Follow

- **Dark navy theme only** — `--navy-0` to `--navy-2` backgrounds
- **Gold (`#FFC72C`) for actions** — buttons, CTAs, highlights
- **Glass cards** — `background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border)`
- **No framework** — vanilla JS only, no React/Vue/etc.
- **No build step** — edits go live immediately on save
- **Prototype in preview first** — use the `/Users/cl/Documents/assets/pangafish-preview/` sandbox before touching this live directory

---

## Content Context

- **44 panga villages** along Baja California — Pacific and Sea of Cortez sides
- **Report system** shows catches by zone, species, captain, and date
- **Captain profiles** have bios, specialties, zone coverage, and booking info
- **Bag limits** are Mexican (CONAPESCA) — the 10-point system, max 10 pts/angler/day
- **Target audience**: US/international anglers planning Baja fishing trips via local panga fleets

---

## Collaboration Notes

- This is a shared project — check git log before large edits
- Commit frequently with descriptive messages
- Never commit `.env` or any API keys
- The preview directory (`../pangafish-preview/`) is a design sandbox — don't commit from there
