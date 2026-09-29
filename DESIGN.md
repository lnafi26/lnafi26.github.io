# Portfolio design direction

This file is the visual brief for future edits. Read it before changing any visible UI so the three pages do not drift apart.

## Purpose and audience

This is Labib Nafi's personal portfolio, not a SaaS landing page or a fictional command center. A recruiter, collaborator, technical peer, or prospective client should be able to understand who Labib is, what he builds, and where to explore within a few seconds.

The site has three surfaces only: the personal home page, The Compound for applications/systems, and The Watchtower for AI assistants/agents. The Compound and Watchtower are two halves of one portfolio and use the same site-wide design system.

## Visual point of view

The site should feel personal, calm, modern, and welcoming without becoming soft beige/terracotta "AI lifestyle" design. Keep it simple enough that the work remains the point.

Use large, expressive typography and restrained interface chrome. The memorable move is the paired Compound/Watchtower object and the site's warm red-to-amber spectrum against Ink Black. Do not invent decorative illustrations to fill space.

### Site palette

The site-wide palette is fixed:

- Ink Black `#03071E`
- Night Bordeaux `#370617`
- Black Cherry `#6A040F`
- Oxblood `#9D0208`
- Brick Ember `#D00000`
- Red Ochre `#DC2F02`
- Cayenne Red `#E85D04`
- Deep Saffron `#F48C06`
- Orange `#FAA307`
- Amber Flame `#FFBA08`
- Eggshell White text `#F0EAD6`

Use the warm spectrum deliberately, not everywhere. Eggshell White is the primary text color. Muted text must remain readable against Ink Black.

### Project identity boundary

Project colors are not part of the site palette. Keep them isolated to the project media frame only.

- Project Syncora: purple + cyan
- Project Sentry: black + gold
- DEX: navy + white
- ROBERT: gold + black, the inverse of Project Sentry

Do not blend these colors into navigation, card chrome, carousel controls, page backgrounds, or shared status UI.

## Typography

Use Bricolage Grotesque for display headings and Source Sans 3 for body/interface text, with sensible system fallbacks. Headings should be confident but not enormous for their own sake. Body copy should remain at a comfortable reading size and line length.

Do not use monospace as decorative "tech" styling. Do not use tracked all-caps eyebrow labels as template chrome.

## Layout and components

- Prefer hierarchy, alignment, spacing, and meaningful grouping over decoration.
- Keep the homepage introduction left-aligned and concise.
- Keep the Compound and Watchtower in one shared, equal split container.
- The collection pages should use one main project surface, not a stack of nested floating cards.
- Technology lists should read like metadata, not a grid of pills.
- Buttons and links should receive only as much visual weight as their role requires.
- Use small corner radii consistently. Avoid huge soft cards and floating shells.
- No glassmorphism, glow, gradient text, fake metrics, ornamental icons, or generic AI/sparkle symbols.
- Do not add decorative 01/02/03 numbering.
- Avoid arrows on every link. Use plain, specific action labels.

## Motion

The project carousel is the one deliberately dramatic interaction and may keep its perspective travel effect because it is part of the portfolio concept. Other hover states should rely on color/border changes rather than bounce, scale, or spring effects. Always honor `prefers-reduced-motion`.

## Copy

Use concrete language. Name the project, user, task, or constraint when possible. Avoid interchangeable phrases such as "elevate your workflow," "seamless," "powerful," or "unlock potential."

Keep homepage copy short. Let visitors scan first and open projects for detail. Do not invent accomplishments, launch dates, capabilities, screenshots, or public links.

## Accessibility and responsive behavior

- Body text should be at least 16px where practical.
- Maintain WCAG AA contrast for normal text.
- Keep keyboard focus visible.
- Preserve native disclosure behavior for project timelines.
- Test narrow layouts as real compositions, not merely a shrunken desktop.
- Project cards must tolerate long titles, long technology lists, pending states, and no public link.

## Data and maintenance boundaries

- Project content, timelines, links, and project-specific themes live in `js/projects.js`.
- Shared visual rules live in `css/site.css`.
- Carousel/timeline behavior lives in `js/site.js`.
- Page-specific introductory copy lives in the relevant HTML file.

When making a visual change, apply it through the shared system unless there is a clear reason a page should differ. Review all three pages before considering the change finished.
