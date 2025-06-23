
import React from 'react';
import { Search, Bell, User, Settings, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { isDark, toggleDark, customColors, updateCustomColor, resetColors } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/547a577d-bf75-4ae0-9cc4-a9303fce5ddc.png" 
              alt="Dopamine Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-dopamine-blue to-dopamine-green bg-clip-text text-transparent">
              {t('dopamine')}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder={t('searchPlaceholder')}
                className="pl-10 bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-dopamine-blue/50"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 z-50">
                <DropdownMenuItem onClick={() => setLanguage('it')} className={language === 'it' ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                  🇮🇹 Italiano
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Controls */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 p-4 w-80 z-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t('darkMode')}</span>
                    <Button variant="outline" size="sm" onClick={toggleDark}>
                      {isDark ? '🌙' : '☀️'}
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">{t('customTheme')}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs">Primary</label>
                        <input
                          type="color"
                          value={customColors.primary}
                          onChange={(e) => updateCustomColor('primary', e.target.value)}
                          className="w-full h-8 rounded border-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs">Secondary</label>
                        <input
                          type="color"
                          value={customColors.secondary}
                          onChange={(e) => updateCustomColor('secondary', e.target.value)}
                          className="w-full h-8 rounded border-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs">Accent</label>
                        <input
                          type="color"
                          value={customColors.accent}
                          onChange={(e) => updateCustomColor('accent', e.target.value)}
                          className="w-full h-8 rounded border-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs">Background</label>
                        <input
                          type="color"
                          value={customColors.background}
                          onChange={(e) => updateCustomColor('background', e.target.value)}
                          className="w-full h-8 rounded border-none"
                        />
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetColors} className="w-full">
                      Reset Colors
                    </Button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
