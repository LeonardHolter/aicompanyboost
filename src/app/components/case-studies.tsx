'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, TrendingUp, Clock, Users } from 'lucide-react';

export default function CaseStudies() {
  const testimonials = [
    {
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      logo: 'TF',
      name: 'Sarah Chen',
      role: 'Head of Customer Success',
      quote:
        'AI Company Boost handles 85% of our customer inquiries automatically. Our team can finally focus on growing the business.',
      results: [
        { metric: 'Response Time', before: '24 hours', after: '30 seconds' },
        { metric: 'Team Productivity', before: 'Baseline', after: '+150%' },
        { metric: 'Customer Satisfaction', before: '72%', after: '98%' },
      ],
      rating: 5,
    },
    {
      company: 'EcomMaster',
      industry: 'E-commerce',
      logo: 'EM',
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      quote:
        'AI Company Boost handles 85% of our customer inquiries automatically. Our team can finally focus on growing the business.',
      results: [
        { metric: 'Automated Responses', before: '20%', after: '85%' },
        { metric: 'Team Productivity', before: 'Baseline', after: '+160%' },
        { metric: 'Resolution Rate', before: '78%', after: '96%' },
      ],
      rating: 5,
    },
    {
      company: 'HealthTech Inc',
      industry: 'Healthcare',
      logo: 'HT',
      name: 'Dr. Emily Watson',
      role: 'Chief Technology Officer',
      quote:
        'The AI handles complex medical inquiries with incredible accuracy. Patients get instant help, and our staff loves it.',
      results: [
        { metric: 'Patient Satisfaction', before: '81%', after: '97%' },
        { metric: 'Staff Efficiency', before: 'Baseline', after: '+140%' },
        { metric: 'Query Accuracy', before: '85%', after: '98%' },
      ],
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are transforming their customer
            support with AI automation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Testimonial Content */}
                        <div>
                          {/* Company Header */}
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                              {testimonial.logo}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">
                                {testimonial.company}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {testimonial.industry}
                              </p>
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>

                          {/* Author */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-gray-600 text-sm">
                                {testimonial.role}
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                            Key Results
                          </h4>
                          <div className="space-y-4">
                            {testimonial.results.map((result, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between"
                              >
                                <span className="text-gray-600 text-sm">
                                  {result.metric}
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-red-600 text-sm line-through">
                                    {result.before}
                                  </span>
                                  <span className="text-gray-400">→</span>
                                  <span className="text-green-600 font-semibold">
                                    {result.after}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
            <div className="text-gray-600">Average Response Time Reduction</div>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150%</div>
            <div className="text-gray-600">Average Productivity Increase</div>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Average Satisfaction Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
