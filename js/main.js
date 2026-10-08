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

/* Exclusive paper-card accordion; text remains editable HTML. */
const aboutButtons = [...document.querySelectorAll('.about-toggle')];
aboutButtons.forEach(button => button.addEventListener('click', () => {
  const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
  aboutButtons.forEach(other => {
    const open = other === button && shouldOpen;
    const panel = document.getElementById(other.getAttribute('aria-controls'));
    other.setAttribute('aria-expanded', String(open));
    other.querySelector('.card-sign').textContent = open ? '−' : '+';
    panel.classList.toggle('is-open', open);
    panel.inert = !open;
    if (open) panel.querySelectorAll('img').forEach(image => { image.loading = 'eager'; });
  });
}));

/* A user-controlled ticker, with a static reduced-motion presentation. */
const ticker = document.querySelector('.registration-ticker');
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
