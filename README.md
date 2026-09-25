# Labib Nafi — Portfolio (v2)

A three-page static portfolio for GitHub Pages. The homepage introduces Labib and links to The Compound (applications) and The Watchtower (AI assistants). Project details live in `js/projects.js`. All project entries share one layout, color themes remain individual, and the perspective carousel is preserved.

## Deploy / update

1. Extract the ZIP. Upload **the contents** of this folder to the root of your `lnafi26.github.io` repository (not the ZIP or an enclosing folder). Replace the corresponding existing files and delete obsolete generated illustration assets (`assets/headquarters.svg`, `assets/syncora.svg`, `assets/sentry.svg`, `assets/dex.svg`, `assets/robert.svg`) if desired.
2. Commit the changes. GitHub Pages will redeploy from the existing `main` / root configuration.
3. Refresh the page; use a hard refresh if your browser shows an old cached stylesheet.

## Edit projects

Update `js/projects.js`. Use `name: 'Project Sentry'` for the home-network app and uppercase names for agents such as DEX and ROBERT. Dates use `MM/YY` or `null` when unconfirmed/not launched. Public URLs only: private repo links should not be published.

Project media is currently purposefully typographic, not a fake project screenshot. To use a real logo/screenshot later, set `mediaType: 'image'`, `art: 'assets/your-real-image.png'`, and an appropriate `artAlt` on that project. Upload the file into `assets/`.

No login, backend, build tooling, tracking, or external hosting service is required.
