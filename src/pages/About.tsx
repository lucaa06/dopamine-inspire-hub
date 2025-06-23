
import React from 'react';
import { Heart, Shield, Users, Sparkles, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VerticalSidebar from '@/components/VerticalSidebar';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: "Positività Autentica",
      description: "Solo notizie positive verificate che diffondono gioia e speranza nel mondo"
    },
    {
      icon: Shield,
      title: "Moderazione Solida",
      description: "Sistema avanzato di moderazione che previene fake news e contenuti negativi"
    },
    {
      icon: Users,
      title: "Community Genuina",
      description: "Una comunità di persone che condividono valori positivi e autentici"
    },
    {
      icon: Sparkles,
      title: "Sistema Karma",
      description: "Guadagna energia positiva attraverso interazioni costruttive e gentili"
    },
    {
      icon: Globe,
      title: "Impatto Globale",
      description: "Mappa interattiva delle buone notizie da tutto il mondo"
    },
    {
      icon: Award,
      title: "Sfide Settimanali",
      description: "Partecipa a sfide che promuovono atti di gentilezza e positività"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-12 ml-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/547a577d-bf75-4ae0-9cc4-a9303fce5ddc.png" 
              alt="Dopamine Logo" 
              className="h-20 w-20 object-contain animate-bounce-gentle"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-dopamine-blue via-dopamine-purple to-dopamine-pink bg-clip-text text-transparent">
            Benvenuto in Dopamine
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Il primo social network dedicato esclusivamente alla diffusione di <strong className="text-dopamine-green">positività autentica</strong>. 
            Un luogo dove respirare aria buona, lontano dalla negatività dei social tradizionali.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            La Nostra Missione
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Dopamine nasce dalla necessità di creare uno spazio digitale dove la tecnologia è al servizio del benessere mentale. 
                Crediamo che l'informazione positiva possa davvero cambiare il mondo, una persona alla volta.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Ogni giorno milioni di persone si connettono per trovare ispirazione, condividere momenti di gioia e 
                costruire una rete globale di positività autentica.
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">I nostri valori</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✨ Autenticità nelle notizie</li>
                <li>🤝 Comunità rispettosa</li>
                <li>🌱 Crescita personale</li>
                <li>🌍 Impatto sociale positivo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Caratteristiche Uniche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="text-dopamine-blue mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16 bg-gradient-to-r from-dopamine-blue to-dopamine-green p-8 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Impatto Globale</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Utenti Attivi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-lg opacity-90">Notizie Positive</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Atti di Gentilezza</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">195</div>
              <div className="text-lg opacity-90">Paesi Raggiunti</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Unisciti alla Rivoluzione della Positività
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Inizia oggi il tuo viaggio verso un mondo più positivo. 
            Ogni piccolo gesto conta, ogni storia condivisa fa la differenza.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-dopamine-blue to-dopamine-green hover:scale-105 transition-transform px-8 py-3 text-lg">
              Registrati Ora
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
              Scopri di Più
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
