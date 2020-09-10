import etEE from "assets/locales/et-EE";

const localeKeyToMessages = {
  "et-EE": etEE,
};

const getMessages = (locale) => localeKeyToMessages[locale] || etEE;

export const getLocales = () => Object.keys(localeKeyToMessages);

export default getMessages;
