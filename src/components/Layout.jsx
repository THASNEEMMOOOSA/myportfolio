import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home, Briefcase, Code, Mail, Award, GraduationCap } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { path: '/', icon: Home, key: 'home' },
  { path: '/projects', icon: Briefcase, key: 'projects' },
  { path: '/experience', icon: Award, key: 'experience' },
  { path: '/education', icon: GraduationCap, key: 'education' },
  { path: '/skills', icon: Code, key: 'skills' },
  { path: '/contact', icon: Mail, key: 'contact' },
];

export default function Layout() {
  const location = useLocation();
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold gradient-text">
              TV<span className="text-gray-500">.</span>
            </Link>
            <div className="flex items-center gap-2">
              {navItems.map(({ path, icon: Icon, key }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === path 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {location.pathname === path && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-blue-600 rounded-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon size={18} />
                    <span className="hidden md:inline">{t(`nav.${key}`)}</span>
                  </span>
                </Link>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}