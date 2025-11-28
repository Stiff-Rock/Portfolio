let lang = 'en';
let translations = {};

async function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('es'))
    lang = 'es';

  await loadTranslations(lang);
}

async function loadTranslations(selectedLang) {
  try {
    const response = await fetch(`./translations/${selectedLang}.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    translations = await response.json();
    updateTextContents();
  } catch (error) {
    console.error('Error loading translations:', error);

    if (selectedLang !== 'en') {
      loadTranslations('en');
    } else {
      console.error('The default language (en) also failed to load.');
      alert('Fatal error occurred, could not load translation files')
    }
  }
}

function updateTextContents() {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key]) {
      element.innerText += translations[key];
    }
  });
}

window.onload = detectLanguage;
