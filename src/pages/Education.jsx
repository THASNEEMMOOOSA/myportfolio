import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  GraduationCap, Calendar, MapPin, Award, BookOpen,
  University, School, BookMarked, CheckCircle, Star
} from 'lucide-react';

export default function Education() {
  const { t } = useTranslation('education');

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          <span className="gradient-text">{t('education:title')}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('education:subtitle')}
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
          <GraduationCap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">2</div>
          <div className="text-sm text-gray-400">{t('education:stats.degrees')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">4+</div>
          <div className="text-sm text-gray-400">{t('education:stats.certifications')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <BookOpen className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">15+</div>
          <div className="text-sm text-gray-400">{t('education:stats.subjects')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">8.2</div>
          <div className="text-sm text-gray-400">{t('education:stats.cgpa')}</div>
        </div>
      </motion.div>

      {/* Education Cards */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="gradient-text">{t('education:academicJourney')}</span>
        </h2>
        
        {/* B.Tech Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <University className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-white">{t('education:btech.degree')}</h3>
                <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {t('education:btech.score')}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
                <span className="flex items-center gap-1">
                  <University size={14} className="text-gray-400" />
                  {t('education:btech.institution')}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" />
                  {t('education:btech.location')}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-gray-400" />
                  {t('education:btech.period')}
                </span>
              </div>
              <ul className="space-y-2">
                {t('education:btech.achievements', { returnObjects: true }).map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Higher Secondary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <School className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-white">{t('education:higherSecondary.degree')}</h3>
                <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {t('education:higherSecondary.score')}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
                <span className="flex items-center gap-1">
                  <School size={14} className="text-gray-400" />
                  {t('education:higherSecondary.institution')}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" />
                  {t('education:higherSecondary.location')}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-gray-400" />
                  {t('education:higherSecondary.period')}
                </span>
              </div>
              <ul className="space-y-2">
                {t('education:higherSecondary.achievements', { returnObjects: true }).map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Curriculum */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="gradient-text">{t('education:coreCurriculum')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">{t('education:curriculum.core')}</h3>
            <div className="flex flex-wrap gap-2">
              {t('education:subjects.core', { returnObjects: true }).map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-green-400 mb-3">{t('education:curriculum.math')}</h3>
            <div className="flex flex-wrap gap-2">
              {t('education:subjects.math', { returnObjects: true }).map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">{t('education:curriculum.development')}</h3>
            <div className="flex flex-wrap gap-2">
              {t('education:subjects.development', { returnObjects: true }).map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">{t('education:curriculum.data')}</h3>
            <div className="flex flex-wrap gap-2">
              {t('education:subjects.data', { returnObjects: true }).map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="gradient-text">{t('education:professionalCerts')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t('education:certifications', { returnObjects: true }).map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Continuous Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-gray-700"
      >
        <BookMarked className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{t('education:continuousLearner')}</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t('education:learnerDesc')}
        </p>
      </motion.div>
    </div>
  );
}