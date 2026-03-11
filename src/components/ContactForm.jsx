import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        formRef.current.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Messages */}
      {status.type === 'success' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
        >
          <CheckCircle size={18} />
          {status.message}
        </motion.div>
      )}
      
      {status.type === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2"
        >
          <AlertCircle size={18} />
          {status.message}
        </motion.div>
      )}

      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">First Name *</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Last Name</label>
            <input
              type="text"
              name="from_lastname"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Email *</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Company</label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Message *</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Tell me about your opportunity..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>
      </form>

      {/* Alternative Contact */}
      <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700">
        <p>Or email me directly at <a href="mailto:thasneemmoosa5000@gmail.com" className="text-blue-400 hover:underline">thasneemmoosa5000@gmail.com</a></p>
      </div>
    </div>
  );
}