import {
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Zap,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PainPromise() {
  const painPoints = [
    {
      icon: Clock,
      title: 'Slow Response Times',
      description: 'Customers wait hours or days for simple support replies',
      color: 'text-red-600',
    },
    {
      icon: DollarSign,
      title: 'High Support Costs',
      description: 'Growing support team expenses without scalable solutions',
      color: 'text-red-600',
    },
    {
      icon: Users,
      title: 'Overwhelmed Staff',
      description: 'Support agents burned out handling repetitive inquiries',
      color: 'text-red-600',
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'AI provides immediate answers to 80% of customer questions',
      color: 'text-green-600',
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs by 70%',
      description: 'Scale support without hiring additional team members',
      color: 'text-green-600',
    },
    {
      icon: Users,
      title: 'Happy Team',
      description:
        'Staff focuses on complex issues while AI handles routine tasks',
      color: 'text-green-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Struggling with Customer Support
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your biggest pain points into competitive advantages with
            AI automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Pain Points */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Current Challenges
              </h3>
            </div>

            <div className="space-y-6">
              {painPoints.map((pain, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <pain.icon
                        className={`h-6 w-6 ${pain.color} mt-1 flex-shrink-0`}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {pain.title}
                        </h4>
                        <p className="text-gray-600">{pain.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our AI Solution
              </h3>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <solution.icon
                        className={`h-6 w-6 ${solution.color} mt-1 flex-shrink-0`}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            The Difference is Clear
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                4-24h
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">
                Traditional Response
              </div>
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                ↓
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                &lt;30s
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                AI Response
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                $50K+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">
                Annual Support Costs
              </div>
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                ↓
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                $15K
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                With AI Automation
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                65%
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">
                Customer Satisfaction
              </div>
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                ↓
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                With Our Solution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
