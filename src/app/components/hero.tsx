'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Loader2 } from 'lucide-react';
import { useCalendly } from '../hooks/useCalendly';

export default function Hero() {
  const { openCalendly } = useCalendly();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallLoading, setIsCallLoading] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  const handleBookConsultation = () => {
    console.log('Book consultation button clicked!');
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );
    openCalendly();
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');

    // Limit to 10 digits (US number without country code)
    const limitedDigits = digits.slice(0, 10);

    // Format as (XXX) XXX-XXXX
    if (limitedDigits.length >= 6) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    } else if (limitedDigits.length >= 3) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    } else {
      return limitedDigits;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    setCallStatus('');
  };

  const handleStartCall = async () => {
    if (!phoneNumber || phoneNumber.replace(/\D/g, '').length !== 10) {
      setCallStatus('Please enter a valid US phone number');
      return;
    }

    setIsCallLoading(true);
    setCallStatus('');

    try {
      // Convert formatted number to +1XXXXXXXXXX format
      const digits = phoneNumber.replace(/\D/g, '');
      const fullNumber = `+1${digits}`;

      const response = await fetch('/api/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: fullNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCallStatus(
          '🎉 Call initiated! You should receive a call within 30 seconds.'
        );
        setPhoneNumber('');
      } else {
        setCallStatus(`❌ ${data.error || 'Failed to initiate call'}`);
      }
    } catch (error) {
      console.error('Call error:', error);
      setCallStatus('❌ Failed to initiate call. Please try again.');
    } finally {
      setIsCallLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your
              <span className="text-blue-600 block">Customer Service</span>
              with AI Automation
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              Reduce customer service response times by 90%, increase customer
              satisfaction, and scale your customer support team without hiring.
              Our AI-powered customer service automation solution handles 80% of
              customer inquiries automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleBookConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px] py-4 text-lg touch-manipulation"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by 500+ businesses
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-xs text-gray-400">
                  ⭐⭐⭐⭐⭐ 4.9/5 (200+ reviews)
                </div>
              </div>
            </div>
          </div>

          {/* Live AI Demo Call Interface */}
          <div className="relative">
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 text-center">
                <Phone className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 opacity-90" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Live AI Demo
                </h3>
                <p className="text-base sm:text-lg opacity-90">
                  See it in action
                </p>
              </div>

              {/* Call Interface */}
              <div className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Get a Personal AI Pitch Call
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Enter your phone number and our AI will call you to
                    demonstrate our capabilities
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      US Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg touch-manipulation"
                      disabled={isCallLoading}
                    />
                  </div>

                  <Button
                    onClick={handleStartCall}
                    disabled={
                      isCallLoading ||
                      !phoneNumber ||
                      phoneNumber.replace(/\D/g, '').length !== 10
                    }
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold touch-manipulation"
                    size="lg"
                  >
                    {isCallLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Initiating Call...
                      </>
                    ) : (
                      <>
                        <Phone className="mr-2 h-5 w-5" />
                        Call Me Now
                      </>
                    )}
                  </Button>

                  {callStatus && (
                    <div
                      className={`text-center p-3 rounded-lg text-sm font-medium ${
                        callStatus.includes('🎉')
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {callStatus}
                    </div>
                  )}

                  <div className="text-xs text-gray-500 text-center space-y-1">
                    <p>• Call duration: ~2 minutes</p>
                    <p>• US phone numbers only</p>
                    <p>• Free demonstration call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats - Hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="text-2xl font-bold text-green-600">$10M</div>
              <div className="text-sm text-gray-600">Saved in Total Costs</div>
            </div>

            <div className="hidden lg:block absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
