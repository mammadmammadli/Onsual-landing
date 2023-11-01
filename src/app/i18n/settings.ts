export const fallbackLng = "az";
export const languages = [fallbackLng, "en", "ru"];

export const defaultNS = 'translation'

export const cookieName = "lang";

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}