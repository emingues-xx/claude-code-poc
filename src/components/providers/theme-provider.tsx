'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme;
      const validTheme = storedTheme && ['light', 'dark', 'system'].includes(storedTheme) 
        ? storedTheme 
        : 'light';
      setTheme(validTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light';
        setResolvedTheme(systemPreference);
      } else {
        setResolvedTheme(theme as 'light' | 'dark');
      }
    };

    updateResolvedTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateResolvedTheme);
      return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    console.log('🎯 Applying resolvedTheme to DOM:', resolvedTheme);
    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      console.log('🌙 Applied dark theme to DOM');
    } else {
      root.removeAttribute('data-theme');
      console.log('☀️ Applied light theme to DOM');
    }
  }, [resolvedTheme, mounted]);

  const setThemeAndPersist = (newTheme: Theme) => {
    console.log('🏗️ ThemeProvider: setThemeAndPersist called with:', newTheme);
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      console.log('💾 Saved to localStorage:', newTheme);
      
      // Force immediate DOM update
      const root = document.documentElement;
      if (newTheme === 'light') {
        root.removeAttribute('data-theme');
        console.log('🌞 Forced light theme removal');
      } else if (newTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        console.log('🌙 Forced dark theme application');
      }
    }
  };

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        resolvedTheme,
        setTheme: setThemeAndPersist,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}