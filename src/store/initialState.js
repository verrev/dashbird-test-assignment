import getMessages, { getLocales } from "assets/locales";

const initialLocale = getLocales()[0];

export default {
  intl: {
    locale: initialLocale,
    messages: getMessages(initialLocale)
  },
  loading: {
    current: []
  },
  analytics: {
    chosenDeal: null,
    paymentClientSecret: null,
    paymentSucceeded: false
  }
};
