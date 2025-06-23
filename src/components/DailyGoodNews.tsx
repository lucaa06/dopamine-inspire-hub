
import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const DailyGoodNews = () => {
  const { t } = useLanguage();
  const [currentNews, setCurrentNews] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const goodNewsData = {
    it: [
      "Oggi nel mondo: 100 milioni di alberi sono stati piantati grazie a iniziative globali di riforestazione! 🌱",
      "Buona notizia: Un nuovo farmaco ha curato il 95% dei pazienti affetti da una rara malattia genetica! 💊",
      "Incredibile: Le energie rinnovabili hanno superato i combustibili fossili per la prima volta nella storia! ⚡",
      "Meraviglioso: 50.000 persone hanno donato sangue questa settimana salvando migliaia di vite! ❤️",
      "Fantastico: Un'app gratuita ha aiutato 1 milione di persone a trovare lavoro questo mese! 📱"
    ],
    en: [
      "Today in the world: 100 million trees have been planted thanks to global reforestation initiatives! 🌱",
      "Good news: A new drug has cured 95% of patients with a rare genetic disease! 💊",
      "Incredible: Renewable energy has surpassed fossil fuels for the first time in history! ⚡",
      "Wonderful: 50,000 people donated blood this week saving thousands of lives! ❤️",
      "Fantastic: A free app helped 1 million people find jobs this month! 📱"
    ],
    es: [
      "Hoy en el mundo: ¡100 millones de árboles han sido plantados gracias a iniciativas globales de reforestación! 🌱",
      "Buena noticia: ¡Un nuevo medicamento ha curado el 95% de pacientes con una enfermedad genética rara! 💊",
      "Increíble: ¡Las energías renovables han superado a los combustibles fósiles por primera vez en la historia! ⚡",
      "Maravilloso: ¡50,000 personas donaron sangre esta semana salvando miles de vidas! ❤️",
      "Fantástico: ¡Una app gratuita ayudó a 1 millón de personas a encontrar trabajo este mes! 📱"
    ]
  };

  const { language } = useLanguage();

  useEffect(() => {
    // Get today's news based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const newsArray = goodNewsData[language as keyof typeof goodNewsData] || goodNewsData.en;
    setCurrentNews(newsArray[dayOfYear % newsArray.length]);
  }, [language]);

  const refreshNews = () => {
    setIsAnimating(true);
    const newsArray = goodNewsData[language as keyof typeof goodNewsData] || goodNewsData.en;
    const randomIndex = Math.floor(Math.random() * newsArray.length);
    
    setTimeout(() => {
      setCurrentNews(newsArray[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="mb-8 mx-auto max-w-4xl">
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-pink-900/30 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg animate-fade-in-up">
        <div className="flex items-start justify-between">
          <div className="flex items-center mb-3">
            <Sparkles className="text-yellow-600 dark:text-yellow-400 mr-2 animate-pulse" size={24} />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {t('dailyGoodNews')}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={refreshNews}
            className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400"
          >
            <RefreshCw size={18} className={isAnimating ? 'animate-spin' : ''} />
          </Button>
        </div>
        
        <p className={`text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-medium transition-all duration-300 ${
          isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        }`}>
          {currentNews}
        </p>
        
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          ✨ Una nuova buona notizia ogni giorno per iniziare con il sorriso!
        </div>
      </div>
    </div>
  );
};

export default DailyGoodNews;
