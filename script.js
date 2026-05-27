const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

const tagline = document.querySelector('.hero__sub');
if (tagline) {
  const phrases = [
    'Экспериментальная паркур-карта в Roblox. Падающие лестницы, маятники, конвейеры, вращающиеся комнаты — всё, что заставит тебя пожалеть о клике "play".',
  ];
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const logo = document.querySelector('.logo-text');
if (logo) {
  const original = logo.textContent;
  const chars = '01░▓█▲◈◐';
  logo.addEventListener('mouseenter', () => {
    let i = 0;
    const interval = setInterval(() => {
      logo.textContent = original.split('').map((c, idx) => {
        if (idx < i) return original[idx];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      i++;
      if (i > original.length) {
        clearInterval(interval);
        logo.textContent = original;
      }
    }, 40);
  });
}
