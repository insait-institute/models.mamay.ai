import { getPermalink } from './utils/permalinks';
import { nav, footer } from './i18n/translations';

const hrefs = [
  getPermalink('/blog'),
  getPermalink('/research'),
  getPermalink('/docs'),
];

const contactMailto = 'mailto:chat.mamay@insait.ai';

export const headerData = {
  links: nav.en.links.map((text, i) => ({
    text,
    href: hrefs[i],
    i18nKey: `nav.${i}`,
  })),
  actions: [{ text: nav.en.cta, href: contactMailto, i18nKey: 'nav.cta' }],
};

const huggingFaceHref =
  'https://huggingface.co/INSAIT-Institute/MamayLM-Gemma-3-27B-IT-v0.1';

export const footerDataEn = {
  links: [
    {
      title: footer.en.resources,
      links: [
        { text: footer.en.research, href: getPermalink('/research') },
        { text: footer.en.blog, href: getPermalink('/blog') },
        { text: footer.en.apiDocs, href: getPermalink('/docs') },
        { text: footer.en.huggingFaceModels, href: huggingFaceHref },
      ],
    },
    {
      title: footer.en.insait,
      links: [
        { text: footer.en.aboutInsait, href: 'https://insait.ai' },
        { text: footer.en.contact, href: contactMailto },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/INSAITinstitute' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.en.footNote,
};

export const footerDataUk = {
  links: [
    {
      title: footer.uk.resources,
      links: [
        { text: footer.uk.research, href: getPermalink('/research') },
        { text: footer.uk.blog, href: getPermalink('/blog') },
        { text: footer.uk.apiDocs, href: getPermalink('/docs') },
        { text: footer.uk.huggingFaceModels, href: huggingFaceHref },
      ],
    },
    {
      title: footer.uk.insait,
      links: [
        { text: footer.uk.aboutInsait, href: 'https://insait.ai' },
        { text: footer.uk.contact, href: contactMailto },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/INSAITinstitute' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.uk.footNote,
};
