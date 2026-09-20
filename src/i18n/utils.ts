import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (lang === defaultLang) {
      return cleanPath;
    }
    return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
  };
}

export function getSwitchLanguageUrl(currentUrl: URL, targetLang: Lang): string {
  const pathname = currentUrl.pathname;
  const isCurrentlyEn = pathname === '/en' || pathname.startsWith('/en/');

  if (targetLang === 'en') {
    if (isCurrentlyEn) return pathname;
    return pathname === '/' ? '/en' : `/en${pathname}`;
  } else {
    // targetLang is 'es'
    if (!isCurrentlyEn) return pathname;
    if (pathname === '/en' || pathname === '/en/') return '/';
    return pathname.replace(/^\/en/, '');
  }
}
