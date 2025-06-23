
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  it: {
    dopamine: 'Dopamine',
    searchPlaceholder: 'Cerca notizie positive...',
    shareGoodNews: 'Condividi Buone Notizie',
    messages: 'Messaggi',
    notifications: 'Notifiche',
    profile: 'Profilo',
    settings: 'Impostazioni',
    darkMode: 'Modalità Scura',
    customTheme: 'Tema Personalizzato',
    login: 'Accedi',
    register: 'Registrati',
    about: 'Chi Siamo',
    dailyGoodNews: 'Notizia Positiva del Giorno',
    welcomeMessage: 'Benvenuto in Dopamine - Il social network che diffonde solo positività! 🌟',
    todaysGoodNews: "Oggi nel mondo: 100 milioni di alberi sono stati piantati grazie a iniziative globali di riforestazione! 🌱",
  },
  en: {
    dopamine: 'Dopamine',
    searchPlaceholder: 'Search for positive news...',
    shareGoodNews: 'Share Good News',
    messages: 'Messages',
    notifications: 'Notifications',
    profile: 'Profile',
    settings: 'Settings',
    darkMode: 'Dark Mode',
    customTheme: 'Custom Theme',
    login: 'Login',
    register: 'Register',
    about: 'About',
    dailyGoodNews: 'Daily Good News',
    welcomeMessage: 'Welcome to Dopamine - The social network that spreads only positivity! 🌟',
    todaysGoodNews: "Today in the world: 100 million trees have been planted thanks to global reforestation initiatives! 🌱",
  },
  es: {
    dopamine: 'Dopamine',
    searchPlaceholder: 'Buscar noticias positivas...',
    shareGoodNews: 'Compartir Buenas Noticias',
    messages: 'Mensajes',
    notifications: 'Notificaciones',
    profile: 'Perfil',
    settings: 'Configuración',
    darkMode: 'Modo Oscuro',
    customTheme: 'Tema Personalizado',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    about: 'Acerca de',
    dailyGoodNews: 'Buena Noticia del Día',
    welcomeMessage: '¡Bienvenido a Dopamine - La red social que solo difunde positividad! 🌟',
    todaysGoodNews: "Hoy en el mundo: ¡100 millones de árboles han sido plantados gracias a iniciativas globales de reforestación! 🌱",
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState('it');

  useEffect(() => {
    // Detect language based on location/browser
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['it', 'en', 'es'];
    const detectedLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    
    const savedLang = localStorage.getItem('dopamine-language') || detectedLang;
    setLanguageState(savedLang);
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('dopamine-language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
