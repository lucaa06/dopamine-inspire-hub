
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import VerticalSidebar from '@/components/VerticalSidebar';
import DailyGoodNews from '@/components/DailyGoodNews';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      <VerticalSidebar />
      
      <main className="container mx-auto px-4 py-8 ml-16">
        {/* Welcome Message */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            {t('welcomeMessage')}
          </h2>
        </div>

        {/* Daily Good News */}
        <DailyGoodNews />
        
        <div className="flex gap-8">
          <Feed />
          <Sidebar />
        </div>
      </main>
      
      {/* Floating inspiration bubble */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-4 max-w-sm animate-pulse-glow">
          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            💡 Today's Good Deed Idea: Send a thank you message to someone who made your day better!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
