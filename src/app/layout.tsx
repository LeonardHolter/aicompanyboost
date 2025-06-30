import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'AI Customer Service Automation | Automate 80% of Support Tickets',
    template: '%s | AI Company Boost',
  },
  description:
    'Transform your customer service with AI automation. Reduce response times by 90%, automate 80% of support tickets, and scale your business without hiring. $1,500 setup + $299/month. Book your free consultation today.',
  keywords: [
    'AI customer service automation',
    'automated customer support',
    'AI support chatbot',
    'customer service AI',
    'business automation AI',
    'AI chatbot for business',
    'automated support tickets',
    'customer support automation',
    'AI customer service platform',
    'intelligent customer support',
    'AI-powered customer service',
    'automated customer care',
  ],
  authors: [{ name: 'AI Company Boost', url: 'https://aicompanyboost.com' }],
  creator: 'AI Company Boost',
  publisher: 'AI Company Boost',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aicompanyboost.com',
    siteName: 'AI Company Boost',
    title: 'AI Customer Service Automation | Automate 80% of Support Tickets',
    description:
      'Transform your customer service with AI automation. Reduce response times by 90%, automate 80% of support tickets, and scale your business without hiring.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Company Boost - Customer Service Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Service Automation | Automate 80% of Support Tickets',
    description:
      'Transform your customer service with AI automation. Reduce response times by 90% and scale without hiring.',
    images: ['/og-image.jpg'],
    creator: '@aicompanyboost',
  },
  alternates: {
    canonical: 'https://aicompanyboost.com',
  },
  category: 'Technology',
  classification: 'Business Software',
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AI Company Boost',
              description:
                'AI-powered customer service automation platform that helps businesses automate 80% of support tickets',
              url: 'https://aicompanyboost.com',
              logo: 'https://aicompanyboost.com/logo.png',
              sameAs: [
                'https://twitter.com/aicompanyboost',
                'https://linkedin.com/company/aicompanyboost',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'customer service',
                email: 'support@aicompanyboost.com',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Tech Street',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94105',
                addressCountry: 'US',
              },
              founder: {
                '@type': 'Person',
                name: 'Leonard Holter',
              },
              foundingDate: '2024',
              numberOfEmployees: '5-10',
              industry: 'Artificial Intelligence',
              keywords:
                'AI customer service automation, automated customer support, AI chatbot, business automation',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'AI Customer Service Automation',
              description:
                'Automated customer support solution that handles 80% of support tickets using AI',
              provider: {
                '@type': 'Organization',
                name: 'AI Company Boost',
              },
              serviceType: 'AI Customer Service Automation',
              offers: {
                '@type': 'Offer',
                price: '1500',
                priceCurrency: 'USD',
                description: 'Setup fee: $1,500, Monthly fee: $299',
                availability: 'https://schema.org/InStock',
              },
              areaServed: 'Worldwide',
              category: 'Business Software',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
