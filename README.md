# Labib Nafi — Portfolio (v5)

Three static pages for GitHub Pages: `index.html` (personal landing page), `compound.html` (software projects) and `watchtower.html` (AI assistants). No account system, database, build process, downloaded fonts, external scripts or generated illustrations.

## Visual system

Site-wide colors from the chosen Coolors palette: `#03071E`, `#370617`, `#6A040F`, `#9D0208`, `#D00000`, `#DC2F02`, `#E85D04`, `#F48C06`, `#FAA307`, `#FFBA08`. Body text is Eggshell White `#F0EAD6`. The blue-black and eggshell make up almost all of the layout; saturated colors are used selectively. The only decorative gradient is the slim band joining the homepage's two taller-than-wide collection links. Each project keeps its separate palette **only inside its artwork area**, enclosed in a neutral card.

## Publish the update

1. Download and extract the v5 ZIP. Back up your existing repository if you want to preserve your older website.
2. Replace the **contents of the root** of `lnafi26.github.io` with the extracted files and folders (not the ZIP, and not an enclosing `labib-portfolio-v4` folder). Commit the changes to your existing `main` branch.
3. Your GitHub Pages configuration does not need to change. Reload the browser after deployment; a hard refresh may be needed for cached CSS.

The older SVG illustrations from earlier versions are not used by this version. You may delete the unreferenced artwork files from your repository later.

## Update projects

Edit `js/projects.js` for project descriptions, dates (`MM/YY` or `null` for unconfirmed / not launched), public links, and individual colors. Do not publish private repository URLs. To display real artwork later, add `mediaType: 'image'`, and set `art` and `artAlt` to a real image. The cards, timeline, and carousel are shared by both collections. Applications use title case: Project Syncora and Project Sentry. AI assistant names DEX and ROBERT are all caps.

## Strict separation of site colors and project colors

The site-wide palette and Eggshell White apply to every page, card, breadcrumb, tab, caption, timeline and carousel control. Per-project colors are set **only on the `.project-media` frame** by `js/site.js`; they must never be placed on the outer `.project-slide` card or the site navigation. When replacing a placeholder with a real logo/screenshot/visualizer, confine it to this frame.

| Portfolio item | Media background | Media text and accents |
|---|---|---|
| Project Syncora | Deep purple `#211440` | Purple `#B08CFF`, cyan `#70E4EF` / `#BFF7FF` |
| Project Sentry | Black `#101010` | Gold `#E8BD58` |
| DEX | Navy blue `#101C3B` | White `#FFFFFF` |
| ROBERT | Gold `#E8BD58` | Black `#101010` |

Project Sentry and ROBERT deliberately reverse the **same exact** black/gold colors. No project-specific gradients or crossover with the site palette.

