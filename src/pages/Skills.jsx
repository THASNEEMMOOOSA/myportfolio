import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Code, Database, BarChart3, Smartphone, Cloud, Shield, 
  Globe, Server, LineChart, Box, Lock, Cpu
} from 'lucide-react';

const skillCategories = [
  { key: 'languages', icon: Code, color: "blue" },
  { key: 'backend', icon: Server, color: "green" },
  { key: 'frontend', icon: Globe, color: "purple" },
  { key: 'mobile', icon: Smartphone, color: "orange" },
  { key: 'databases', icon: Database, color: "pink" },
  { key: 'data', icon: BarChart3, color: "yellow" },
  { key: 'cloud', icon: Cloud, color: "cyan" },
  { key: 'payment', icon: Box, color: "red" },
  { key: 'ai', icon: Cpu, color: "indigo" },
  { key: 'cybersecurity', icon: Lock, color: "teal" }
];

const proficiencyLevels = [
  { key: 'expert', color: "blue" },
  { key: 'advanced', color: "green" },
  { key: 'intermediate', color: "yellow" },
  { key: 'learning', color: "orange" }
];

const languages = [
  { key: 'malayalam', flag: 'in', level: 'C2', type: 'motherTongue' },
  { key: 'english', flag: 'gb', level: 'C2', type: 'fluent' },
  { key: 'hindi', flag: 'in', level: 'C2', type: 'fluent' },
  { key: 'arabic', flag: 'sa', level: 'B2', type: 'intermediate' },
  { key: 'german', flag: 'de', level: 'B2', type: 'intermediate' },
  { key: 'spanish', flag: 'es', level: 'A2', type: 'basic' },
  { key: 'turkish', flag: 'tr', level: 'A2', type: 'basic' },
  { key: 'russian', flag: 'ru', level: 'A2', type: 'basic' }
];

export default function Skills() {
  const { t } = useTranslation(['skills', 'common']);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          <span className="gradient-text">{t('skills:title')}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('skills:subtitle')}
        </p>
      </motion.div>

      {/* Proficiency Bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {proficiencyLevels.map((level, idx) => (
          <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
            <h3 className={`font-semibold text-lg mb-2 text-${level.color}-400`}>{t(`skills:proficiency.${level.key}`)}</h3>
            <div className="space-y-1">
              {t(`skills:proficiencyLevels.${level.key}`, { returnObjects: true }).map((skill, i) => (
                <div key={i} className="text-sm text-gray-300">• {skill}</div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const skills = t(`skills:skills.${category.key}`, { returnObjects: true });
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`text-${category.color}-400`} size={24} />
                <h2 className="text-xl font-semibold">{t(`skills:categories.${category.key}`)}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills && skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Competencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/30"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{t('skills:coreCompetencies')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Full-Stack-Entwicklung",
            "Datenanalyse",
            "Mobile Entwicklung",
            "Cloud-Architektur",
            "Teamführung",
            "Technische Ausbildung",
            "Problemlösung",
            "Agile Methoden"
          ].map((strength, index) => (
            <div key={index} className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-sm font-medium text-blue-400">{strength}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Language Proficiency with Flags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="text-blue-400" /> {t('skills:languageProficiency')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Native & Fluent */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t('skills:nativeFluent')}</h3>
            <div className="space-y-4">
              {languages.filter(l => l.type === 'motherTongue' || l.type === 'fluent').map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className={`fi fi-${lang.flag} fis text-2xl`}></span>
                    <span className="font-medium text-white">{t(`skills:languages.${lang.key}`)}</span>
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                      {lang.level}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">
                      {lang.type === 'motherTongue' ? t('skills:motherTongue') : t('skills:fluent')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Intermediate & Basic */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">{t('skills:intermediateBasic')}</h3>
            <div className="space-y-4">
              {languages.filter(l => l.type === 'intermediate' || l.type === 'basic').map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className={`fi fi-${lang.flag} fis text-2xl`}></span>
                    <span className="font-medium text-white">{t(`skills:languages.${lang.key}`)}</span>
                  </div>
                  <div>
                    <span className={`px-3 py-1 ${
                      lang.level === 'B2' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
                    } rounded-full text-sm font-bold`}>
                      {lang.level}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">
                      {lang.type === 'intermediate' ? t('skills:intermediate') : t('skills:basic')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEFR Legend */}
        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">{t('skills:cefrLevels')}</h4>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded"></span> C2 - {t('skills:cefr.c2')}</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded"></span> C1 - {t('skills:cefr.c1')}</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded"></span> B2 - {t('skills:cefr.b2')}</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded"></span> B1 - {t('skills:cefr.b1')}</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded"></span> A2 - {t('skills:cefr.a2')}</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded"></span> A1 - {t('skills:cefr.a1')}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}