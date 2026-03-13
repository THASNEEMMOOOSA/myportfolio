import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, Award, Calendar, MapPin, TrendingUp, 
  Code, BarChart3, Smartphone, Users, Trophy, GraduationCap, Cloud, Shield
} from 'lucide-react';

const experiences = [
  { key: 'senior', icon: BarChart3, iconColor: "text-blue-400", bgColor: "bg-blue-500/20", award: false },
  { key: 'trainer', icon: GraduationCap, iconColor: "text-green-400", bgColor: "bg-green-500/20", award: false },
  { key: 'developer', icon: Code, iconColor: "text-purple-400", bgColor: "bg-purple-500/20", award: true },
  { key: 'freelance', icon: Smartphone, iconColor: "text-orange-400", bgColor: "bg-orange-500/20", award: false },
  { key: 'intern', icon: Briefcase, iconColor: "text-yellow-400", bgColor: "bg-yellow-500/20", award: false }
];

const achievementsList = [
  { key: 0, icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
  { key: 1, icon: Award, color: "text-gray-400", bgColor: "bg-gray-500/20" },
  { key: 2, icon: Cloud, color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { key: 3, icon: Shield, color: "text-green-400", bgColor: "bg-green-500/20" }
];

export default function Experience() {
  const { t } = useTranslation(['experience', 'common']);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          <span className="gradient-text">{t('experience:title')}</span> {t('experience:subtitle')}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('experience:description')}
        </p>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Briefcase className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">5</div>
          <div className="text-sm text-gray-400">{t('experience:stats.roles')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">3+</div>
          <div className="text-sm text-gray-400">{t('experience:stats.years')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">150+</div>
          <div className="text-sm text-gray-400">{t('experience:stats.students')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">4</div>
          <div className="text-sm text-gray-400">{t('experience:stats.achievements')}</div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const expData = t(`experience:experiences.${exp.key}`, { returnObjects: true });
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-6 transform -translate-x-1/2">
                  <div className={`w-12 h-12 ${exp.bgColor} rounded-xl flex items-center justify-center border-2 border-gray-700 z-10`}>
                    <Icon className={`w-6 h-6 ${exp.iconColor}`} />
                  </div>
                </div>
                
                <div className="ml-16">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white">{expData.role}</h2>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-300">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} className="text-gray-400" /> 
                            {expData.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-gray-400" /> 
                            {expData.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-gray-400" /> 
                            {expData.period}
                          </span>
                        </div>
                      </div>
                      
                      {exp.award && (
                        <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/20">
                          <Trophy size={16} />
                          <span className="text-sm font-medium">{t('experience:award')}</span>
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {expData.achievements && expData.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <TrendingUp size={16} className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t('experience:certifications.title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementsList.map((item, index) => {
            const Icon = item.icon;
            const certData = t(`experience:certifications.items.${index}`, { returnObjects: true });
            
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-lg text-white mb-1">{certData.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{certData.desc}</p>
                <p className="text-xs text-blue-400 font-medium">{certData.year}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-gray-700"
      >
        <h3 className="text-xl font-bold mb-3">{t('experience:download.title')}</h3>
        <p className="text-gray-300 mb-4">{t('experience:download.description')}</p>
        <a
          href="/cv/Thasneem_Vellarampara_CV.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Briefcase size={18} />
          {t('experience:download.button')}
        </a>
      </motion.div>
    </div>
  );
}