(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
  const root = document.querySelector('[data-collection]');
  if (!root || !window.PORTFOLIO_PROJECTS) return;

  const collection = root.dataset.collection;
  const projects = window.PORTFOLIO_PROJECTS[collection] || [];
  const deck = root.querySelector('[data-deck]');
  const camera = root.querySelector('[data-camera]');
  const picker = root.querySelector('[data-picker]');
  const current = root.querySelector('[data-current]');
  const total = root.querySelector('[data-total]');
  const progress = root.querySelector('[data-progress]');
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const params = new URLSearchParams(window.location.search);
  const requested = projects.findIndex(p => p.id === params.get('project'));
  let active = requested >= 0 ? requested : 0;
  let moving = false;
  let scheduled = [];

  const make = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value != null) el.textContent = value;
    return el;
  };
  const append = (parent, ...items) => { items.forEach(item => parent.append(item)); return parent; };
  const pad = n => String(n).padStart(2, '0');
  const field = (label, value) => {
    const wrap = make('div', 'date-field');
    append(wrap, make('dt', '', label), make('dd', '', value || '—'));
    if (!value) wrap.querySelector('dd').setAttribute('aria-label', `${label}: not confirmed or not launched`);
    return wrap;
  };
  const makeCard = (project, index) => {
    const article = make('article', 'project-slide');
    article.id = `slide-${project.id}`;
    article.dataset.id = project.id;
    article.setAttribute('aria-roledescription', 'slide');
    article.setAttribute('aria-label', `${pad(index + 1)} of ${pad(projects.length)}: ${project.name}`);
    article.style.setProperty('--p-base', project.theme.base);
    article.style.setProperty('--p-accent', project.theme.accent);
    article.style.setProperty('--p-secondary', project.theme.secondary);
    article.style.setProperty('--p-paper', project.theme.paper);
    const content = make('div', 'project-content');
    const top = make('div', 'project-top');
    append(top, make('span', 'project-serial', `PROJECT / ${collection === 'compound' ? 'C' : 'W'}—${pad(index + 1)}`), make('span', 'project-status', project.status));
    const body = make('div', 'project-body');
    const copy = make('div', 'project-copy');
    append(copy, make('div', 'project-category', project.category), make('h2', 'project-title', project.name), make('p', 'project-line', project.line), make('p', 'project-what', project.what));
    const how = make('div', 'project-how');
    append(how, make('span', 'project-small-label', 'HOW IT WORKS'), make('p', '', project.how));
    copy.append(how);
    const media = make('figure', 'project-media project-media-type');
    const mediaTop = make('span', 'project-media-top', 'PROJECT / VISUAL IDENTITY');
    const mediaBottom = make('figcaption', '', 'ACTUAL PROJECT ARTWORK / COMING WHEN AVAILABLE');
    const typeArtwork = make('div', 'project-type-art');
    const typeName = make('span', 'project-type-name', project.name);
    const typeRule = make('span', 'project-type-rule');
    const typeCategory = make('span', 'project-type-category', project.category);
    append(typeArtwork, typeName, typeRule, typeCategory);
    append(media, mediaTop, typeArtwork, mediaBottom);
    // When real project assets are ready, set project.mediaType = 'image' and project.art to their path.
    if (project.mediaType === 'image' && project.art) {
      const img = make('img', 'project-art');
      img.src = project.art; img.alt = project.artAlt || `${project.name} project artwork`;
      img.width = 550; img.height = 470;
      img.loading = index === active ? 'eager' : 'lazy';
      typeArtwork.replaceWith(img);
      mediaBottom.textContent = project.artCaption || 'PROJECT IMAGE';
    }
    append(body, copy, media);
    const lower = make('div', 'project-lower');
    const timeline = make('dl', 'project-timeline');
    append(timeline, field('CONCEPT', project.dates.concept), field('R&D', project.dates.rnd), field('LAUNCH', project.dates.launch));
    const tech = make('div', 'project-tech');
    append(tech, make('span', 'project-small-label', 'BUILT WITH / EXPLORING'));
    const tagRow = make('div', 'tag-row');
    project.stack.forEach(item => tagRow.append(make('span', 'tag', item)));
    tech.append(tagRow);
    const linkArea = make('div', 'project-links');
    if (project.links.length) {
      project.links.forEach(link => {
        const a = make('a', 'project-outlink', `${link.label} ↗`);
        a.href = link.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        linkArea.append(a);
      });
    } else linkArea.append(make('span', 'project-private', `${project.privateLabel || 'NOT PUBLIC YET'} ↗`));
    append(lower, timeline, tech, linkArea);
    append(content, top, body, lower);
    article.append(content);
    return article;
  };
  const slides = projects.map((project, index) => {
    const slide = makeCard(project, index);
    camera.append(slide);
    const button = make('button', 'picker-item');
    button.type = 'button';
    button.dataset.select = String(index);
    append(button, make('span', 'picker-index', pad(index + 1)), make('span', 'picker-name', project.name), make('span', 'picker-status', project.status));
    button.addEventListener('click', () => goTo(index));
    picker.append(button);
    return slide;
  });
  const tabs = Array.from(picker.querySelectorAll('button'));
  total.textContent = pad(projects.length);
  const place = () => {
    slides.forEach((slide, index) => {
      const distance = index - active;
      const side = Math.sign(distance);
      slide.style.setProperty('--tx', `${distance * 94}%`);
      slide.style.setProperty('--tz', distance === 0 ? '0px' : '-250px');
      slide.style.setProperty('--yaw', distance === 0 ? '0deg' : `${-side * 18}deg`);
      slide.style.setProperty('--scale', distance === 0 ? '1' : '.77');
      slide.classList.toggle('is-active', index === active);
      slide.classList.toggle('is-far', Math.abs(distance) > 1);
      slide.setAttribute('aria-hidden', index === active ? 'false' : 'true');
      // Inactive cards are visual scenery, not duplicate keyboard stops.
      if ('inert' in slide) slide.inert = index !== active;
      slide.querySelectorAll('a').forEach(a => { a.tabIndex = index === active ? 0 : -1; });
    });
    tabs.forEach((tab, index) => {
      const selected = index === active;
      tab.classList.toggle('is-selected', selected);
      tab.setAttribute('aria-current', selected ? 'true' : 'false');
      tab.setAttribute('aria-label', `Show ${projects[index].name}${selected ? ', current project' : ''}`);
    });
    current.textContent = pad(active + 1);
    progress.style.width = `${((active + 1) / projects.length) * 100}%`;
    prev.disabled = active === 0;
    next.disabled = active === projects.length - 1;
  };
  function goTo(index) {
    if (moving || index < 0 || index >= projects.length || index === active) return;
    const direction = Math.sign(index - active);
    // Respect reduced-motion and keep navigation immediate.
    if (reduceMotion.matches) { active = index; place(); return; }
    moving = true;
    deck.classList.add('is-traveling');
    deck.style.setProperty('--travel-tilt', `${direction * -8}deg`);
    scheduled.push(setTimeout(() => { active = index; place(); }, 145));
    scheduled.push(setTimeout(() => { deck.classList.remove('is-traveling'); }, 315));
    scheduled.push(setTimeout(() => { moving = false; scheduled = []; }, 610));
  }
  prev.addEventListener('click', () => goTo(active - 1));
  next.addEventListener('click', () => goTo(active + 1));
  deck.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
  });
  window.addEventListener('pagehide', () => scheduled.forEach(clearTimeout));
  place();
})();
