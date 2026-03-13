import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Calendar, TrendingUp, ShoppingCart, Activity, CreditCard, BarChart3, Smartphone, Users, Globe, Layers, Award } from 'lucide-react';

const projects = [
  {
    key: 'ecommerce',
    icon: ShoppingCart,
    iconColor: "text-blue-400",
    category: "fullstack",
    featured: true,
    link: "http://thasneemmoosa5000.pythonanywhere.com/"
  },
  {
    key: 'iot',
    icon: Activity,
    iconColor: "text-green-400",
    category: "data"
  },
  {
    key: 'pos',
    icon: CreditCard,
    iconColor: "text-purple-400",
    category: "enterprise"
  },
  {
    key: 'analytics',
    icon: BarChart3,
    iconColor: "text-yellow-400",
    category: "analytics"
  },
  {
    key: 'mobile',
    icon: Smartphone,
    iconColor: "text-orange-400",
    category: "mobile"
  },
  {
    key: 'employee',
    icon: Users,
    iconColor: "text-indigo-400",
    category: "fullstack",
    link: "http://thasneemmoosa5000.pythonanywhere.com/"
  },
  {
    key: 'realestate',
    icon: Globe,
    iconColor: "text-teal-400",
    category: "web"
  },
  {
    key: 'task',
    icon: Layers,
    iconColor: "text-pink-400",
    category: "mobile"
  }
];

export default function Projects() {
  const { t } = useTranslation(['projects', 'common']);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          <span className="gradient-text">{t('title')}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('subtitle')}
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
          <div className="text-2xl font-bold text-blue-400">{projects.length}</div>
          <div className="text-sm text-gray-400">{t('stats.total')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-400">8</div>
          <div className="text-sm text-gray-400">{t('stats.technologies')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <div className="text-2xl font-bold text-purple-400">5</div>
          <div className="text-sm text-gray-400">{t('stats.categories')}</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <div className="text-2xl font-bold text-yellow-400">3+</div>
          <div className="text-sm text-gray-400">{t('stats.years')}</div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const projectData = t(`projects.${project.key}`, { returnObjects: true });
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all overflow-hidden">
                <div className="p-8">
                  {/* Top row with icon and title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gray-700/70 rounded-xl ${project.iconColor} flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-2xl font-bold text-white">{projectData.title}</h2>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {t(`categories.${project.category}`)}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                            {t('featured')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> 2025
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">{projectData.longDesc}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {projectData.tech && projectData.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 bg-gray-700/70 rounded-lg text-sm text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {projectData.metrics && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {projectData.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/50">
                          <div className="text-xs text-gray-400">{metric}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-6 pt-4 border-t border-gray-700">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <ExternalLink size={16} />
                        <span>{t('common:buttons.liveDemo')}</span>
                        <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-gray-700 mt-8"
      >
        <h3 className="text-2xl font-bold mb-3">{t('cta.title')}</h3>
        <p className="text-gray-300 mb-6">
          {t('cta.description')}
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          {t('cta.button')} <TrendingUp size={18} />
        </a>
      </motion.div>
    </div>
  );
}