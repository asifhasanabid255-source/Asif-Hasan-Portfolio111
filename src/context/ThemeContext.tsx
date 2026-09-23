import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'night' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: 'night' | 'light';
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'theme-preference';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'night' || stored === 'light') {
        return stored;
      }
      if (stored === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'light';
      }
    }
    return 'light';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'night' | 'light'>(() => {
    return theme;
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'night';

    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      setResolvedTheme('night');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      setResolvedTheme('light');
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // ignore storage errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'night' ? 'light' : 'night');
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
