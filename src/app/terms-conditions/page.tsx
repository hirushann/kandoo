'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Terms and Conditions</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to Kandoo. These Terms and Conditions govern your use of our website and application. 
                By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, 
                then you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Kandoo and its licensors. 
                The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Kandoo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, 
                special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide 
                at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:support@kandoo.lk" className="text-blue-600 hover:underline">support@kandoo.lk</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
