import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nemmis Blog - Restaurant AI & Phone System Insights',
  description:
    'Latest insights, tips, and updates about AI phone systems for restaurants, automation, and improving customer service.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#222831' }}>
      {/* Header */}
      <header className="relative">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#00ADB5' }}
              >
                <span className="text-white font-bold text-lg font-inter">N</span>
              </div>
              <span className="text-white text-xl font-semibold font-inter">Nemmis</span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                All Posts
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book-demo"
              className="hidden md:block px-6 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#FF5E57', color: 'white' }}
            >
              Book A Demo
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-700" style={{ backgroundColor: '#393E46' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#00ADB5' }}
              >
                <span className="text-white font-bold text-xl font-inter">N</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold font-inter">Nemmis Blog</h3>
                <p className="text-gray-400 text-sm">Insights for restaurant success</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Link
                href="/book-demo"
                className="text-white text-lg font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#00ADB5' }}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
