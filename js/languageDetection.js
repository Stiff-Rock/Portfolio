const translations = {
  en: {
    greeting: 'Hi! I\'m a Junior Software and Videogame developer',
  },
  es: {
    greeting: 'Hola! Soy un desarrollador junior de software y videojuegos',
  }
}


let lang = 'en';

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('es'))
    lang = 'es';

  updateTextContents()
}

function updateTextContents() {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent += translations[lang][key];
    }
  });
}

window.onload = detectLanguage;
