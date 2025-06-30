import Header from '../components/header';
import Footer from '../components/footer';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Cookie Policy
          </h1>

          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="text-gray-600 mb-6 sm:mb-8">
              <strong>Last updated:</strong> January 1, 2025
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit our website. They are widely used
                to make websites work more efficiently and provide information
                to website owners.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                AI Company Boost uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Essential website functionality and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Improving our services and user experience</li>
                <li>Providing personalized content and recommendations</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                3. Types of Cookies We Use
              </h2>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Essential Cookies
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  These cookies are necessary for the website to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Authentication and login status</li>
                  <li>Session management</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Performance Cookies
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  These cookies collect information about how visitors use our
                  website, such as which pages are most popular and how users
                  navigate the site.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Google Analytics for website analytics</li>
                  <li>Page load performance monitoring</li>
                  <li>Error tracking and reporting</li>
                  <li>User interaction patterns</li>
                </ul>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Functional Cookies
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  These cookies allow us to remember choices you make and
                  provide enhanced features and personalized content.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Language and region preferences</li>
                  <li>User interface customizations</li>
                  <li>Form data persistence</li>
                  <li>Chat and support preferences</li>
                </ul>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  These cookies are used to deliver relevant advertisements and
                  track the effectiveness of our marketing campaigns.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Conversion tracking</li>
                  <li>Remarketing and retargeting</li>
                  <li>Social media integration</li>
                  <li>Campaign performance analysis</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We may use third-party services that place cookies on your
                device. These include:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Google Analytics:</strong> For website analytics and
                  performance monitoring
                </li>
                <li>
                  <strong>Calendly:</strong> For appointment scheduling
                  functionality
                </li>
                <li>
                  <strong>Intercom:</strong> For customer support and chat
                  features
                </li>
                <li>
                  <strong>HubSpot:</strong> For marketing automation and lead
                  tracking
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                You have several options for managing cookies:
              </p>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Browser Settings
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  Most web browsers allow you to control cookies through their
                  settings. You can:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Delete existing cookies</li>
                  <li>Block future cookies</li>
                  <li>Set preferences for specific websites</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Cookie Consent
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  When you first visit our website, you&apos;ll see a cookie
                  consent banner. You can:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Accept all cookies</li>
                  <li>Customize your preferences</li>
                  <li>Reject non-essential cookies</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                6. Cookie Retention
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Session cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent cookies:</strong> Remain for a set period
                  (typically 1-24 months)
                </li>
                <li>
                  <strong>Essential cookies:</strong> Retained as long as
                  necessary for site functionality
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Typically retained for 24
                  months
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any material changes by posting the updated policy on our
                website.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                If you have any questions about our use of cookies, please
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
