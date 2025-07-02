'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import Link from 'next/link';

// Define Calendly types
interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (config: CalendlyConfig) => void;
  };
}

interface CalendlyConfig {
  url: string;
  parentElement: Element | null;
  prefill: Record<string, unknown>;
  utm: Record<string, unknown>;
}

export default function BookDemo() {
  useEffect(() => {
    // Initialize Calendly when the component mounts
    const win = window as CalendlyWindow;
    if (typeof window !== 'undefined' && win.Calendly) {
      win.Calendly.initInlineWidget({
        url: 'https://calendly.com/leonard-holterholdings/30min?background_color=393e46&text_color=eeeeee&primary_color=00adb5',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          const win = window as CalendlyWindow;
          if (win.Calendly) {
            win.Calendly.initInlineWidget({
              url: 'https://calendly.com/leonard-holterholdings/30min?background_color=393e46&text_color=eeeeee&primary_color=00adb5',
              parentElement: document.querySelector('.calendly-inline-widget'),
              prefill: {},
              utm: {}
            });
          }
        }}
      />
      
      {/* Custom CSS for Calendly theming */}
      <style jsx global>{`
        .calendly-inline-widget iframe {
          border-radius: 16px;
          overflow: hidden;
        }
        
        /* Override Calendly styles */
        .calendly-inline-widget {
          border-radius: 16px;
          overflow: hidden;
        }
        
        /* Additional styling for better integration */
        .calendly-wrapper {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid #4a5568;
        }
      `}</style>
      
      <div className="min-h-screen" style={{ backgroundColor: '#222831' }}>
        {/* Header */}
        <header className="relative">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#00ADB5' }}>
                    <span className="text-white font-bold text-lg font-inter">N</span>
                  </div>
                  <span className="text-white text-xl font-semibold font-inter">Nemmis</span>
                </Link>
              </div>

              {/* Navigation */}
              <div className="hidden md:flex items-center space-x-8">
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/sign-in" className="text-gray-300 hover:text-white transition-colors">
                Sign In →
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-6 pt-8 pb-20 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Book A <span style={{ color: '#FF5E57' }}>Demo</span> With Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how Nemmis can help your restaurant recover 6-figures per year<br />
              in lost revenue. Schedule a 30-minute consultation with our team.
            </p>
          </div>

          {/* Calendly Embed Container */}
          <div className="max-w-4xl mx-auto">
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/leonard-holterholdings/30min?background_color=393e46&text_color=eeeeee&primary_color=00adb5"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
            
            {/* Additional styling info */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Select a time that works best for you. You&apos;ll receive a confirmation email with meeting details.
              </p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
} 