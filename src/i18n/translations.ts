export type Lang = 'en' | 'uk';

export const nav = {
  en: {
    links: ['Blog', 'About the Models', 'Documentation'],
    cta: 'Contact Us',
  },
  uk: {
    links: ['Блог', 'Про моделі', 'Документація'],
    cta: 'Зв’язатися з нами',
  },
};

export const footer = {
  en: {
    resources: 'Resources',
    research: 'Research',
    blog: 'Blog',
    news: 'News',
    huggingFaceModels: 'HuggingFace Models',
    apiDocs: 'API Docs',
    apiAccess: 'API Access',
    insait: 'INSAIT',
    aboutInsait: 'About INSAIT',
    contact: 'Contact',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. All rights reserved.<br />Synergy Tower, 111P Tsarigradsko Shose Blvd, 1784 Sofia, Bulgaria',
  },
  uk: {
    resources: 'Ресурси',
    research: 'Дослідження',
    blog: 'Блог',
    news: 'Новини',
    huggingFaceModels: 'Моделі HuggingFace',
    apiDocs: 'Документація API',
    apiAccess: 'Доступ до API',
    insait: 'INSAIT',
    aboutInsait: 'Про INSAIT',
    contact: 'Контакт',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. Усі права захищено.<br />Synergy Tower, бул. Царіградське шосе 111Р, 1784 Софія, Болгарія',
  },
};

export const hero = {
  en: {
    title: 'State-of-the-art AI for the<br /><span class="text-primary">Ukrainian Language</span>',
    subtitle:
      'MamayLM v2.0 — a new generation of open, multimodal AI models for Ukrainian. Faster, smarter, and with longer context — built by INSAIT for Ukrainian citizens, institutions, and organizations. Read more about MamayLM v2.0 on our blog <a href="/blog" class="text-primary underline">here</a>.',
    cta: 'Get API Access',
    ctaSecondary: 'Download from HuggingFace',
  },
  uk: {
    title: 'Передовий штучний інтелект для<br /><span class="text-primary">української мови</span>',
    subtitle:
      '<strong>MamayLM v2.0</strong> — нове покоління відкритих мультимодальних AI-моделей для української мови. Швидші, розумніші та з довшим контекстом — створені INSAIT для українських громадян, установ і організацій. Дізнайтеся більше про MamayLM v2.0 у нашому блозі <a href="/blog" class="text-primary underline">тут</a>.',
    cta: 'Отримати доступ до API',
    ctaSecondary: 'Завантажити з HuggingFace',
  },
};

export const apiAccess = {
  en: {
    title: 'Access MamayLM Models',
    subtitle: 'Get started with the latest MamayLM v2.0 models — available via API or direct download on HuggingFace.',
    ctaApi: 'Get API Access',
    ctaHuggingFace: 'Download on HuggingFace',
  },
  uk: {
    title: 'Доступ до моделей MamayLM',
    subtitle:
      'Розпочніть з найновіших моделей MamayLM v2.0 — доступних через API або для прямого завантаження з HuggingFace.',
    ctaApi: 'Доступ до API',
    ctaHuggingFace: 'Завантажити з HuggingFace',
  },
};

// Client-side translations map for nav and UI elements with data-i18n attributes
export const clientTranslations: Record<string, Record<string, string>> = {
  en: {
    ...nav.en.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.en.cta,
  },
  uk: {
    ...nav.uk.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.uk.cta,
  },
};
