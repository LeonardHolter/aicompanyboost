'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Shield, Award } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const handleBookConsultation = () => {
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );
  };

  return (
    <main className="min-h-screen">
      <Header />

      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Headline */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We help businesses automate 80% of their support tickets using
              custom AI
              <span className="text-blue-600"> — in under 7 days.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable customer support automation that actually works for
              your business.
            </p>
          </div>

          {/* Origin Story */}
          <section className="mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Why We Started AI Company Boost
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We started this agency after watching companies waste
                  thousands of hours answering the same customer questions over
                  and over. Most AI solutions were either too generic or
                  required heavy dev work. We built a fast, reliable system to
                  solve real support problems — without code or complexity.
                </p>
                <div className="mt-6 sm:mt-8 inline-flex items-center bg-white px-4 sm:px-6 py-3 rounded-full shadow-sm">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    $10M+ saved in support costs for 500+ businesses
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                College students from prestigious Columbia University with
                backgrounds in automation, customer ops, and enterprise AI.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Team Photo */}
              <div className="order-2 lg:order-1">
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 sm:p-8 text-center">
                  {/* Team Photo */}
                  <div className="w-full h-48 sm:h-64 bg-white rounded-xl overflow-hidden mb-4 shadow-sm">
                    <Image
                      src="/team.jpg"
                      alt="AI Company Boost Team"
                      width={400}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    The AI Company Boost team
                  </p>
                </div>
              </div>

              {/* Team Info */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We&apos;re college students from Columbia University with
                    backgrounds in automation, customer ops, and LLMs. Our
                    founder previously worked on internal tooling at high-growth
                    SaaS companies and Fortune 500 enterprises, and saw
                    firsthand how automation saves time and sanity when done
                    right.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-3 sm:p-4 bg-white border rounded-xl shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        AI Engineering
                      </h3>
                      <p className="text-xs text-gray-600">
                        OpenAI, custom LLMs
                      </p>
                    </div>

                    <div className="text-center p-3 sm:p-4 bg-white border rounded-xl shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        Customer Ops
                      </h3>
                      <p className="text-xs text-gray-600">Zendesk, Intercom</p>
                    </div>

                    <div className="text-center p-3 sm:p-4 bg-white border rounded-xl shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        Security
                      </h3>
                      <p className="text-xs text-gray-600">SOC 2, GDPR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Want to see what this could look like for your business?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Book a free 15-minute consultation and we&apos;ll show you
                exactly how we can automate your most time-consuming support
                tasks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                <Button
                  size="lg"
                  onClick={handleBookConsultation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 text-lg min-h-[56px] touch-manipulation"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 px-6 sm:px-8 py-4 text-lg hover:bg-gray-50 min-h-[56px] touch-manipulation"
                  onClick={() => (window.location.href = '/#demo')}
                >
                  Try Live Demo
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
