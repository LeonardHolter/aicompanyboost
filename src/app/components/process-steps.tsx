'use client';

import { useCalendly } from '../hooks/useCalendly';
import {
  MessageSquare,
  Brain,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

export default function ProcessSteps() {
  const { openCalendly } = useCalendly();

  const handleScheduleDemo = () => {
    console.log('Process Steps: Schedule demo button clicked!');

    // Simple direct link fallback for immediate functionality
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );

    // Also try the hook version
    openCalendly();
  };

  const steps = [
    {
      icon: MessageSquare,
      title: 'Customer Inquiry',
      description:
        'Customer asks a question through any channel - chat, email, or phone',
      time: '0 seconds',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description:
        'Our AI instantly analyzes the query and searches your knowledge base',
      time: '< 2 seconds',
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description:
        'AI provides accurate, personalized response based on your business data',
      time: '< 5 seconds',
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description:
        'Complex issues automatically route to your best-suited team member',
      time: 'When needed',
    },
    {
      icon: BarChart3,
      title: 'Continuous Learning',
      description:
        'AI learns from every interaction to improve future responses',
      time: 'Ongoing',
    },
    {
      icon: CheckCircle,
      title: 'Happy Customer',
      description:
        'Fast, accurate support leads to satisfied customers and better reviews',
      time: 'Always',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our AI Transform Your Support Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From inquiry to resolution in seconds, not hours. Here&apos;s
            exactly how it works:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="ml-8 bg-gray-50 rounded-lg p-6 flex-grow shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4 shadow-lg">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full inline-block mb-2 sm:mb-3">
                  {step.time}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-4 sm:mt-6">
                    <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-green-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Support Process?
            </h3>
            <p className="text-base sm:text-lg mb-5 sm:mb-6 opacity-90">
              See how our AI can handle 80% of your customer inquiries
              automatically
            </p>
            <button
              onClick={handleScheduleDemo}
              className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation min-h-[48px]"
            >
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
