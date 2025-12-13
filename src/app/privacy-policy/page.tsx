import { Suspense } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <p className='mb-4'>Last Updated: 26th November 2025</p>
              <p className='mb-4'>
                Kandoo (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our website, mobile application, and services.
              </p>
              <p>By accessing or using Kandoo, you agree to the terms of this Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1.1 Personal Information</h3>
              <p>We may collect the following details:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information (if you make purchases)</li>
                <li>Any information you directly provide through forms or messages</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1.2 Automatically Collected Data</h3>
              <p>
                When you use our website/app, we automatically collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Usage data and interactions</li>
                <li>Cookies and tracking data</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1.3 AI Interaction Data</h3>
              <p>
                We may store:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Text inputs you provide</li>
                <li>Audio recordings (if voice features are used)</li>
                <li>App usage patterns, This helps improve the accuracy and performance of our AI features.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize your user experience</li>
                <li>Process payments and subscriptions</li>
                <li>Communicate with you (support, updates, alerts)</li>
                <li>Enhance AI learning and performance</li>
                <li>Prevent fraud or misuse</li>
                <li>Comply with legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
              <p className='mb-4'>
                We <strong>do not</strong> sell your personal data.
              </p>
              <p>
                We may share information with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 mb-4">
                <li><strong>Service providers</strong> (payment processors, analytics tools, hosting partners)</li>
                <li><strong>Legal authorities</strong> when required</li>
                <li><strong>Affiliated partners</strong> involved in delivering services</li>
              </ul>
              <p>
                All third parties are required to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking</h2>
              <p className='mb-4'>
                We use cookies to:
              </p>
              <p>
                We may share information with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 mb-4">
                <li>Improve performance</li>
                <li>Save preferences</li>
                <li>Deliver personalized experiences</li>
              </ul>
              <p>
                You can disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We use industry-standard encryption and security measures to protect your data. However, no online system is 100% secure. We encourage users to maintain strong passwords.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className='mb-4'>
                Depending on your country, you may have the right to:
              </p>
              <p>
                We may share information with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 mb-4">
                <li>Request access to your data</li>
                <li>Request deletion of your data</li>
                <li>Request corrections</li>
                <li>Opt out of marketing emails</li>
              </ul>
              <p>
                You can submit requests through our Support page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not intended for <strong> children under 13. </strong> We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes take effect immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact: <a href="mailto:support@kandoo.lk" className="text-blue-600 hover:underline">support@kandoo.lk</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
