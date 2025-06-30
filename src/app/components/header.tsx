'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useCalendly } from '../hooks/useCalendly';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  // Ensure scrolling is always enabled
  useEffect(() => {
    // Remove any potential scroll locks
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.documentElement.style.position = 'static';
  }, []);

  // Debug function to check page state
  const debugPageState = () => {
    console.log('=== Page Debug Info ===');
    console.log('Body overflow:', getComputedStyle(document.body).overflow);
    console.log(
      'HTML overflow:',
      getComputedStyle(document.documentElement).overflow
    );
    console.log('Body position:', getComputedStyle(document.body).position);
    console.log(
      'Current scroll position:',
      window.scrollY || window.pageYOffset
    );
    console.log('Page height:', document.documentElement.scrollHeight);
    console.log('Window height:', window.innerHeight);
    console.log(
      'Can page scroll:',
      document.documentElement.scrollHeight > window.innerHeight
    );
  };

  // Enhanced navigation with multiple fallback methods
  const handleNavClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
    debugPageState();

    // Close mobile menu first
    setIsMenuOpen(false);

    // Handle page routes
    if (href === 'about') {
      window.location.href = '/about';
      return;
    }

    // Handle anchor links on home page
    const targetHref = href.startsWith('#') ? href : `#${href}`;

    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';

    if (!isHomePage) {
      // Navigate to home page with anchor
      window.location.href = `/${targetHref}`;
      return;
    }

    // We're on home page, scroll to anchor
    // Continue with existing scroll logic...

    // Comprehensive style reset to enable scrolling
    const resetScrollStyles = () => {
      const body = document.body;
      const html = document.documentElement;

      // Reset overflow
      body.style.overflow = 'auto';
      html.style.overflow = 'auto';

      // Reset position
      body.style.position = 'static';
      html.style.position = 'static';

      // Reset other potential scroll blockers
      body.style.height = 'auto';
      html.style.height = 'auto';
      body.style.maxHeight = 'none';
      html.style.maxHeight = 'none';

      // Remove any transform that might interfere
      body.style.transform = 'none';
      html.style.transform = 'none';

      console.log('Scroll styles reset');
    };

    resetScrollStyles();

    // Multiple attempts to scroll to section
    setTimeout(() => {
      const element = document.querySelector(targetHref);
      console.log(`Element found for ${targetHref}:`, element);

      if (element) {
        const rect = element.getBoundingClientRect();
        console.log('Element position:', rect);

        // Try multiple scroll methods
        const scrollMethods = [
          // Method 1: Smooth scroll with offset
          () => {
            const elementTop = (element as HTMLElement).offsetTop;
            const offsetTop = elementTop - 80; // Account for header
            console.log(`Scrolling to position: ${offsetTop}`);

            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth',
            });
          },

          // Method 2: Instant scroll
          () => {
            const elementTop = (element as HTMLElement).offsetTop;
            const offsetTop = elementTop - 80;
            console.log(`Instant scroll to position: ${offsetTop}`);
            window.scrollTo(0, offsetTop);
          },

          // Method 3: scrollIntoView
          () => {
            console.log('Using scrollIntoView');
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          },
        ];

        // Try first method
        try {
          scrollMethods[0]();

          // Check if scroll worked after a delay
          setTimeout(() => {
            const newScrollPos = window.scrollY || window.pageYOffset;
            console.log('Scroll position after smooth scroll:', newScrollPos);

            if (newScrollPos < 100) {
              console.log(
                'Smooth scroll may have failed, trying instant scroll'
              );
              scrollMethods[1]();

              setTimeout(() => {
                const finalScrollPos = window.scrollY || window.pageYOffset;
                console.log('Final scroll position:', finalScrollPos);

                if (finalScrollPos < 100) {
                  console.log(
                    'All scroll methods failed, trying scrollIntoView'
                  );
                  scrollMethods[2]();
                }
              }, 100);
            }
          }, 1000);
        } catch (error) {
          console.error('Scroll error:', error);
          scrollMethods[1](); // Fallback to instant scroll
        }
      } else {
        console.error(`Element not found: ${targetHref}`);

        // List all available IDs for debugging
        const allIds = Array.from(document.querySelectorAll('[id]')).map(
          (el) => el.id
        );
        console.log('Available IDs on page:', allIds);
      }

      // Final style reset
      setTimeout(() => {
        resetScrollStyles();
      }, 100);
    }, 150);
  };

  const handleLogoClick = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // Navigate to home page
    window.location.href = '/';
  };

  const handleBookConsultation = () => {
    console.log('Header: Book consultation button clicked!');

    // Close mobile menu and ensure scrolling
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // Simple direct link fallback for immediate functionality
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );

    // Also try the hook version
    openCalendly();
  };

  // Handle mobile menu toggle
  const handleMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Always ensure scrolling is enabled
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            AI Company Boost
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('demo')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Demo
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleBookConsultation}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 touch-manipulation"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 touch-manipulation"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleNavClick('features')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 touch-manipulation"
              >
                Features
              </button>
              <button
                onClick={() => handleNavClick('demo')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 touch-manipulation"
              >
                Demo
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 touch-manipulation"
              >
                About
              </button>
              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 min-w-[200px] py-4 touch-manipulation"
              >
                Book Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
