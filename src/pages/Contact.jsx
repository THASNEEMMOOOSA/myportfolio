import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Globe, Download, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold">
          Let's <span className="gradient-text">Connect</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Open to relocation, visa sponsorship, and exciting opportunities worldwide
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <a href="mailto:thasneemmoosa5000@gmail.com" className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold">thasneemmoosa5000@gmail.com</div>
                </div>
              </a>

              <a href="tel:+917034859573" className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group">
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="font-semibold">+91 70348 59573</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-semibold">Kerala, India</div>
                  <div className="text-xs text-gray-400 mt-1">Open to relocation worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Calendar className="text-yellow-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visa Status</div>
                  <div className="font-semibold">Open to visa sponsorship</div>
                  <div className="text-xs text-gray-400 mt-1">Available for international relocation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Social Profiles</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Github size={20} className="text-gray-400" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter size={20} className="text-blue-300" />
                <span>Twitter</span>
              </a>
              <a href="https://thasneemmoosa5000.pythonanywhere.com/" target="_blank" className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Globe size={20} className="text-green-400" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tell me about your opportunity..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>

          {/* Download CV */}
          <div className="mt-6 pt-6 border-t border-gray-700">
                      <a 
  href="/cv/quick-check.pdf" 
  download="quick-check.pdf"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2"
>
  <Download size={18} />
  Download CV
</a>
          </div>
        </motion.div>
      </div>

      {/* Availability Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/30 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-lg">
            <span className="font-semibold text-green-400">Available for opportunities</span>
            <span className="text-gray-300"> • Open to remote, relocation, and visa sponsorship</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}