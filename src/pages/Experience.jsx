import { motion } from 'framer-motion';
import { 
  Briefcase, Award, Calendar, MapPin, TrendingUp, 
  Code, BarChart3, Smartphone, Users, Globe, 
  Zap, Trophy, GraduationCap, Cloud, Shield, Database
} from 'lucide-react';

const experiences = [
  {
    role: "SENIOR DATA ANALYST & FACULTY",
    company: "OFSYS EDUCATIONS LLP",
    location: "Kerala, India",
    period: "February 2026 - Present",
    achievements: [
      "Leading advanced training programs in Python, SQL, Power BI, and Tableau",
      "Delivering Python full-stack development using Django and Flask",
      "Designing end-to-end analytics projects and full-stack solutions",
      "Developing and optimizing ETL pipelines and data models",
      "Mentoring 50+ students through structured assessments and project reviews"
    ],
    icon: BarChart3,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    role: "DATA ANALYTICS TRAINER",
    company: "BEAT CENTER OF EXCELLENCE",
    location: "Malappuram, Kerala",
    period: "2024 - February 2026",
    achievements: [
      "Conducted structured training sessions for 100+ students in data analytics",
      "Delivered hands-on workshops on data cleaning and visualization techniques",
      "Designed practical lab sessions for extracting business insights",
      "Developed curriculum for advanced analytics courses"
    ],
    icon: GraduationCap,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  {
    role: "FULL-STACK WEB DEVELOPER CUM TRAINER",
    company: "IMAGECON INDIA PVT LTD",
    location: "Salem, India",
    period: "2022 - 2024",
    achievements: [
      "Engineered Python automation solutions for IoT device data processing",
      "Architected server-side components using Django and Flask",
      "Received 'Ultimate Team Player Award' for outstanding contributions",
      "Led technical workshops on IoT architecture and web technologies"
    ],
    icon: Code,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/20",
    award: true
  },
  {
    role: "FREELANCE FULL-STACK & MOBILE DEVELOPER",
    company: "Freelancer",
    location: "Kerala, India",
    period: "2021 - Present",
    achievements: [
      "Delivered 10+ customized web and mobile solutions for startups",
      "Integrated secure payment systems (Razorpay, Stripe, PayPal)",
      "Built cross-platform apps with Flutter and Firebase",
      "Managed full development lifecycle from requirement to deployment"
    ],
    icon: Smartphone,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/20"
  },
  {
    role: "PYTHON DEVELOPER INTERN (Data & Automation)",
    company: "Infox Technologies",
    location: "India",
    period: "2021",
    achievements: [
      "Developed backend data services and automation scripts in Python to support various business functions",
      "Built and optimized relational databases, writing complex SQL queries for data extraction and reporting",
      "Implemented web scraping solutions using BeautifulSoup and Selenium to gather data, processing and storing it in structured databases",
      "Assisted in the development of Python-based software solutions for internal business operations",
      "Participated in debugging and troubleshooting activities to resolve application performance issues"
    ],
    icon: Database,
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  }
];

const achievements = [
  { 
    icon: Trophy, 
    title: "Ultimate Team Player Award", 
    desc: "IMAGECON India Pvt Ltd", 
    year: "2024",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  },
  { 
    icon: Award, 
    title: "2nd Place - Robotics Hackathon", 
    desc: "IEDC MESCE", 
    year: "2023",
    color: "text-gray-400",
    bgColor: "bg-gray-500/20"
  },
  { 
    icon: Cloud, 
    title: "Google Cloud Certification", 
    desc: "Architecting with Google Compute Engine", 
    year: "2023",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  { 
    icon: Shield, 
    title: "VR/AR Workshop Certification", 
    desc: "Autodesk Fusion 360", 
    year: "2022",
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  }
];

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          Professional <span className="gradient-text">Journey</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          3+ years of experience in data analytics, full-stack development, and technical training
        </p>
      </motion.div>

      {/* Stats Summary - UPDATED with Internship count */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Briefcase className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">5</div>
          <div className="text-sm text-gray-400">Roles</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">3+</div>
          <div className="text-sm text-gray-400">Years</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">150+</div>
          <div className="text-sm text-gray-400">Students</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">4</div>
          <div className="text-sm text-gray-400">Achievements</div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon positioned on the line */}
                <div className="absolute left-0 top-6 transform -translate-x-1/2">
                  <div className={`w-12 h-12 ${exp.bgColor} rounded-xl flex items-center justify-center border-2 border-gray-700 z-10 relative`}>
                    <Icon className={`w-6 h-6 ${exp.iconColor}`} />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="ml-16">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-300">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} className="text-gray-400" /> 
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-gray-400" /> 
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-gray-400" /> 
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      {/* Award Badge */}
                      {exp.award && (
                        <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/20">
                          <Trophy size={16} />
                          <span className="text-sm font-medium">Award Winner</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Achievements List */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
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
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                <p className="text-xs text-blue-400 font-medium">{item.year}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Download Experience Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-gray-700"
      >
        <h3 className="text-xl font-bold mb-3">Want the complete story?</h3>
        <p className="text-gray-300 mb-4">
          Download my detailed resume for a comprehensive view of my experience and achievements.
        </p>
        <a
          href="/cv/THASNEEM_VELLARAMPARA_CV.pdf"
          download='THASNEEM_VELLARAMPARA_CV'
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Briefcase size={18} />
          Download Full CV
        </a>
      </motion.div>
    </div>
  );
}