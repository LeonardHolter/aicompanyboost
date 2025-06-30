import Header from '../components/header';
import Footer from '../components/footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="text-gray-600 mb-6 sm:mb-8">
              <strong>Last updated:</strong> January 1, 2025
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                By accessing and using AI Company Boost services, you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                2. Service Description
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                AI Company Boost provides artificial intelligence-powered
                customer support automation services, including but not limited
                to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Automated customer inquiry responses</li>
                <li>Integration with existing support platforms</li>
                <li>AI training and customization services</li>
                <li>Analytics and reporting tools</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                3. User Accounts and Responsibilities
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Users are responsible for:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Maintaining the confidentiality of account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Using the service only for lawful business purposes</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                4. Payment Terms
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Payment obligations:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  Subscription fees are billed monthly or annually in advance
                </li>
                <li>All fees are non-refundable except as required by law</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>Late payments may result in service suspension</li>
                <li>Taxes are the responsibility of the customer</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                5. Data and Privacy
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Our data handling practices:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Customer data remains the property of the customer</li>
                <li>We implement industry-standard security measures</li>
                <li>Data is used only to provide and improve our services</li>
                <li>
                  We comply with GDPR, CCPA, and other privacy regulations
                </li>
                <li>
                  Detailed privacy practices are outlined in our Privacy Policy
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                6. Service Level Agreement
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We strive to provide:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>99.9% uptime for our AI services</li>
                <li>Response times under 2 seconds for most queries</li>
                <li>24/7 technical support for Enterprise customers</li>
                <li>Regular updates and improvements to the AI model</li>
                <li>Scheduled maintenance with advance notice</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                AI Company Boost shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your use of
                the service.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                8. Termination
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Either party may terminate this agreement with 30 days written
                notice. Upon termination:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Access to the service will be discontinued</li>
                <li>Customer data will be available for export for 30 days</li>
                <li>All outstanding fees become immediately due</li>
                <li>Confidentiality obligations survive termination</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                9. Modifications to Terms
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We reserve the right to modify these terms at any time. Changes
                will be effective upon posting the updated terms on our website.
                Continued use of the service constitutes acceptance of the
                modified terms.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-gray-700 mb-2 text-sm sm:text-base">
                  <strong>Email:</strong> legal@aicompanyboost.com
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  <strong>Address:</strong> AI Company Boost, 123 Tech Street,
                  San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
