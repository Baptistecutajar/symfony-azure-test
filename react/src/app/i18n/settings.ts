// https://locize.com/blog/next-13-app-dir-i18n/
export const languages = process.env.CONTENTFUL_LOCALES!.split(',');
export const fallbackLng = languages[0];

export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
