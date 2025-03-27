import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors"
    >
      <Globe className="h-5 w-5 text-secondary" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? '中文' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
