/* Progressive enhancement: navigation works without JavaScript. */
document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuToggle.hidden = false;
function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuToggle.querySelector('span').textContent = open ? 'Close' : 'Menu';
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 701px)').addEventListener('change', () => setMenu(false));

/* User-triggered meeting; no idle animation. */
const hero = document.querySelector('.hero-interaction');
let meetingTimer;
function setMeeting(active) {
  hero.classList.toggle('is-meeting', active);
  hero.setAttribute('aria-pressed', String(active));
}
hero.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') { clearTimeout(meetingTimer); setMeeting(true); }
});
hero.addEventListener('pointerleave', (event) => {
  if (event.pointerType === 'mouse') { clearTimeout(meetingTimer); setMeeting(false); }
});
hero.addEventListener('click', () => {
  clearTimeout(meetingTimer);
  setMeeting(true);
  meetingTimer = setTimeout(() => setMeeting(false), 2400);
});
hero.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { clearTimeout(meetingTimer); setMeeting(false); }
});
hero.addEventListener('blur', () => { clearTimeout(meetingTimer); setMeeting(false); });

/* Import original SVGs into isolated, namespaced DOM copies. Disk assets stay untouched. */
async function loadSvg(path, prefix) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`SVG load failed: ${path} (${response.status})`);
  const source = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');
  if (source.querySelector('parsererror')) throw new Error(`Invalid SVG: ${path}`);
  const svg = document.importNode(source.documentElement, true);
  const ids = new Map([...svg.querySelectorAll('[id]')].map(node => [node.id, `${prefix}-${node.id}`]));
  svg.querySelectorAll('*').forEach(node => {
    for (const attribute of [...node.attributes]) {
      let value = attribute.value;
      ids.forEach((replacement, original) => {
        value = value.replaceAll(`url(#${original})`, `url(#${replacement})`);
        if (value === `#${original}`) value = `#${replacement}`;
      });
      if (attribute.name === 'id') value = ids.get(attribute.value);
      if (value !== attribute.value) node.setAttributeNS(attribute.namespaceURI, attribute.name, value);
    }
  });
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  return svg;
}
loadSvg('assets/graphics/symbiotika_collaboration.svg', 'hero-meeting').then(svg => {
  svg.setAttribute('viewBox', '1540 315 3220 2750');
  // Keep the supplied thermal paths; the two external outlines supply the motion.
  svg.querySelectorAll('path').forEach(path => {
    if (path.style.fill === 'none') path.style.display = 'none';
  });
  document.querySelector('.hero-collaboration').replaceChildren(svg);
  hero.classList.add('thermal-ready');
}).catch(error => console.warn('Using the original collaboration image as a crossfade fallback.', error));

loadSvg('assets/graphics/line.svg', 'current-board').then(svg => {
  svg.setAttribute('viewBox', '0 1000 6400 391.667');
  const layers = [...svg.children];
  const blue = layers.find(node => node.tagName === 'rect' && node.style.fill === 'rgb(38, 7, 255)');
  if (!blue) throw new Error('Blue line layer not found');
  blue.classList.add('line-blue-layer');
  const blueArtwork = layers.slice(layers.indexOf(blue) + 1).find(node => node.tagName === 'g');
  if (blueArtwork) blueArtwork.classList.add('line-blue-layer');
  const slot = document.querySelector('.current-line');
  slot.replaceChildren(svg);
  slot.classList.add('is-inline');
}).catch(error => console.warn('Using the original line image with an opacity hover fallback.', error));

/* Grid-row transitions follow content height, including images loading during expansion. */
const projectButtons = [...document.querySelectorAll('.project-toggle')];
function setProject(button, open) {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  button.setAttribute('aria-expanded', String(open));
  button.firstElementChild.textContent = open ? 'Close project' : 'Open project';
  button.lastElementChild.textContent = open ? '×' : '+';
  panel.classList.toggle('is-open', open);
  panel.inert = !open;
  if (open) panel.querySelectorAll('img').forEach(image => { image.loading = 'eager'; });
  updateProjectPriority();
}
function updateProjectPriority() {
  const active = projectButtons.find(button => button.getAttribute('aria-expanded') === 'true');
  const featured = active || projectButtons[0];
  document.querySelector('.project-grid').classList.toggle('market-featured', featured === projectButtons[1]);
  projectButtons.forEach(button => {
    const article = button.closest('article');
    article.classList.toggle('project-featured', button === featured);
    article.classList.toggle('project-secondary', button !== featured);
    article.classList.toggle('is-active', button === active);
    article.querySelector('.tag').textContent = button === active ? 'Selected project' : 'Featured';
  });
}
projectButtons.forEach(button => button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  projectButtons.forEach(other => setProject(other, other === button && open));
}));
document.querySelectorAll('.story-close').forEach(button => button.addEventListener('click', () => {
  const trigger = projectButtons.find(other => other.getAttribute('aria-controls') === button.dataset.close);
  setProject(trigger, false);
  trigger.focus({preventScroll:true});
  trigger.scrollIntoView({block:'nearest', behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}));
const archiveButton = document.querySelector('.archive-toggle');
function setArchive(open) {
  const panel = document.getElementById(archiveButton.getAttribute('aria-controls'));
  archiveButton.setAttribute('aria-expanded', String(open));
  archiveButton.lastElementChild.textContent = open ? '×' : '→';
  panel.classList.toggle('is-open', open);
  panel.inert = !open;
  if (open) panel.querySelectorAll('img').forEach(image => { image.loading = 'eager'; });
}
archiveButton.addEventListener('click', () => setArchive(archiveButton.getAttribute('aria-expanded') !== 'true'));
document.querySelector('[data-open-archive]').addEventListener('click', () => setArchive(true));

// Header and editorial links also open the relevant footer disclosure.
function revealLinkedDetails() {
  if (location.hash === '#collaborate' || location.hash === '#support') {
    document.querySelector(location.hash).open = true;
  }
}
document.querySelectorAll('a[href="#collaborate"],a[href="#support"]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector(link.getAttribute('href')).open = true; });
});
window.addEventListener('hashchange', revealLinkedDetails);
revealLinkedDetails();
