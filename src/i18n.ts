import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enCommon from "./locales/en/common";
import enEducation from "./locales/en/education";
import enContact from "./locales/en/contact";
import enChatbot from "./locales/en/chatbot";
import enFooter from "./locales/en/footer";
import enFindAupair from "./locales/en/find-aupair";
import enFindFamily from "./locales/en/find-family";
import enHowItWorks from "./locales/en/how-it-works";
import enAbout from "./locales/en/about";
import enHome from "./locales/en/home";

import zhCommon from "./locales/zh/common";
import zhEducation from "./locales/zh/education";
import zhContact from "./locales/zh/contact";
import zhChatbot from "./locales/zh/chatbot";
import zhFooter from "./locales/zh/footer";
import zhFindAupair from "./locales/zh/find-aupair";
import zhFindFamily from "./locales/zh/find-family";
import zhHowItWorks from "./locales/zh/how-it-works";
import zhAbout from "./locales/zh/about";
import zhHome from "./locales/zh/home";

const resources = {
  en: {
    common: enCommon,
    education: enEducation,
    contact: enContact,
    chatbot: enChatbot,
    footer: enFooter,
    findAuPair: enFindAupair,
    findFamily: enFindFamily,
    howItWorks: enHowItWorks,
    about: enAbout,
    home: enHome,
  },
  zh: {
    common: zhCommon,
    education: zhEducation,
    contact: zhContact,
    chatbot: zhChatbot,
    footer: zhFooter,
    findAuPair: zhFindAupair,
    findFamily: zhFindFamily,
    howItWorks: zhHowItWorks,
    about: zhAbout,
    home: zhHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",
    defaultNS: "common",
    ns: [
      "common",
      "education",
      "contact",
      "chatbot",
      "footer",
      "findAuPair",
      "findFamily",
      "howItWorks",
      "about",
      "home",
    ],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
