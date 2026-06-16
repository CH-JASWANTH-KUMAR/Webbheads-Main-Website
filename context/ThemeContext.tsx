"use client";

/**
 * ==========================================================================
 * THEME CONTEXT - Dark/Light Mode Provider
 * ==========================================================================
 * Provides theme state and toggle functionality across the app.
 * Uses localStorage for persistence and respects system preference.
 * 
 * Color Palette:
 * - Light Mode: White bg, Teal (#003942) text, Lime (#f6ff82) accents
 * - Dark Mode: Deep teal (#001a1f) bg, White/Lime text, Teal accents
 * ==========================================================================
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // On mount, check localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('webbheads-theme-pref') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      
      localStorage.setItem('webbheads-theme-pref', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
