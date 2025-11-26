'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Mail, HelpCircle, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSupportPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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
              How can we help?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We're here to help you with any questions or issues you might have. 
              Choose the best way to get in touch below.
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-6">Send us an email and we'll get back to you within 24 hours.</p>
              <a 
                href="mailto:support@kandoo.lk" 
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                support@kandoo.lk
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 mb-6">Find answers to common questions in our FAQ section.</p>
              <a 
                href="/faq" 
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2"
              >
                Visit FAQ
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 mb-6">Follow us for updates and direct messaging support.</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a message</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We've received your message and will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-gray-500 hover:text-gray-900 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-black focus:bg-white focus:ring-0 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-black focus:bg-white focus:ring-0 transition-all duration-200 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send size={18} />
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
