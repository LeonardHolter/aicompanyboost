import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AI Customer Support Automation | Transform Your Business',
  description:
    'Automate your customer support with AI-powered solutions. Reduce response times by 90% and increase customer satisfaction. Book your free consultation today.',
  keywords:
    'AI customer support, automation, chatbot, customer service, artificial intelligence',
  authors: [{ name: 'AI Support Solutions' }],
  openGraph: {
    title: 'AI Customer Support Automation | Transform Your Business',
    description:
      'Automate your customer support with AI-powered solutions. Reduce response times by 90% and increase customer satisfaction.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
