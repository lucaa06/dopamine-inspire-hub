
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand - Clickable */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/547a577d-bf75-4ae0-9cc4-a9303fce5ddc.png" 
              alt="Dopamine Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-black dark:text-white uppercase">
              DOPAMINE
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder={t('searchPlaceholder')}
                className="pl-10 bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
