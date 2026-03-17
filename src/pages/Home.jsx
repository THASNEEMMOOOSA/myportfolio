import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Briefcase, Code, Users, TrendingUp, Zap, Globe, Download } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const skillsData = [
  { skill: 'Python', value: 95 },
  { skill: 'React', value: 90 },
  { skill: 'Flutter', value: 85 },
  { skill: 'Data Analytics', value: 92 },
  { skill: 'Cloud', value: 80 },
  { skill: 'Databases', value: 88 },
];

const timelineData = [
  { year: '2021', value: 60 },
  { year: '2022', value: 75 },
  { year: '2023', value: 85 },
  { year: '2024', value: 92 },
  { year: '2025', value: 98 },
  { year: '2026', value: 100 },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">


      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold">
          <span className="gradient-text">{t('home:hero.firstName')}</span>
          <br />
          <span className="text-white">{t('home:hero.lastName')}</span>
        </h1>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          {t('home:hero.title')}
        </p>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          <span className="text-blue-400">{t('home:hero.description1')}</span> 
          <span className="text-white"> & </span>
          <span className="text-purple-400">{t('home:hero.description2')}</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/projects"
            className="group relative px-8 py-3 bg-blue-600 rounded-lg font-semibold overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('buttons.viewWork')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
          >
            {t('buttons.letsTalk')}
          </Link>

          <a
            href="/cv/Thasneem_Vellarampara_CV.pdf"
            download
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            {t('buttons.downloadCV')}
          </a>
        </div>
      </motion.div>
      {/* About Me Section - Add after Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-4 gradient-text">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Results-driven Software Developer with 4 years of experience in backend development across Python and Java ecosystems. 
          Proficient in Django, FastAPI, and Spring Boot, with strong expertise in RESTful API design, microservices architecture, 
          and database optimization. Experienced in cloud deployment (AWS/GCP), containerization (Docker/Kubernetes), 
          and full-stack development using React.js and Flutter. Passionate about building scalable, secure, 
          and high-performance applications.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow">
        <Briefcase className="w-8 h-8 text-blue-400 mb-3" />
        <div className="text-3xl font-bold text-white">4+</div>  {/* Changed from 3+ to 4+ */}
        <div className="text-sm text-gray-400">{t('home:stats.experience')}</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow">
        <Code className="w-8 h-8 text-green-400 mb-3" />
        <div className="text-3xl font-bold text-white">30+</div>  {/* Changed from 15+ to 30+ */}
        <div className="text-sm text-gray-400">{t('home:stats.projects')}</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow">
        <Users className="w-8 h-8 text-purple-400 mb-3" />
        <div className="text-3xl font-bold text-white">50+</div>  {/* Changed from 12+ to 50+ (students mentored) */}
        <div className="text-sm text-gray-400">{t('home:stats.clients')}</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow">
        <Zap className="w-8 h-8 text-orange-400 mb-3" />
        <div className="text-3xl font-bold text-white">30+</div>  {/* Changed from 20+ to 30+ */}
        <div className="text-sm text-gray-400">{t('home:stats.technologies')}</div>
      </div>
    </motion.div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="text-blue-400" /> {t('home:charts.technicalProficiency')}
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={skillsData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
              <Radar dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.5} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-400" /> {t('home:charts.careerGrowth')}
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
              <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Award Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-8 rounded-xl border border-yellow-500/30"
      >
        <div className="flex items-center gap-6">
          <div className="p-4 bg-yellow-500/20 rounded-full">
            <Award className="w-12 h-12 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">{t('award.title')}</h3>
            <p className="text-gray-300 text-lg">{t('award.issuer')} • {t('award.year')}</p>
            <p className="text-gray-400 mt-2">{t('award.description')}</p>
          </div>
        </div>
      </motion.div>

      {/* Featured Project */}
      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800 p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-4">{t('home:featuredProject.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 mb-4">{t('home:featuredProject.description')}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {/* FIX THIS: Update to match URL Shortener tech stack */}
              {['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                <div className="text-xl font-bold text-blue-400">1M+</div>
                <div className="text-xs text-gray-400">{t('home:featuredProject.metrics.uptime')}</div>
              </div>
              <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                <div className="text-xl font-bold text-green-400">&lt;50ms</div>
                <div className="text-xs text-gray-400">Latency</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
              {t('buttons.liveDemo')} <Globe size={18} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center p-8 bg-gray-800/30 rounded-xl border border-gray-700"
      >
        <h3 className="text-2xl font-bold mb-3">{t('home:download.title')}</h3>
        <p className="text-gray-300 mb-6">{t('home:download.description')}</p>
          <a
          href="/cv/Thasneem_Vellarampara_CV.pdf"  // Your actual filename
          download="Thasneem_Vellarampara_CV.pdf"
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          <Download size={18} />
          {t('buttons.downloadCV')}
        </a>
      </motion.div>
    </div>
  );
}