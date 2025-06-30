'use client';

import { useCalendly } from '../hooks/useCalendly';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect, useMemo } from 'react';

const FAQS_DATA = [
  {
    question: 'How does AI customer service automation work?',
    answer:
      'Our AI customer service automation platform integrates with your existing support systems (like Zendesk, Intercom, or email) and uses advanced natural language processing to understand and respond to customer inquiries automatically. The AI learns from your existing support documentation and can handle 80% of common customer service requests without human intervention.',
  },
  {
    question:
      'What types of customer service inquiries can AI automation handle?',
    answer:
      'Our AI customer service automation excels at handling order tracking, product information, billing questions, technical support, returns and refunds, account management, and general FAQ responses. It can process inquiries in multiple languages and escalate complex issues to human agents when necessary.',
  },
  {
    question: 'How quickly can we implement AI customer service automation?',
    answer:
      'Most businesses can have our AI customer service automation system running within 7 days. This includes integration with your existing customer support platforms, AI training on your specific business data, and team training. Simple setups can be completed in as little as 3-5 days.',
  },
  {
    question: 'Will AI automation replace our customer service team?',
    answer:
      'No, our AI customer service automation is designed to augment your team, not replace them. The AI handles routine inquiries automatically, freeing up your human agents to focus on complex issues, relationship building, and high-value customer interactions. Most clients see their team efficiency increase by 300-400%.',
  },
  {
    question: 'What does AI customer service automation cost?',
    answer:
      'Our AI customer service automation solution costs $1,500 for setup and implementation, plus $299 per month for the service. This includes unlimited customer interactions, ongoing AI training, platform integrations, and 24/7 support. Most businesses save $5,000+ monthly in customer service costs.',
  },
  {
    question: 'Is AI customer service automation secure and compliant?',
    answer:
      'Yes, our AI customer service automation platform is built with enterprise-grade security. We maintain SOC 2 compliance, GDPR compliance, and follow strict data protection protocols. All customer data is encrypted in transit and at rest, and we never use your data to train models for other companies.',
  },
];

export default function FAQ() {
  const { openCalendly } = useCalendly();

  const handleBookConsultation = () => {
    console.log('FAQ: Book consultation button clicked!');

    // Simple direct link fallback for immediate functionality
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );

    // Also try the hook version
    openCalendly();
  };

  // Memoize the structured data to prevent recreation on every render
  const faqStructuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
    []
  );

  // Add FAQ structured data to head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      const scripts = document.head.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((s) => {
        if (s.textContent?.includes('"@type":"FAQPage"')) {
          document.head.removeChild(s);
        }
      });
    };
  }, [faqStructuredData]);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About AI Customer Service Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about implementing AI customer service
            automation for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS_DATA.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Our team is here to help! Book a free consultation to discuss your
              specific needs and see how AI Company Boost can work for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors touch-manipulation min-h-[44px]"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
