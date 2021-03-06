export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  let locale = {};
  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    const defaultLocale = getDefaultLocale();
    locale = defaultLocale.default || defaultLocale;
  }

  const result = {
    ...locale,
    ...props.locale,
  };
  result.lang = {
    ...locale.lang,
    ...props.locale.lang,
  };
  return result;
}

export function getLocaleCode(context) {
  const localeCode = context.antLocale && context.antLocale.locale;
  // Had use LocaleProvide but didn't set locale
  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn';
  }
  return localeCode;
}
