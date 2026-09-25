# Labib Nafi — Portfolio (v3)

A warm, simple three-page GitHub Pages site. The home page introduces Labib; The Compound and The Watchtower are equal halves of one work collection, with a consistent carousel and project cards.

## Deploy the update

Extract the ZIP and upload **its contents** to the root of `lnafi26.github.io` on `main`, replacing the existing matching paths. GitHub Pages will redeploy using your existing settings. Do not upload the ZIP itself or a parent folder. Hard-refresh if the browser shows the old CSS.

The old v1/v2 artwork is not used. It can be removed from `assets/` in your repository when convenient.

## Project content

Edit `js/projects.js` to update text, dates (`MM/YY` or `null` if unconfirmed), colors and public URLs. Add real project images later via `mediaType: 'image'`, `art: 'assets/your-image.png'` and `artAlt`. Keep private repository URLs out of public source. Project Sentry is title case; DEX and ROBERT are uppercase agent names.

The pages need no build process, external fonts, logins, backend, tracker, or external hosting.
