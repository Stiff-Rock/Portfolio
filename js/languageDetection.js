const translations = {
  en: {
    greeting: 'Junior Software and Videogame developer',
    skills: 'my_skills.txt',
    projects: 'my_projects.txt',
    contact: 'info_contacto.txt'
  },
  es: {
    greeting: 'Desarrollador junior de software y videojuegos',
    skills: 'mis_habilidades.txt',
    projects: 'mis_proyectos.txt',
    contact: 'contact_info.txt'
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
