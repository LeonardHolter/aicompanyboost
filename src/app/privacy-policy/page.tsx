import Header from '../components/header';
import Footer from '../components/footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="text-gray-600 mb-6 sm:mb-8">
              <strong>Last updated:</strong> January 1, 2025
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We collect information you provide directly to us, such as when
                you create an account, use our services, or contact us for
                support.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, role, industry)</li>
                <li>Customer support data and interactions</li>
                <li>Usage data and analytics</li>
                <li>
                  Technical information (IP address, browser type, device
                  information)
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Provide, maintain, and improve our AI support services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  With service providers who assist us in operating our business
                </li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>
                  In connection with a merger, acquisition, or sale of assets
                </li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We implement appropriate technical and organizational security
                measures to protect your personal information:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  Enterprise-grade encryption for data in transit and at rest
                </li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Strict access controls and employee training</li>
                <li>GDPR and CCPA compliance frameworks</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Access, update, or delete your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-gray-700 mb-2 text-sm sm:text-base">
                  <strong>Email:</strong> privacy@aicompanyboost.com
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
