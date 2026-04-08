import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa los JSON que creamos antes
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Une i18next con React
  .init({
    supportedLngs: ["en", "es"], // Idiomas soportados
    nonExplicitSupportedLngs: true, // Si el idioma detectado no está en supportedLngs, no lanzará un error
    load: "languageOnly", // Carga solo el código del idioma (ej: 'en' en lugar de 'en-US')
    detection: {
      caches: ["localStorage"],
      order: ["localStorage", "navigator"], // Primero busca en localStorage, luego en el navegador
      convertDetectedLanguage: (detectedLanguage) => {
        if (detectedLanguage) return detectedLanguage.split("-")[0]; // Convierte 'en-US' a 'en'
        return detectedLanguage;
      },
      lookupLocalStorage: "i18nextLng",
    },
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en", // Idioma por defecto si no detecta nada
    interpolation: {
      escapeValue: false, // React ya protege contra ataques XSS
    },
  });

export default i18n;
