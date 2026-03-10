import { motion } from 'framer-motion';
import { 
  GraduationCap, Calendar, MapPin, Award, BookOpen,
  School, University, BookMarked, CheckCircle, Star
} from 'lucide-react';

const educationData = [
  {
    degree: "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE & ENGINEERING",
    institution: "Glocal University",
    location: "Saharanpur, UP, India",
    period: "2018 - 2022",
    score: "CGPA: 7/10",
    achievements: [
      "Specialized in Computer Science and Engineering",
      "Completed major projects in web development and data analytics",
      "Active participant in technical workshops and hackathons"
    ],
    icon: University,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    degree: "HIGHER SECONDARY",
    institution: "MIC HSS Athanikkal",
    location: "Athanikkal, Kerala, India",
    period: "2018",
    score: "Completed with distinction",
    achievements: [
      "Science stream with Mathematics, Physics and Chemistry as majors",
      "Participated in school-level tech competitions",
      "Strong foundation in mathematics and programming"
    ],
    icon: School,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20"
  }
];

const certifications = [
  {
    title: "Architecting with Google Compute Engine",
    issuer: "Google Cloud",
    year: "2023",
    icon: Award,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    title: "VR/AR with Fusion 360 Workshop",
    issuer: "Autodesk",
    year: "2022",
    icon: Award,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  }
];

const skills = [
  { category: "Core CS", items: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Networking"] },
  { category: "Mathematics", items: ["Calculus", "Linear Algebra", "Statistics", "Discrete Math"] },
  { category: "Development", items: ["Web Dev", "Mobile Dev", "API Design", "Database Design"] },
  { category: "Data Science", items: ["Data Analytics", "Machine Learning", "Visualization"] }
];

export default function Education() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          Education & <span className="gradient-text">Qualifications</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Academic background and professional certifications in Computer Science and Engineering
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
          <div className="text-sm text-gray-400">Degrees</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">4+</div>
          <div className="text-sm text-gray-400">Certifications</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <BookOpen className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">15+</div>
          <div className="text-sm text-gray-400">Subjects</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">8.2</div>
          <div className="text-sm text-gray-400">CGPA</div>
        </div>
      </motion.div>

      {/* Education Timeline */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${edu.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 ${edu.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {edu.score}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
                      <span className="flex items-center gap-1">
                        <University size={14} className="text-gray-400" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-gray-400" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Subjects/Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Core <span className="gradient-text">Curriculum</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Professional <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 flex items-center gap-4"
              >
                <div className={`w-12 h-12 ${cert.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${cert.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-gray-700"
      >
        <BookMarked className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Continuous Learner</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Passionate about staying updated with the latest technologies. 
          Currently expanding knowledge in Cloud Computing, AI/ML, and Web3 technologies.
        </p>
      </motion.div>
    </div>
  );
}