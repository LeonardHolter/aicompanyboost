import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 2,
    title:
      'Voice AI for Restaurants: The Best Tools to Cut Costs, Boost Orders, and Eliminate Missed Calls',
    excerpt:
      'Discover the top voice AI tools transforming restaurants in 2025, from Nemmis to ConverseNow, and how they help recover $90,000+ in lost revenue annually.',
    category: 'AI Technology',
    date: 'July 3, 2025',
    readTime: '12 min read',
    slug: 'voice-ai-for-restaurants-best-tools',
    image: '/voice-ai-restaurants-banner.jpg',
  },
  {
    id: 1,
    title: 'How AI is Transforming Restaurant Phone Operations',
    excerpt:
      'Discover how AI phone systems are helping restaurants recover lost revenue and improve customer service.',
    category: 'AI Technology',
    date: 'July 2, 2025',
    readTime: '5 min read',
    slug: 'ai-transforming-restaurant-phone-operations',
    image: '/restaurant.jpg',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Restaurant Success <span style={{ color: '#00ADB5' }}>Insights</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Expert advice, industry trends, and practical tips to help your restaurant thrive in the
          digital age.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article
            key={post.id}
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: '#393E46' }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={`${post.title} - Restaurant AI Technology`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 hover:text-[#00ADB5] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-[#00ADB5]">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
