
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
  customColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  updateCustomColor: (key: string, color: string) => void;
  resetColors: () => void;
}

const defaultColors = {
  primary: '#3B82F6',
  secondary: '#10B981',
  accent: '#F59E0B',
  background: '#F8FAFC'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [customColors, setCustomColors] = useState(defaultColors);

  useEffect(() => {
    const savedTheme = localStorage.getItem('dopamine-theme');
    const savedColors = localStorage.getItem('dopamine-colors');
    
    if (savedTheme) setIsDark(savedTheme === 'dark');
    if (savedColors) setCustomColors(JSON.parse(savedColors));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('dopamine-theme', isDark ? 'dark' : 'light');
    
    // Apply custom colors as CSS variables
    const root = document.documentElement;
    root.style.setProperty('--color-primary', customColors.primary);
    root.style.setProperty('--color-secondary', customColors.secondary);
    root.style.setProperty('--color-accent', customColors.accent);
    root.style.setProperty('--color-bg-custom', customColors.background);
  }, [isDark, customColors]);

  const toggleDark = () => setIsDark(!isDark);

  const updateCustomColor = (key: string, color: string) => {
    const newColors = { ...customColors, [key]: color };
    setCustomColors(newColors);
    localStorage.setItem('dopamine-colors', JSON.stringify(newColors));
  };

  const resetColors = () => {
    setCustomColors(defaultColors);
    localStorage.removeItem('dopamine-colors');
  };

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleDark,
      customColors,
      updateCustomColor,
      resetColors
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
