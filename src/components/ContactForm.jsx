import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const { t } = useTranslation(['contact', 'common']);
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

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: t('common:status.success')
        });
        formRef.current.reset();
        
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('common:status.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
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

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              {t('form.firstName')} *
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder={t('form.firstNamePlaceholder')}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              {t('form.lastName')}
            </label>
            <input
              type="text"
              name="from_lastname"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder={t('form.lastNamePlaceholder')}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            {t('form.email')} *
          </label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder={t('form.emailPlaceholder')}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            {t('form.company')}
          </label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder={t('form.companyPlaceholder')}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            {t('form.message')} *
          </label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder={t('form.messagePlaceholder')}
          ></textarea>
        </div>

        <input type="hidden" name="to_name" value="Thasneem" />
        <input type="hidden" name="reply_to" value="{{from_email}}" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {t('common:buttons.sending')}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              {t('common:buttons.sendMessage')} <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>
      </form>

      <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700">
        <p>{t('common:contact.email')}: <a href="mailto:thasneemmoosa5000@gmail.com" className="text-blue-400 hover:underline">thasneemmoosa5000@gmail.com</a></p>
      </div>
    </div>
  );
}