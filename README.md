# Labib Nafi — Personal Portfolio

A three-page, static GitHub Pages portfolio with two project wings:

- **`index.html`** — headquarters, professional introduction, social links and the two entrances.
- **`compound.html`** — software and systems (Syncora, SENTRY).
- **`watchtower.html`** — AI assistants and agents (DEX, ROBERT).

The project uses original SVG concept illustrations, plain HTML/CSS/JavaScript, and no packages, account system, database, backend, analytics or external asset CDNs. The landing page can be served from the repository root or from `username.github.io` without any URL rewriting.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. You can also open `index.html` directly, but the local server better matches production.

## Publish on GitHub Pages

**For a root URL:** create a public repository named exactly `lnafi26.github.io` under the `lnafi26` GitHub account. Upload the **contents** of this folder to the repository root (the `index.html` file must be at the top level). Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**. Your site will be at `https://lnafi26.github.io/` after deployment.

**For a different repository name:** create any public repo, upload these files to its root and enable GitHub Pages with the same branch settings. The site will live at `https://lnafi26.github.io/REPOSITORY-NAME/`. All local links are relative, so either mode works.

To upload through terminal once the repository exists:

```bash
cd /path/to/labib-portfolio
git init
git add .
git commit -m "Launch personal portfolio"
git branch -M main
git remote add origin https://github.com/lnafi26/lnafi26.github.io.git
git push -u origin main
```

Replace the `origin` URL if you choose a different repository name. Do not run `git init` inside an existing checkout; copy the files into that repository instead.

## Maintain projects (one consistent card model)

Open **`js/projects.js`**. Each project has an ID, display name, category, status, tagline, description (`what`), explanation (`how`), stack, concept/R&D/launch dates, illustration path and alt text, theme colors, and public destination links. This is the **single source of content** for the standardized cards in both wings.

- Dates are strings in `MM/YY`. Set an **unverified or not-yet-reached date to `null`**, which displays as an em dash. The concept dates for Syncora, SENTRY and ROBERT are based on the current working project timeline; check against your own milestones before publishing. DEX's conceptualization date is left unknown.
- `links` is empty for an unreleased or private project. Never place a private repo URL in this file: this site is public. Add a real link only when its intended destination is publicly accessible.
- The SVGs under `assets/` are expressly **concept art**, not screenshots or claims that a UI has shipped. Replace them with real screenshots or rendered visualizers when available; keep the `artAlt` field meaningful.
- To add a new project, append another object to the appropriate `compound` or `watchtower` array. The slide count, progress bar and project selector update automatically.
- For deep linking to a specific project without adding a page, use `compound.html?project=syncora` or `watchtower.html?project=dex`.

## How the carousel works

The deck has a 3D perspective stage. Selecting the next project rapidly pulls the camera back, angles it, slides the dossiers across, and pushes in on the selected one. Arrows, project selectors, and left/right keyboard arrows (when the stage has focus) all navigate. Reduced-motion preferences disable the 3D sequence, and inactive slides are removed from keyboard navigation. Animations are intentionally short; nothing auto-advances.

## Design notes / references

The two-wing concept, content and visuals are original to this project. The design draws on the *interaction-as-navigation* principle from Bruno Simon's portfolio (`https://bruno-simon.com/`), the *legible project evidence* principle from Brittany Chiang's portfolio (`https://brittanychiang.com/`), and the use of structured technical case studies seen on Dinesh Gaikwad's portfolio (`https://dineshgaikwad.vercel.app/projects/portfolio`). No third-party template, art or code was copied.

## Final pre-publication checklist

- Verify descriptions and milestones; change any tentative concept or R&D dates to `null` if necessary.
- Replace concept art with screenshots/visualizers when ready.
- Add publicly accessible demos or repository links as those projects launch.
- Proofread your introduction and all technologies for anything you do not want published.
- Optionally add a real project image to the homepage hero, keeping the existing vector as a fallback.
