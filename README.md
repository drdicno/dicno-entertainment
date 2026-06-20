# Dicno Entertainment — Company Website

Professional landing page for Dicno Entertainment, an independent Android app developer specializing in personal finance, mortgage calculators, home buying tools, and productivity applications.

## File Structure

```
index.html          — Full page layout (edit content here)
style.css           — All styles (professional SaaS theme)
script.js           — Scroll reveal, counters, mobile nav
public/
  Dicno-3d-2.png    — Logo used throughout the site
```

## Editing Content

All editable areas are marked with `<!-- EDIT: ... -->` comments in `index.html`.

| What to update | Where |
|---|---|
| App cards (name, description, Play URL) | `<!-- EDIT APPS -->` block in the #apps section |
| App screenshot images | Replace `screenshot-placeholder` divs with `<img>` tags |
| Stats (downloads, users, countries) | `data-target` attributes on `.stat-num` elements |
| Contact email | `href="mailto:..."` and display text in Contact section |
| Social media links | `href="#"` placeholders in Contact and Footer |
| Google Play developer URL | All `href="https://play.google.com/..."` attributes |

### Adding a Real App Card

Replace the placeholder screenshot with an actual screenshot:

```html
<!-- Before -->
<div class="screenshot-placeholder" style="--ph-hue: 215;">
  <svg ...></svg>
</div>

<!-- After -->
<img src="screenshots/your-app.png" alt="App Name" />
```

Place screenshot images in a `screenshots/` folder (or `public/screenshots/` for Vite).

### Updating Stats

```html
<!-- Change data-target to your real number -->
<span class="stat-num" data-target="10">0</span>
<!-- With suffix -->
<span class="stat-num" data-target="50" data-suffix="K+">0</span>
<!-- With decimal -->
<span class="stat-num" data-target="4.8" data-decimals="1" data-suffix="★">0</span>
```

---

## Deploying to GitHub Pages

### Option A — Serve from repository root (simplest)

> **Note:** The logo is in `public/Dicno-3d-2.png`. For GitHub Pages root serving,
> place the file at `Dicno-3d-2.png` in the repo root (not inside `public/`),
> or update all `src="Dicno-3d-2.png"` references to `src="public/Dicno-3d-2.png"`.

1. Create a GitHub repository.
   - For a user/org site: name it `<username>.github.io`
   - For a project site: any repo name works

2. Push these files to the `main` branch:
   ```
   index.html
   style.css
   script.js
   Dicno-3d-2.png   ← move from public/ to repo root
   ```

3. In the repository, go to **Settings → Pages**.

4. Under **Source**, select **Deploy from a branch → main → / (root)**.

5. Click **Save**. Your site is live at:
   - `https://<username>.github.io` (user site)
   - `https://<username>.github.io/<repo-name>` (project site)

---

### Option B — GitHub Actions (recommended for CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

In **Settings → Pages**, set Source to **GitHub Actions**.

---

## Local Development (requires Node.js)

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

## Performance Notes

- No external JavaScript dependencies — pure vanilla JS
- Google Fonts loaded with `preconnect` for minimal render blocking
- All animations respect `prefers-reduced-motion`
- Images should be WebP format with appropriate dimensions for best Lighthouse scores
- Aim for image files under 150KB each for optimal loading
