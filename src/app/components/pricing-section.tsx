'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const handleBookConsultation = () => {
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with AI-powered customer support automation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white text-center py-4">
              <span className="text-lg font-semibold">
                Complete AI Support Solution
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  $1,500
                  <span className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-600">
                    {' '}
                    setup
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                  $299
                  <span className="text-base sm:text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Everything you need to automate your customer support
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    80% of tickets automated
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    90% faster response times
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    24/7 AI support coverage
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Custom AI training for your business
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Integration with existing systems
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Ongoing support & optimization
                  </span>
                </div>
              </div>

              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold touch-manipulation"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Get started with a free consultation to discuss your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
