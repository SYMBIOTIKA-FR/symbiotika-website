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

/* Grid-row transitions follow content height, including images loading during expansion. */
const projectButtons = [...document.querySelectorAll('.project-toggle')];
function setProject(button, open) {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  button.setAttribute('aria-expanded', String(open));
  button.firstElementChild.textContent = open ? 'Close project' : 'View project';
  button.lastElementChild.textContent = open ? '−' : '+';
  panel.classList.toggle('is-open', open);
  panel.inert = !open;
  if (open) panel.querySelectorAll('img').forEach(image => { image.loading = 'eager'; });
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
// Header and editorial links also open the relevant footer disclosure.
function revealLinkedDetails() {
  if (location.hash === '#support') {
    document.querySelector(location.hash).open = true;
  }
}
document.querySelectorAll('a[href="#support"]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector(link.getAttribute('href')).open = true; });
});
window.addEventListener('hashchange', revealLinkedDetails);
revealLinkedDetails();

/* A user-controlled ticker, with a static reduced-motion presentation. */
const ticker = document.querySelector('.registration-ticker');
if (ticker) {
  const tickerPause = ticker.querySelector('.ticker-pause');
  tickerPause.hidden = false;
  tickerPause.addEventListener('click', () => {
    const paused = tickerPause.getAttribute('aria-pressed') !== 'true';
    tickerPause.setAttribute('aria-pressed', String(paused));
    tickerPause.setAttribute('aria-label', paused ? 'Resume registration ticker' : 'Pause registration ticker');
    tickerPause.textContent = paused ? 'Resume' : 'Pause';
    ticker.classList.toggle('is-paused', paused);
  });
  const registrationLink = document.querySelector('.ticker-link');
  registrationLink.addEventListener('click', () => {
    if (registrationLink.getAttribute('href') === '#registration-details') {
      document.querySelector('#registration-details').open = true;
    }
  });

}

/* Fresh brand colour per pointer entry; leaving always restores white. */
const headerWordmark = document.querySelector('.site-header .wordmark');
const wordmarkColors = ['var(--blue)', 'var(--yellow)', 'var(--thermal-pink)', 'var(--thermal-orange)'];
let previousWordmarkColor = -1;
headerWordmark.addEventListener('mouseenter', () => {
  const choices = wordmarkColors.map((_, index) => index).filter(index => index !== previousWordmarkColor);
  previousWordmarkColor = choices[Math.floor(Math.random() * choices.length)];
  headerWordmark.style.setProperty('--wordmark-hover', wordmarkColors[previousWordmarkColor]);
});
headerWordmark.addEventListener('mouseleave', () => headerWordmark.style.removeProperty('--wordmark-hover'));
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});

