import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white-surface rounded-full p-1 border border-border shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-primary-bg text-primary-text'
            : 'text-secondary-text hover:text-primary-text hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('bn')}
        className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
          language === 'bn'
            ? 'bg-primary-bg text-primary-text'
            : 'text-secondary-text hover:text-primary-text hover:bg-gray-50'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
