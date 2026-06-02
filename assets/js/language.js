(function () {
  const STORAGE_KEY = 'preferredLanguage';
  const supportedSections = Array.from(
    document.querySelectorAll('[data-language-section]')
  );

  const languageButtons = Array.from(
    document.querySelectorAll('[data-language-toggle]')
  );

  const languagesFromSections = supportedSections
    .map((section) => section.dataset.languageSection)
    .filter(Boolean);

  const languagesFromButtons = languageButtons
    .map((button) => button.dataset.languageToggle)
    .filter(Boolean);

  const supportedLanguages = Array.from(
    new Set(
      [...languagesFromSections, ...languagesFromButtons].map((lang) =>
        String(lang).toLowerCase()
      )
    )
  );

  if (supportedLanguages.length === 0) {
    return;
  }

  function normaliseLanguage(lang) {
    if (!lang) {
      return null;
    }
    const lowercase = String(lang).toLowerCase();
    return supportedLanguages.includes(lowercase) ? lowercase : null;
  }

  function updateButtons(activeLanguage) {
    languageButtons.forEach((button) => {
      const buttonLang = String(button.dataset.languageToggle || '').toLowerCase();
      const isActive = buttonLang === activeLanguage;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function updateSections(activeLanguage) {
    supportedSections.forEach((section) => {
      const sectionLang = String(section.dataset.languageSection || '').toLowerCase();
      const isActive = sectionLang === activeLanguage;
      section.classList.toggle('is-active', isActive);
      section.hidden = !isActive;
    });
  }

  function applyLanguage(lang, options) {
    const { skipPersist = false } = options || {};
    const normalised =
      normaliseLanguage(lang) ||
      normaliseLanguage('en') ||
      supportedLanguages[0];

    document.body.dataset.languageInitialised = 'true';
    window.__siteLanguage = normalised;
    document.documentElement.setAttribute('lang', normalised);

    updateButtons(normalised);
    updateSections(normalised);

    window.dispatchEvent(
      new CustomEvent('site:language-change', {
        detail: { language: normalised },
      })
    );

    if (!skipPersist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, normalised);
      } catch (error) {
        /* localStorage may be unavailable, fail silently */
      }
    }
  }

  function languageFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('lang');
    } catch (error) {
      return null;
    }
  }

  function determineInitialLanguage() {
    const fromUrl = languageFromUrl();
    if (normaliseLanguage(fromUrl)) {
      return fromUrl;
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (normaliseLanguage(stored)) {
        return stored;
      }
    } catch (error) {
      /* ignore storage errors */
    }
    const documentLang = document.documentElement.getAttribute('lang');
    if (normaliseLanguage(documentLang)) {
      return documentLang;
    }
    return supportedLanguages[0];
  }

  const initialLanguage = determineInitialLanguage();
  applyLanguage(initialLanguage, { skipPersist: true });

  languageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      applyLanguage(button.dataset.languageToggle);
    });
  });
})();
