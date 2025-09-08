// Motyw jasny/ciemny
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const pref = localStorage.getItem('theme');
  if(pref){ root.setAttribute('data-theme', pref); }
  btn?.addEventListener('click', ()=>{
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
  });
})();

// Formularz kontaktowy (demo)
document.getElementById('contactForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log('Contact form data:', data);
  alert('Dziękuję! Formularz demo — skonfiguruj backend lub użyj usługi typu Formspree.');
});
