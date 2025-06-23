
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Feed />
          <Sidebar />
        </div>
      </main>
      
      {/* Floating inspiration bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="dopamine-card p-4 max-w-sm animate-pulse-glow">
          <p className="text-sm text-gray-700 font-medium">
            💡 Today's Good Deed Idea: Send a thank you message to someone who made your day better!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
