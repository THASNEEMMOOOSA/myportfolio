import { motion } from 'framer-motion';
import { 
  Code, Database, BarChart3, Smartphone, Cloud, Shield, 
  Globe, Server, LineChart, Braces, Box, Lock
} from 'lucide-react';


const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code,
    color: "blue",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Dart", "Java","C", "C++","C#", "R", "PHP"]
  },
  {
    name: "Backend Development",
    icon: Server,
    color: "green",
    skills: ["Django", "Flask", "FastAPI", "REST APIs", "GraphQL", "Node.js", "Laravel", ".NET"]
  },
  {
    name: "Frontend Development",
    icon: Globe,
    color: "purple",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind", "Bootstrap", "Vue.js (Basic)"]
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "orange",
    skills: ["Flutter", "Dart", "Firebase", "SQLite", "GetX", "Riverpod", "Android", "iOS"]
  },
  {
    name: "Databases",
    icon: Database,
    color: "pink",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Firebase Firestore"]
  },
  {
    name: "Data Analytics",
    icon: BarChart3,
    color: "yellow",
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "ETL", "Data Modeling", "Excel", "R"]
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "cyan",
    skills: ["AWS", "Google Cloud", "Azure", "Docker", "Git", "CI/CD", "Vercel", "Netlify"]
  },
  {
    name: "Payment & E-commerce",
    icon: Box,
    color: "red",
    skills: ["Stripe", "Razorpay", "PayPal", "Shopify", "Payment Gateways"]
  },
  {
    name: "AI & Machine Learning",
    icon: LineChart,
    color: "indigo",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "LLMs", "NLP", "Computer Vision"]
  },
  {
    name: "Cybersecurity",
    icon: Lock,
    color: "teal",
    skills: ["Kali Linux", "Penetration Testing", "Secure Auth", "JWT", "OAuth"]
  }
];

const proficiencyLevels = [
  { level: "Expert", skills: ["Python", "Django", "React", "SQL", "Power BI"] },
  { level: "Advanced", skills: ["Flutter", "AWS", "PostgreSQL", "Tableau"] },
  { level: "Intermediate", skills: ["TensorFlow", "Docker", "MongoDB"] },
  { level: "Learning", skills: ["Web3", "Solidity", "Kubernetes"] }
];

export default function Skills() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          Technical <span className="gradient-text">Arsenal</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          20+ technologies across full-stack development, data analytics, and mobile development
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
            <h3 className="font-semibold text-lg mb-2 text-blue-400">{level.level}</h3>
            <div className="space-y-1">
              {level.skills.map((skill, i) => (
                <div key={i} className="text-sm text-gray-300">• {skill}</div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className={`text-${category.color}-400`} size={24} />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Language Proficiency Section - Add this after Technical Arsenal */}
<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="text-blue-400" /> Language Proficiency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Malayalam - Native */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="fi fi-in fis text-3xl rounded"></span>
              <div>
                <h3 className="text-xl font-bold text-white">Malayalam</h3>
                <p className="text-xs text-yellow-400">Mother Tongue</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-400">Listening:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Reading:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Writing:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Speaking:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
            </div>
          </div>

          {/* English */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="fi fi-gb fis text-3xl rounded"></span>
              <div>
                <h3 className="text-xl font-bold text-white">English</h3>
                <p className="text-xs text-blue-400">Fluent</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-400">Listening:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Reading:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Writing:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Speaking:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
            </div>
          </div>

          {/* Hindi */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="fi fi-in fis text-3xl rounded"></span>
              <div>
                <h3 className="text-xl font-bold text-white">Hindi</h3>
                <p className="text-xs text-blue-400">Fluent</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-400">Listening:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Reading:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Writing:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
              <div><span className="text-gray-400">Speaking:</span> <span className="text-green-400 font-bold ml-1">C2</span></div>
            </div>
          </div>

          {/* Arabic */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="fi fi-sa fis text-3xl rounded"></span>
              <div>
                <h3 className="text-xl font-bold text-white">Arabic</h3>
                <p className="text-xs text-yellow-400">Intermediate</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-400">Listening:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Reading:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Writing:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Speaking:</span> <span className="text-blue-400 font-bold ml-1">B1</span></div>
            </div>
          </div>

          {/* German */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="fi fi-de fis text-3xl rounded"></span>
              <div>
                <h3 className="text-xl font-bold text-white">Deutsch</h3>
                <p className="text-xs text-yellow-400">Intermediate</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-400">Listening:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Reading:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Writing:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
              <div><span className="text-gray-400">Speaking:</span> <span className="text-blue-400 font-bold ml-1">B2</span></div>
            </div>
          </div>

          {/* Basic Languages Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-gray-600 transition-all md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Basic Languages</h3>
            <div className="space-y-4">
              {/* Spanish */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="fi fi-es fis text-2xl"></span>
                  <span className="font-medium text-white">Spanish</span>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">L:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">R:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">W:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">S:</span> <span className="text-yellow-400">A1</span></span>
                </div>
              </div>
              
              {/* Turkish */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="fi fi-tr fis text-2xl"></span>
                  <span className="font-medium text-white">Turkish</span>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">L:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">R:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">W:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">S:</span> <span className="text-yellow-400">A1</span></span>
                </div>
              </div>
              
              {/* Russian */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="fi fi-ru fis text-2xl"></span>
                  <span className="font-medium text-white">Russian</span>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">L:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">R:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">W:</span> <span className="text-yellow-400">A2</span></span>
                  <span className="px-2 py-1 bg-gray-700 rounded"><span className="text-gray-400">S:</span> <span className="text-yellow-400">A1</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CEFR Legend */}
        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">CEFR Levels</h4>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded"></span> C2 - Mastery</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded"></span> C1 - Advanced</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded"></span> B2 - Upper Intermediate</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded"></span> B1 - Intermediate</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded"></span> A2 - Elementary</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded"></span> A1 - Beginner</span>
          </div>
        </div>
      </motion.div>

      {/* Key Strengths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/30"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Core Competencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Full-Stack Development",
            "Data Analytics",
            "Mobile Development",
            "Cloud Architecture",
            "Team Leadership",
            "Technical Training",
            "Problem Solving",
            "Agile Methodologies"
          ].map((strength, index) => (
            <div key={index} className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-sm font-medium text-blue-400">{strength}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}