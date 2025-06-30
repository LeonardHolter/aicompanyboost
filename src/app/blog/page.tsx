import { Metadata } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Customer Service Automation Blog | Expert Insights & Tips',
  description:
    'Discover expert insights on AI customer service automation, implementation guides, best practices, and industry trends. Learn how to transform your customer support with AI.',
  keywords: [
    'AI customer service automation blog',
    'customer service AI tips',
    'automated customer support guide',
    'AI chatbot best practices',
    'customer service automation trends',
  ],
};

const blogPosts = [
  {
    title: '10 Ways AI Customer Service Automation Reduces Support Costs',
    excerpt:
      'Learn how businesses are cutting customer service costs by 60-80% while improving customer satisfaction using AI automation.',
    slug: 'ai-customer-service-automation-reduces-costs',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Cost Savings',
  },
  {
    title: 'Complete Guide to Implementing AI Customer Service Automation',
    excerpt:
      'Step-by-step guide to successfully implementing AI customer service automation in your business, from planning to execution.',
    slug: 'guide-implementing-ai-customer-service-automation',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Implementation',
  },
  {
    title: 'AI vs Human Customer Service: Finding the Perfect Balance',
    excerpt:
      'Discover how to leverage both AI automation and human agents to create the optimal customer service experience.',
    slug: 'ai-vs-human-customer-service-balance',
    date: '2025-01-08',
    readTime: '6 min read',
    category: 'Strategy',
  },
  {
    title: 'Top 5 Customer Service Tasks Perfect for AI Automation',
    excerpt:
      'Identify which customer service tasks deliver the highest ROI when automated with AI technology.',
    slug: 'top-customer-service-tasks-ai-automation',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'Best Practices',
  },
  {
    title: 'ROI Calculator: AI Customer Service Automation Savings',
    excerpt:
      'Calculate the potential cost savings and ROI of implementing AI customer service automation for your business.',
    slug: 'roi-calculator-ai-customer-service-automation',
    date: '2025-01-03',
    readTime: '4 min read',
    category: 'Tools',
  },
  {
    title: 'AI Customer Service Automation Security Best Practices',
    excerpt:
      'Essential security considerations and best practices for implementing AI customer service automation safely.',
    slug: 'ai-customer-service-automation-security-best-practices',
    date: '2025-01-01',
    readTime: '10 min read',
    category: 'Security',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Customer Service Automation Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, implementation guides, and best practices for
              transforming your customer service with AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      className="text-sm text-gray-500"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on AI Customer Service Automation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest insights, case studies, and best practices
              delivered to your inbox. Join 5,000+ business leaders implementing
              AI customer service automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
