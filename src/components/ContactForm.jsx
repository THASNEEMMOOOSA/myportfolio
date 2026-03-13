import { useRef, useState, useEffect } from 'react'; // Make sure useEffect is imported
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

    // Check if environment variables exist before sending
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS configuration is missing. Please check environment variables.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Sending email with:', { serviceId, templateId }); // Debug log
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      console.log('EmailJS Result:', result); // Debug log

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: t('common:status.success')
        });
        formRef.current.reset();
        
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      console.error('EmailJS Error:', error); // Debug log
      
      // More specific error message
      let errorMessage = t('common:status.error');
      
      if (error.text === 'Invalid service_id') {
        errorMessage = 'Service ID is incorrect. Please check EmailJS configuration.';
      } else if (error.text === 'Invalid template_id') {
        errorMessage = 'Template ID is incorrect. Please check EmailJS configuration.';
      } else if (error.text === 'Invalid public key') {
        errorMessage = 'Public key is invalid. Please check EmailJS configuration.';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Debug info - remove after confirming it works on Vercel */}
      <div className="text-xs text-gray-500 bg-gray-800 p-2 rounded mb-2">
        EmailJS: {
          import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✅' : '❌'
        } {
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✅' : '❌'
        } {
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✅' : '❌'
        }
      </div>

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