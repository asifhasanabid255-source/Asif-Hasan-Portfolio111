import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

interface ThemeSwitcherProps {
  compact?: boolean;
}

export function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <div 
      className="inline-flex items-center gap-0.5 bg-white-surface rounded-full p-0.5 sm:p-1 border border-border shadow-xs"
      role="group"
      aria-label="Theme Mode Switcher"
    >
      {/* Light Mode (Sun) */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-accent ${
          theme === 'light'
            ? 'text-amber-500'
            : 'text-secondary-text hover:text-primary-text hover:bg-black/5 dark:hover:bg-white/5'
        }`}
        title={language === 'bn' ? 'লাইট মোড' : 'Light Mode'}
        aria-label={language === 'bn' ? 'লাইট মোড' : 'Light Mode'}
      >
        {theme === 'light' && (
          <motion.div
            layoutId={compact ? "active-theme-pill-compact" : "active-theme-pill"}
            className="absolute inset-0 bg-primary-bg rounded-full shadow-xs border border-border/70"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <Sun size={15} strokeWidth={2.3} className="relative z-10" />
      </button>

      {/* Night Mode (Moon) */}
      <button
        type="button"
        onClick={() => setTheme('night')}
        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-accent ${
          theme === 'night'
            ? 'text-blue-400'
            : 'text-secondary-text hover:text-primary-text hover:bg-black/5 dark:hover:bg-white/5'
        }`}
        title={language === 'bn' ? 'নাইট মোড' : 'Night Mode'}
        aria-label={language === 'bn' ? 'নাইট মোড' : 'Night Mode'}
      >
        {theme === 'night' && (
          <motion.div
            layoutId={compact ? "active-theme-pill-compact" : "active-theme-pill"}
            className="absolute inset-0 bg-primary-bg rounded-full shadow-xs border border-border/70"
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          />
        )}
        <Moon size={15} strokeWidth={2.3} className="relative z-10" />
      </button>
    </div>
  );
}
