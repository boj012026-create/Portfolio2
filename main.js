const projects = [
  {
    id: 'camping-frontend',
    title: 'Camping',
    description: 'Fiktiv hytteoversikt i React, med data fra headless WordPress.',
    tags: ['React', 'Headless WordPress'],
  },
  {
    id: 'HylleKoder',
    account: 'Martialcart',
    pageUrl: 'https://hylle-koder.vercel.app/',
    title: 'Hyllekoder PostNord',
    description: 'Genererer hyllenavn og strekkode til PostNord-hyller.',
  },
  {
    id: 'OptimalPause',
    account: 'Martialcart',
    title: 'Optimale Pauser',
    description: 'Arbeidsklokke som jobber etter deg. Estimerer mental ytelse og hvor lang pause du trenger.',
  },
  {
    id: 'DaftPunkSoundboard',
    title: 'Soundboard',
    description: 'Daft Punk-soundboard som spilles med tastaturet.',
  },
];

function createRepoCard(p) {
  const user = p.account ?? DEFAULT_ACCOUNT;
  const demoUrl = p.pageUrl ?? `https://${user}.github.io/${p.id}/`;
  const codeUrl = `https://github.com/${user}/${p.id}`;

  const card = document.createElement('article');
  card.className = 'repo-card';
  card.id = p.id;
  card.innerHTML = `
    <a class="repo-card__image-link" href="${demoUrl}" target="_blank" rel="noreferrer">
      <img class="repo-card__image" src="assets/${p.id}.jpg" alt="Skjermbilde av ${p.title}" loading="lazy" width="640" height="400">
    </a>
    <h3 class="repo-card__title">${p.title}</h3>
    <p class="repo-card__text">${p.description}</p>
    ${p.tags ? `<ul class="repo-card__tags">${p.tags.map((t) => `<li class="repo-card__tag">${t}</li>`).join('')}</ul>` : ''}
    <div class="repo-card__links">
      <a class="btn action-open-demo" href="${demoUrl}" target="_blank" rel="noreferrer">Demo</a>
      <a class="btn action-open-code" href="${codeUrl}" target="_blank" rel="noreferrer">Kode</a>
    </div>`;
  return card;
}

document.getElementById('repo-grid').append(...projects.map(createRepoCard));

// Funksjon: e-postlenker (.action-send-email)
document.querySelectorAll('.action-send-email').forEach((a) => {
  a.href = `mailto:${EMAIL}`;
});

// Funksjon: marker aktiv side i menyen mens man ruller
const navLinks = [...document.querySelectorAll('.navbar__link')];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => {
        const isActive = a.getAttribute('href') === `#${entry.target.id}`;
        a.classList.toggle('navbar__link--active', isActive);
        if (isActive) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  },
  { root: document.getElementById('scroller'), threshold: 0.5 }
);
document.querySelectorAll('.page').forEach((s) => observer.observe(s));
