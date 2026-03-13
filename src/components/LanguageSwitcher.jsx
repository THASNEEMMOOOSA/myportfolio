import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
        <Globe size={18} className="text-gray-300" />
        <span className="text-white font-medium uppercase">
          {currentLang === 'en' ? 'EN' : 'DE'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <button
          onClick={() => changeLanguage('en')}
          className={`w-full text-left px-4 py-2 hover:bg-gray-700 first:rounded-t-lg ${
            currentLang === 'en' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => changeLanguage('de')}
          className={`w-full text-left px-4 py-2 hover:bg-gray-700 last:rounded-b-lg ${
            currentLang === 'de' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
          }`}
        >
          🇩🇪 Deutsch
        </button>
      </div>
    </div>
  );
}