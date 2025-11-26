'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Kandoo?",
      answer: "Kandoo is an AI-powered English learning app that helps you improve speaking, writing, listening, and real-life communication skills."
    },
    {
      question: "Is Kandoo free?",
      answer: "Yes! Kandoo has a free version. You can upgrade to a premium plan for full access to all features."
    },
    {
      question: "How does Kandoo help me improve English?",
      answer: "Kandoo gives real-time corrections, pronunciation feedback, grammar support, and conversation practice using AI."
    },
    {
      question: "How do I make payments?",
      answer: "We accept debit/credit cards, bank transfers, and other supported payment methods."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes. You can cancel anytime. Your premium access will continue until the current billing period ends."
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are offered only for duplicate payments, technical issues, or unauthorized transactions. Read our Refund Policy for details."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We use encryption and industry-standard security to protect your information."
    },
    {
      question: "Does Kandoo store my conversations?",
      answer: "Only for learning improvement and performance optimization. Your data is never sold or shared."
    },
    {
      question: "Do I need internet to use Kandoo?",
      answer: "Yes. A stable connection is required for AI conversations and learning features."
    },
    {
      question: "Where can I get support?",
      answer: "Email us anytime at support@kandoo.lk."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-xl font-bold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="mailto:support@kandoo.lk" 
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
