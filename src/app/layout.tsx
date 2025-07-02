import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nemmis - AI Phone System for Restaurants | Restaurant Call Management',
  description:
    'Nemmis is your 24/7 AI phone agent that handles all restaurant calls like a human. Never miss a call, take orders, manage reservations, and boost revenue with automated call handling. Try our restaurant AI phone system today.',
  keywords:
    'restaurant AI phone system, AI phone agent, restaurant call management, automated order taking, restaurant phone automation, AI restaurant receptionist, 24/7 restaurant phone service, restaurant call handling, AI voice agent, restaurant automation',
  openGraph: {
    title: 'Nemmis - AI Phone System for Restaurants | Restaurant Call Management',
    description:
      'Nemmis is your 24/7 AI phone agent that handles all restaurant calls like a human. Never miss a call, take orders, manage reservations, and boost revenue with automated call handling.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nemmis',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nemmis AI Restaurant Phone System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nemmis - AI Phone System for Restaurants',
    description:
      'Your 24/7 AI phone agent that handles all restaurant calls like a human. Never miss a call again.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://nemmis.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
