
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
      <div className="bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 dark:from-amber-800/50 dark:via-yellow-800/50 dark:to-orange-800/50 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-2xl animate-fade-in-up relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl">✨</div>
          <div className="absolute bottom-4 left-4 text-4xl">🌟</div>
          <div className="absolute top-1/2 left-1/4 text-3xl">💫</div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Sparkles className="text-yellow-700 dark:text-yellow-300 mr-3 animate-pulse" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-sm">
                {t('dailyGoodNews')}
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={refreshNews}
              className="text-yellow-700 hover:text-yellow-800 dark:text-yellow-300 hover:bg-yellow-300/20 dark:hover:bg-yellow-700/20"
            >
              <RefreshCw size={20} className={isAnimating ? 'animate-spin' : ''} />
            </Button>
          </div>
          
          <p className={`text-gray-900 dark:text-gray-100 text-xl leading-relaxed font-semibold mb-4 drop-shadow-sm transition-all duration-300 ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            {currentNews}
          </p>
          
          <div className="text-sm text-gray-800 dark:text-gray-200 font-medium bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-lg p-3 inline-block">
            ✨ Una nuova buona notizia ogni giorno per iniziare con il sorriso!
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyGoodNews;
