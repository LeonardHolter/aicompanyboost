'use client';

import { useCalendly } from '../hooks/useCalendly';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

  const faqs = [
    {
      question: 'What happens to my existing support team?',
      answer:
        'Your team becomes more valuable, not replaced! AI Company Boost handles routine inquiries (password resets, order tracking, basic product questions), freeing your team to focus on complex issues, relationship building, and strategic work. Most customers see their team productivity increase by 150%.',
    },
    {
      question: 'How accurate are the AI responses?',
      answer:
        'Our AI maintains a 98% accuracy rate across all customer types. The system learns from your specific business data, past conversations, and knowledge base to provide contextually relevant responses. For complex issues it cannot handle, it seamlessly transfers to your human team with full conversation context.',
    },
    {
      question: 'Can I customize the AI for my specific business?',
      answer:
        'Absolutely! The AI learns your brand voice, product specifics, and business processes. You can upload your knowledge base, train it on past conversations, and customize response templates. Enterprise customers get fully custom AI training tailored to their industry and use cases.',
    },
    {
      question: 'What integrations do you support?',
      answer:
        'We integrate with 50+ platforms including Zendesk, Intercom, Freshdesk, Salesforce, Shopify, WordPress, Slack, Microsoft Teams, and more. Our REST API allows for custom integrations, and our team can help set up any specific connections you need.',
    },
    {
      question: 'Is my customer data secure?',
      answer:
        'Security is our top priority. We are SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is processed securely and never used to train models for other customers. Enterprise customers can opt for on-premise deployment for maximum control.',
    },
    {
      question: 'What if the AI makes a mistake?',
      answer:
        'Our AI includes confidence scoring and automatically escalates uncertain queries to human agents. When mistakes happen (rare), the system learns from corrections. We also provide a 30-day money-back guarantee, so you can try risk-free and see the results yourself.',
    },
    {
      question: 'How much does it really cost compared to hiring more staff?',
      answer:
        'Most customers save 60-80% on support costs. A new support agent costs $40-60K annually plus benefits, training, and management overhead. Our Professional plan at $597/month ($7,164/year) handles the workload of 2-3 agents while working 24/7 with no sick days or vacation time.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about AI Company Boost and
            how it can transform your customer support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
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