/* About: six entry points, one shared description. */
const aboutNetwork = document.querySelector('.about-network');
if (aboutNetwork) {
  const topics = {
  "context": {
    "category": "CONTEXT",
    "title": "Where It Began...",
    "body": "Symbiotika began from the need to create space for encounters between people, artistic practices, cultures and places. Rather than defining one fixed way of working, it creates conditions where different perspectives can meet and affect one another."
  },
  "etymology": {
    "category": "ETYMOLOGY",
    "title": "The Anatomy of Our Name",
    "body": "Symbiotika comes from the idea of symbiosis: different entities living, changing and evolving through relation. For us, connection is not simply about existing side by side. An encounter leaves a trace and creates something that did not exist before."
  },
  "becoming": {
    "category": "BECOMING",
    "title": "What Brought Us Together",
    "body": "Symbiotika is an ongoing and living practice. It grows through conversations, collaborations, shared experiences and unexpected encounters. Its identity is not fixed; it continues to become through the people and practices that enter it."
  },
  "network": {
    "category": "NETWORK",
    "title": "Our Extended Family...",
    "body": "Symbiotika develops through an expanding network of artists, collaborators, organisations, spaces and communities. Each relationship contributes to the platform and leaves its own trace within it."
  },
  "partners": {
    "category": "PARTNERS",
    "title": "The People We Grew With",
    "body": "Our partners help create the conditions for exchange, production and experimentation. They are not only supporters of individual projects, but part of the wider ecology through which Symbiotika grows."
  },
  "mission": {
    "category": "MISSION",
    "title": "Why We Exist",
    "body": "Symbiotika creates spaces for artistic exchange across cultures, practices and disciplines. We support encounters that can lead to new collaborations, shared knowledge and forms of practice that could not emerge alone."
  }
};
  const nodes = [...aboutNetwork.querySelectorAll('.about-node')];
  const panel = aboutNetwork.querySelector('.about-description');
  const visual = aboutNetwork.querySelector('.about-network-visual');
  const stage = aboutNetwork.querySelector('.about-network-stage');
  const desktop = window.matchMedia('(min-width: 1024px)');
  let activeNode = null;
  let pinned = false;
  let restoringFocus = false;
  let hideTimer;
  function positionDescription() {
    if (!activeNode) return;
    if (!desktop.matches) { activeNode.after(panel); return; }
    visual.append(panel);
    panel.style.removeProperty('width');
    const section = aboutNetwork.getBoundingClientRect();
    const container = visual.getBoundingClientRect();
    const node = activeNode.getBoundingClientRect();
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const gap = 24;
    const inset = 8;
    const minX = Math.max(section.left + inset, inset);
    const maxX = Math.min(section.right - inset, document.documentElement.clientWidth - inset) - width;
    const sectionTop = section.top + inset;
    const sectionBottom = section.bottom - inset - height;
    const visibleTop = Math.max(sectionTop, inset);
    const visibleBottom = Math.min(sectionBottom, window.innerHeight - inset - height);
    // Use the visible part of About when it has enough height for the full note.
    const minY = visibleBottom >= visibleTop ? visibleTop : sectionTop;
    const maxY = visibleBottom >= visibleTop ? visibleBottom : sectionBottom;
    let x = node.right + gap;
    if (x > maxX) x = node.left - width - gap;
    x = Math.max(minX, Math.min(x, maxX));
    const y = Math.max(minY, Math.min(node.top + Math.min(20, node.height * .15), maxY));
    // Calculate section-local coordinates, then translate to the positioned visual parent.
    const localX = x - section.left;
    const localY = y - section.top;
    panel.style.left = `${localX + section.left - container.left}px`;
    panel.style.top = `${localY + section.top - container.top}px`;
  }
  function closeDescription(restoreFocus = false) {
    clearTimeout(hideTimer);
    panel.hidden = true;
    nodes.forEach(node => node.setAttribute('aria-expanded', 'false'));
    const previous = activeNode;
    activeNode = null;
    pinned = false;
    if (restoreFocus) { restoringFocus = true; previous?.focus({preventScroll:true}); restoringFocus = false; }
  }
  function showDescription(node) {
    clearTimeout(hideTimer);
    activeNode = node;
    const topic = topics[node.dataset.topic];
    nodes.forEach(other => other.setAttribute('aria-expanded', String(other === node)));
    panel.querySelector('.about-description-category').textContent = topic.category;
    panel.querySelector('h3').textContent = topic.title;
    panel.querySelector('.about-description-copy').textContent = topic.body;
    panel.hidden = false;
    positionDescription();
  }
  function scheduleHide() {
    clearTimeout(hideTimer);
    if (desktop.matches && !pinned) hideTimer = setTimeout(() => closeDescription(), 160);
  }
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      if (desktop.matches) { pinned = false; showDescription(node); }
    });
    node.addEventListener('mouseleave', scheduleHide);
    node.addEventListener('focus', () => { if (desktop.matches && !restoringFocus) showDescription(node); });
    node.addEventListener('click', () => {
      if (node === activeNode && (!desktop.matches || pinned)) { closeDescription(); return; }
      showDescription(node);
      pinned = desktop.matches;
    });
  });
  panel.addEventListener('mouseenter', () => clearTimeout(hideTimer));
  panel.addEventListener('mouseleave', scheduleHide);
  panel.addEventListener('focusin', () => clearTimeout(hideTimer));
  visual.addEventListener('focusout', event => {
    if (desktop.matches && !visual.contains(event.relatedTarget)) scheduleHide();
  });
  panel.querySelector('.about-description-close').addEventListener('click', () => closeDescription(true));
  aboutNetwork.addEventListener('keydown', event => {
    if (event.key === 'Escape' && activeNode) { event.preventDefault(); closeDescription(true); }
  });
  desktop.addEventListener('change', () => { closeDescription(); visual.append(panel); });
  window.addEventListener('resize', () => { if (!panel.hidden) positionDescription(); });
  window.addEventListener('scroll', () => { if (desktop.matches && !panel.hidden) positionDescription(); }, {passive:true});
}
