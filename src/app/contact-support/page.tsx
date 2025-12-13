'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Mail, HelpCircle, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

function ContactSupportContent() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = { en, si, ta }[lang as 'en' | 'si' | 'ta'] ?? en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-quicksand">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t.contact_hero_title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.contact_hero_subtext}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Options */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact_email_title}</h3>
              <p className="text-gray-600 mb-6">{t.contact_email_desc}</p>
              <a 
                href="mailto:info@kandoo.lk" 
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                info@kandoo.lk
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact_help_center_title}</h3>
              <p className="text-gray-600 mb-6">{t.contact_help_center_desc}</p>
              <a 
                href="/faq" 
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2"
              >
                {t.contact_visit_faq}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact_social_title}</h3>
              <p className="text-gray-600 mb-6">{t.contact_social_desc}</p>
              <div className="flex gap-4">
                 {/* Icons are purely decorative here as links are in footer, but could be functional */}
                 <span className="text-sm font-semibold text-pink-600">@kandoo.app</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.contact_form_title}</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact_success_title}</h3>
                  <p className="text-gray-600">{t.contact_success_desc}</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-gray-500 hover:text-gray-900 underline"
                  >
                    {t.contact_send_another}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.contact_name_label}</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-black focus:bg-white focus:ring-0 transition-all duration-200"
                        placeholder={t.contact_name_placeholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contact_email_label}</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-black focus:bg-white focus:ring-0 transition-all duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contact_message_label}</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-black focus:bg-white focus:ring-0 transition-all duration-200 resize-none"
                      placeholder={t.contact_message_placeholder}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      t.contact_sending
                    ) : (
                      <>
                        {t.contact_send_btn} <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function ContactSupportPage() {
  return (
    <Suspense fallback={null}>
      <ContactSupportContent />
    </Suspense>
  );
}
