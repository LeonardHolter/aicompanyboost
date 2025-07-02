import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
const post = {
  title: 'AI Voice Agents for Restaurants',
  excerpt:
    'Discover how AI voice agents are helping restaurants recover lost revenue and improve customer service.',
  category: 'AI Technology',
  date: 'July 2, 2025',
  readTime: '5 min read',
  author: {
    name: 'Leonard Holter',
    role: 'Restaurant Tech Analyst',
    image: '/authors/sarah.jpg',
  },
  content: `
    <p>AI voice agents for restaurants are solving a $90,000/year problem — missed phone calls. These smart assistants answer every call, take orders, and even upsell — automatically</p>
<br>
    <h2>The Challenge of Phone Management</h2>
    <p>For years, restaurants have struggled with managing phone calls effectively. The average restaurants miss up to 25% of calls. If the average order is $25 and 10 calls are missed per day, that's over $90,000 in lost revenue annually.</p>
<br>
    <h2>AI Voice Agents for Restaurants</h2>
    <p>Modern AI solutions like Nemmis are here to tackle this problem.</p>
    <ul>
      <li>24/7 call handling capability</li>
      <li>Intelligent order taking</li>
      <li>Automated upselling and cross-selling</li>
      <li>Seamless POS integration</li>
      <li>Improved customer satisfaction</li>
      <li>Reduced staff turnover</li>
      <li>Increased revenue</li>
      <li>Reduced costs</li>
      <li>Increased efficiency</li>
      <li>Increased customer retention</li>
    </ul>
<br>
  

    <h2>Looking Ahead</h2>
    <p>As AI technology continues to evolve, we can expect even more sophisticated features and capabilities that will further enhance restaurant operations and customer experience.</p>
  `,
};

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <Link href="/blog" className="hover:text-white transition-colors">
          Blog
        </Link>
      </div>

      {/* Article Header */}
      <article>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-400 mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/restaurant.jpg"
            alt="Restaurant interior with AI phone system"
            width={1200}
            height={600}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div
          className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
