import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Code, Users, Star, TrendingUp, Zap, Globe, Download } from 'lucide-react';
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

const stats = [
  { label: 'Years Experience', value: '4+', icon: Briefcase, color: 'blue' },
  { label: 'Projects Completed', value: '15+', icon: Code, color: 'green' },
  { label: 'Happy Clients', value: '12+', icon: Users, color: 'purple' },
  { label: 'Technologies', value: '20+', icon: Zap, color: 'orange' },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold">
          <span className="gradient-text">THASNEEM</span>
          <br />
          <span className="text-white">VELLARAMPARA</span>
        </h1>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          Senior Data Analyst & Full-Stack Developer crafting 
          <span className="text-blue-400"> data-driven solutions </span> 
          and
          <span className="text-purple-400"> scalable applications</span>
        </p>
        
        {/* CTA Buttons - NOW WITH DOWNLOAD CV */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/projects"
            className="group relative px-8 py-3 bg-blue-600 rounded-lg font-semibold overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
          >
            Let's Talk
          </Link>

          {/* DOWNLOAD CV BUTTON - NEW */}
          <a
            href="/cv/THASNEEM_VELLARAMPARA_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow">
            <stat.icon className={`w-8 h-8 text-${stat.color}-400 mb-3`} />
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Skills Radar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="text-blue-400" /> Technical Proficiency
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={skillsData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
              <Radar dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.5} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-400" /> Career Growth
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
        className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-8 rounded-xl border border-yellow-500/30 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative flex items-center gap-6">
          <div className="p-4 bg-yellow-500/20 rounded-full">
            <Award className="w-12 h-12 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">Ultimate Team Player Award</h3>
            <p className="text-gray-300 text-lg">IMAGECON India Pvt Ltd • 2024</p>
            <p className="text-gray-400 mt-2">Recognized for exceptional collaboration, leadership, and commitment to team objectives</p>
          </div>
        </div>
      </motion.div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
        <div className="relative bg-gray-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Featured Project: E-Commerce Platform</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4">
                Full-stack e-commerce platform with payment integration, product management, and analytics dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Django', 'React', 'PostgreSQL', 'Stripe', 'Redis'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-xl font-bold text-blue-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-xl font-bold text-green-400">5+</div>
                  <div className="text-xs text-gray-400">Gateways</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/projects" className="group/btn relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md group-hover/btn:blur-xl transition-all"></div>
                <div className="relative bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  View Live Demo <Globe size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ADDITIONAL DOWNLOAD CV SECTION (Optional - Bottom of page) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center p-8 bg-gray-800/30 rounded-xl border border-gray-700"
      >
        <h3 className="text-2xl font-bold mb-3">Want to know more?</h3>
        <p className="text-gray-300 mb-6">
          Download my detailed resume to see my complete work history, certifications, and technical skills.
        </p>
        <a
          href="/cv/THASNEEM_VELLARAMPARA_CV.pdf"
          download
          
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <Download size={18} />
          Download CV (PDF)
        </a>
      </motion.div>
    </div>
  );
}