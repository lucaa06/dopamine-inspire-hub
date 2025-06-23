
import React, { useState } from 'react';
import { MessageCircle, Bell, User, Plus, Settings, Palette, Moon, Sun, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const VerticalSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [showLanguagePanel, setShowLanguagePanel] = useState(false);
  const { isDark, toggleDark, customColors, updateCustomColor, resetColors } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { icon: Plus, label: t('shareGoodNews'), path: '/create', highlight: true },
    { icon: MessageCircle, label: t('messages'), path: '/messages', badge: 3 },
    { icon: Bell, label: t('notifications'), path: '/notifications', badge: 7 },
    { icon: User, label: t('profile'), path: '/profile' },
  ];

  const languages = [
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
  ];

  return (
    <>
      <div className={`fixed right-0 top-20 h-[calc(100vh-5rem)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-l border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}>
        
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className="absolute -left-8 top-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-l-lg rounded-r-none"
        >
          {isCollapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </Button>

        <div className="p-4 flex flex-col h-full">
          {/* Main Menu Items */}
          <div className="space-y-2 flex-1">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start relative transition-all duration-200 hover:scale-105 ${
                    item.highlight ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600' : ''
                  } ${isCollapsed ? 'px-2' : 'px-4'}`}
                >
                  <item.icon size={20} />
                  {!isCollapsed && (
                    <>
                      <span className="ml-3">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px]">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {isCollapsed && item.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Settings Section */}
          <div className="border-t pt-4 space-y-2">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              onClick={toggleDark}
              className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              {!isCollapsed && <span className="ml-3">{t('darkMode')}</span>}
            </Button>

            {/* Theme Customization */}
            <Button
              variant="ghost"
              onClick={() => setShowThemePanel(!showThemePanel)}
              className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
            >
              <Palette size={20} />
              {!isCollapsed && <span className="ml-3">{t('customTheme')}</span>}
            </Button>

            {/* Language Selector */}
            <Button
              variant="ghost"
              onClick={() => setShowLanguagePanel(!showLanguagePanel)}
              className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
            >
              <Globe size={20} />
              {!isCollapsed && <span className="ml-3">{languages.find(l => l.code === language)?.flag}</span>}
            </Button>

            {/* Settings */}
            <Link to="/settings">
              <Button
                variant="ghost"
                className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
              >
                <Settings size={20} />
                {!isCollapsed && <span className="ml-3">{t('settings')}</span>}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Theme Customization Panel */}
      {showThemePanel && !isCollapsed && (
        <div className="fixed right-64 top-32 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 z-50">
          <h3 className="font-semibold mb-4">{t('customTheme')}</h3>
          <div className="space-y-3">
            {Object.entries(customColors).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm capitalize">{key}</label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => updateCustomColor(key, e.target.value)}
                  className="w-12 h-8 border-0 rounded cursor-pointer"
                />
              </div>
            ))}
            <Button onClick={resetColors} variant="outline" className="w-full">
              Reset Colors
            </Button>
          </div>
        </div>
      )}

      {/* Language Panel */}
      {showLanguagePanel && !isCollapsed && (
        <div className="fixed right-64 top-80 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 z-50">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              onClick={() => {
                setLanguage(lang.code);
                setShowLanguagePanel(false);
              }}
              className={`w-full justify-start ${language === lang.code ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default VerticalSidebar;
