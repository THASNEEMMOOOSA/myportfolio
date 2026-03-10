import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, TrendingUp, ShoppingCart, Activity, CreditCard, BarChart3, Smartphone, Users, Globe, Server, Database, Zap, Shield, Code, Layers } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, real-time inventory, and analytics dashboard.",
    longDesc: "Built a scalable e-commerce platform handling 1000+ daily users. Implemented secure payment processing with Stripe & Razorpay, real-time inventory management, and comprehensive sales analytics dashboard with predictive insights.",
    tech: ["Django", "React", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
    icon: ShoppingCart,
    iconColor: "text-blue-400",
    metrics: ["99.9% Uptime", "5 Payment Methods", "10k+ Products"],
    link: "http://thasneemmoosa5000.pythonanywhere.com/",
    github: "#",
    featured: true,
    year: "2026",
    category: "Full-Stack"
  },
  {
    title: "IoT Data Monitoring System",
    description: "Real-time IoT device monitoring and analytics platform for industrial applications.",
    longDesc: "Developed a scalable system to collect, process, and visualize data from 1000+ IoT devices in real-time. Built custom WebSocket APIs for device communication, implemented anomaly detection algorithms, and created interactive monitoring dashboards.",
    tech: ["Python", "Flask", "PostgreSQL", "WebSocket", "Chart.js", "MQTT", "InfluxDB"],
    icon: Activity,
    iconColor: "text-green-400",
    metrics: ["<100ms Latency", "1000+ Devices", "99.5% Accuracy"],
    github: "#",
    year: "2025",
    category: "Data/IoT"
  },
  {
    title: "POS Billing System",
    description: "Enterprise retail management system with inventory tracking and advanced analytics.",
    longDesc: "Created a comprehensive POS system for retail chains featuring inventory management, automated billing, dynamic tax calculation, discount processing, supplier management, and detailed sales reports with predictive restocking alerts.",
    tech: ["Django", "React", "PostgreSQL", "Tailwind", "Redux", "Redis", "Nginx"],
    icon: CreditCard,
    iconColor: "text-purple-400",
    metrics: ["40% Faster Billing", "500+ Transactions/Day", "98% Accuracy"],
    github: "#",
    year: "2025",
    category: "Enterprise"
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Enterprise-grade BI dashboard for sales performance tracking and forecasting.",
    longDesc: "Designed and implemented a comprehensive sales analytics dashboard integrating multiple data sources (SQL, Excel, APIs). Features include real-time KPI tracking, predictive analytics using ML models, custom report generation, and automated insight delivery.",
    tech: ["Power BI", "SQL", "Python", "Excel", "Tableau", "DAX", "Power Query"],
    icon: BarChart3,
    iconColor: "text-yellow-400",
    metrics: ["15+ KPIs", "5 Data Sources", "Daily Updates"],
    github: "#",
    year: "2024",
    category: "Analytics"
  },
  {
    title: "Mobile Payment Application",
    description: "Cross-platform mobile application with secure in-app payments and real-time sync.",
    longDesc: "Built a Flutter-based mobile application for Android/iOS with integrated payment processing (Stripe, Razorpay), biometric authentication, real-time data synchronization using Firebase, and offline-first architecture for seamless user experience.",
    tech: ["Flutter", "Dart", "Firebase", "Stripe", "GetX", "SQLite", "BLoC"],
    icon: Smartphone,
    iconColor: "text-orange-400",
    metrics: ["2 Platforms", "Secure Biometric", "Offline Mode"],
    github: "#",
    year: "2024",
    category: "Mobile"
  },
  {
    title: "Employee Management System",
    description: "Comprehensive HR management platform with role-based access and payroll integration.",
    longDesc: "Developed a full-featured employee management system featuring secure CRUD operations, role-based access control (RBAC), attendance tracking with facial recognition, payroll integration, performance review workflows, and automated report generation.",
    tech: ["Django", "MySQL", "React", "JWT", "Bootstrap", "Celery", "Redis"],
    icon: Users,
    iconColor: "text-indigo-400",
    metrics: ["RBAC", "500+ Users", "Cloud Deployed"],
    link: "http://thasneemmoosa5000.pythonanywhere.com/",
    github: "#",
    year: "2023",
    category: "Full-Stack"
  },
  {
    title: "Real Estate Listing Platform",
    description: "Property management and listing platform with advanced search and virtual tours.",
    longDesc: "Built a real estate platform featuring property listings, advanced search filters, interactive maps, virtual tour integration, agent dashboards, lead management, and automated email notifications for new listings matching user criteria.",
    tech: ["Django", "React", "PostgreSQL", "Mapbox", "Elasticsearch", "Redis"],
    icon: Globe,
    iconColor: "text-teal-400",
    metrics: ["1000+ Listings", "Advanced Search", "Virtual Tours"],
    github: "#",
    year: "2023",
    category: "Web Application"
  },
  {
    title: "Task Management Application",
    description: "Productivity-focused mobile app with task organization and team collaboration.",
    longDesc: "Designed a cross-platform task management application supporting task creation, categorization, priority setting, deadline tracking, team collaboration features, real-time updates, and offline data persistence with cloud sync.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "Provider", "Push Notifications"],
    icon: Layers,
    iconColor: "text-pink-400",
    metrics: ["Offline First", "Real-time Sync", "Team Collaboration"],
    github: "#",
    year: "2023",
    category: "Mobile"
  }
];

export default function Projects() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          <span className="gradient-text">Professional</span> Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Enterprise-grade solutions demonstrating full-stack expertise, data analytics capabilities, and mobile development proficiency.
        </p>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { value: projects.length, label: "Total Projects", color: "blue" },
          { value: "8", label: "Technologies", color: "green" },
          { value: "5", label: "Categories", color: "purple" },
          { value: "4+", label: "Years Delivering", color: "yellow" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
            <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Projects Grid - FIXED GAP ISSUE */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Main card - FIXED PADDING */}
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all overflow-hidden">
                
                {/* Content container - UNIFORM PADDING */}
                <div className="p-8">
                  {/* Top row with icon and title */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon */}
                    <div className={`p-3 bg-gray-700/70 rounded-xl ${project.iconColor} flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    
                    {/* Title and metadata */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description - CONSISTENT SPACING */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">{project.longDesc}</p>
                  </div>

                  {/* Tech Stack - UNIFORM GRID */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 bg-gray-700/70 rounded-lg text-sm text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics - EVEN 3-COLUMN GRID */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/50">
                        <div className="text-xs text-gray-400">{metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Links - CONSISTENT BORDER */}
                  <div className="flex gap-6 pt-4 border-t border-gray-700">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                        <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
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
        <h3 className="text-2xl font-bold mb-3">Interested in collaborating?</h3>
        <p className="text-gray-300 mb-6">
          I'm currently available for freelance opportunities and full-time positions.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Let's Discuss Your Project <TrendingUp size={18} />
        </a>
      </motion.div>
    </div>
  );
}