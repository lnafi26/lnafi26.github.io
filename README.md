# Labib Nafi — Portfolio (v6)

Three static GitHub Pages pages: `index.html` (about me), `compound.html` (applications), `watchtower.html` (AI assistants). No backend, account, build process, or external scripts. Your live GitHub Pages configuration stays the same.

## What changed from v5

- Centered the two slim/tall homepage navigation cards beneath their "Explore my work" heading, so the empty space is balanced on both sides rather than all appearing on the right.
- Replaced the old three-date strip and the redundant top-right development-status badge with one expandable **Current state** control in each project card.
- Clicking "View timeline" opens a four-step timeline: **Concept → R&D → Testing & Refinement → Launch**. This is an accessible native HTML disclosure (`<details>`), not a fourth page. The existing carousel still works.
- Current state is **derived automatically** from the dated milestones. All four projects start with the dates and anticipated launch windows provided by Labib.
- Preserved the site-wide palette and each project's **strictly separate** identity colors within the image/visual frame only.

## Where to update project progress

**Open `js/projects.js`.** This is the one file you edit for *both* the Compound and Watchtower. Find the project by its `id` (`syncora`, `sentry`, `dex`, or `robert`), then edit its `phases` block. Example:

```js
phases: {
  concept: '07/26',
  rnd: { start: '07/26', end: null },
  testing: { start: null, end: null },
  launch: { date: null, anticipated: 'Winter 2026' }
},
```

**The dates mean:**

| Field | What to enter | What visitors see |
|---|---|---|
| `concept` | `'07/26'` | `07/26` |
| `rnd.start` | `'07/26'`; `null` before R&D starts | `07/26–` while ongoing, otherwise `Pending` |
| `rnd.end` | `null` while ongoing; e.g. `'09/26'` once R&D is finished | `07/26–09/26` |
| `testing.start` | `null` before testing; then e.g. `'09/26'` | `Pending` or `09/26–` |
| `testing.end` | `null` during testing; e.g. `'10/26'` once complete | `09/26–10/26` |
| `launch.date` | `null` until actually launched; then `'12/26'` | An actual launch date and current state `Launched` |
| `launch.anticipated` | `'Winter 2026'`, `'Early 2027'`, etc. | `Anticipated Winter 2026` until an actual launch date is entered |

Use **exactly `MM/YY`** for actual dates. Keep the quotes around dates and `null` unquoted. The trailing dash in `07/26–` means R&D is still ongoing. For ROBERT, the separate `rndNote` line explains that its R&D is awaiting completion of Project Sentry; update or remove that note when it ceases to apply.

**To finish R&D:** Set `rnd.end` to the completion month. The summary automatically becomes `R&D complete` until the next phase starts. **To start Testing & Refinement:** Set `testing.start` to the month it begins. The summary becomes `Testing & Refinement`; when finished, set `testing.end`. **To launch:** Set `launch.date` to the real launch month; the expected launch wording disappears automatically. Do not set a phase start merely because you anticipate reaching it.

No need to edit `js/site.js`, HTML, CSS, or a separate status label when updating milestones. To add a project, copy an existing project object in `js/projects.js`, assign a unique `id`, and fill in the same `phases` fields.

## Colors: keep the palettes separate

The **website's overarching palette** is the original Coolors selection: `#03071E`, `#370617`, `#6A040F`, `#9D0208`, `#D00000`, `#DC2F02`, `#E85D04`, `#F48C06`, `#FAA307`, and `#FFBA08`, with Eggshell White `#F0EAD6` for body text. It controls the pages, navigation, descriptions, shared project cards, timeline, and carousel controls.

The **project-only palettes** belong exclusively inside `.project-media`: Project Syncora = purple/cyan, Project Sentry = black/gold, DEX = navy/white, ROBERT = gold/black (the exact reversal of Project Sentry). `js/site.js` sets each project's `--p-*` variables on `.project-media` only. Do not put those colors on an outer card, page, or shared control, or blend them into the overall site palette. Replace media placeholders with real project screenshots or logos whenever ready (`mediaType: 'image'`, `art`, `artAlt`).

## Publish

1. Download and extract the v6 ZIP. The extracted *contents* (including `index.html`, `compound.html`, `watchtower.html`, `css/`, `js/`, and `assets/`) go at the repository root. Do **not** upload the ZIP itself or enclose all the files inside another directory.
2. Back up your previous version if you wish. Replace v5 files with the new files in your existing `lnafi26.github.io` repository and commit them to the configured `main` branch.
3. GitHub Pages deploys the update automatically. Refresh the site after deployment; a hard refresh may be needed if CSS/JavaScript is cached.

Never put private repository links, API keys, or secrets in public static site files. These milestones describe **your intended schedule**, not guaranteed launch dates.
