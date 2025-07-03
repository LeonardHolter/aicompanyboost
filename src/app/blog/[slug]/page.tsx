import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'AI Voice Agents for Restaurants | Eliminate Missed Calls & Lost Revenue',
  description: 'Discover how AI voice agents like Nemmis help restaurants recover $90,000+/year in lost revenue by handling calls, orders, and upsells automatically.',
  keywords: ['AI voice agents', 'restaurant technology', 'missed calls', 'revenue recovery', 'phone automation', 'restaurant AI'],
  openGraph: {
    title: 'AI Voice Agents for Restaurants | Eliminate Missed Calls & Lost Revenue',
    description: 'Discover how AI voice agents like Nemmis help restaurants recover $90,000+/year in lost revenue by handling calls, orders, and upsells automatically.',
    type: 'article',
    url: 'https://nemmis.com/blog/ai-voice-agents-restaurants',
    images: [
      {
        url: '/restaurant.jpg',
        width: 1200,
        height: 600,
        alt: 'Restaurant interior with AI phone system',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents for Restaurants | Eliminate Missed Calls & Lost Revenue',
    description: 'Discover how AI voice agents like Nemmis help restaurants recover $90,000+/year in lost revenue by handling calls, orders, and upsells automatically.',
    images: ['/restaurant.jpg'],
  },
};

// This would typically come from a CMS or database
const post = {
  title: 'AI Voice Agents for Restaurants: Solving a $90,000 Problem',
  excerpt:
    'Missed phone calls are draining restaurant profits. Learn how AI voice agents can recover over $90,000 in lost revenue annually.',
  category: 'AI Technology',
  date: 'January 15, 2025',
  readTime: '8 min read',
  author: {
    name: 'Leonard Holter',
    role: 'Restaurant Owner & Tech Analyst',
    image: '/authors/sarah.jpg',
  },
  content: `
    <p>Missed phone calls are draining restaurant profits. The average restaurant misses up to 25% of incoming calls. With an average order value of $25 and roughly 10 missed calls per day, that's more than <strong>$90,000 in lost revenue annually</strong>.</p>

    <p>Let that sink in: $90,000. Just gone.</p>

    <p>In an industry as competitive and cutthroat as food service, every lost call matters. Most restaurants operate on razor-thin margins. Many close within a year. And those that survive? They're the ones embracing smarter, faster, more reliable systems — like AI voice agents.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>The Real Cost of Missed Calls</h2>
    <p>Restaurants have a phone problem. During peak hours, phones ring off the hook, staff are overwhelmed, and callers are often left hanging. This isn't just a minor inconvenience — it's a leak in your revenue stream.</p>

    <p>Let's do the math:</p>
    <ul>
      <li>10 missed calls/day x $25 average order = $250/day</li>
      <li>$250/day x 365 days = $91,250/year in missed revenue</li>
    </ul>

    <p>That's the cost of not picking up the phone.</p>

    <p>Now, imagine eliminating that loss with an AI assistant that answers instantly, 24/7.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Why Most Restaurants Won't Survive the Next Decade</h2>
    <p>The food service industry is brutal. Rising labor costs, demanding customers, delivery platforms cutting into margins, and now AI-enabled competitors. The ones that survive won't be the ones with the best food — they'll be the ones with the best systems.</p>

    <p>AI voice agents are part of that system.</p>

    <p>They don't sleep. They don't call in sick. And they never miss a call.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Do AI Voice Agents for Restaurants Actually Work?</h2>
    <p>Yes. And the tech is better than you think.</p>

    <p>The first time I called one, I couldn't believe I wasn't speaking to a real person. It greeted me warmly, let me customize my pizza order, handled allergy information, and even helped me book a table — all over the phone, with zero wait time. I was stunned.</p>

    <p>That's when I knew: every restaurant needs this.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Testing the Best AI Voice Agents (So You Don't Have To)</h2>
    <p>As a restaurant owner in Manhattan, I can't afford mistakes. I tested the top players to find the best solution.</p>

    <h3>Loman AI</h3>
    <p>I started with <a href="https://www.loman.ai/" target="_blank" rel="noopener" style="color: #00ADB5;">Loman AI</a>. Clean website, solid demo. The onboarding looked promising. But once I started using the dashboard, I hit a wall. A simple task like updating the menu turned into a headache. Support was slow, and I lost patience.</p>

    <h3>Eva AI</h3>
    <p>Next, I tried <a href="https://foreva.ai/" target="_blank" rel="noopener" style="color: #00ADB5;">Eva AI</a>, which Reddit users seemed to like. But from setup to support, it was a letdown. The team clearly didn't understand the restaurant business. It felt like a tech product built by people who'd never worked a dinner rush.</p>

    <p>After two failed attempts, I had enough.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>The Birth of Nemmis</h2>
    <p>I called up a close friend from college — a brilliant engineer. I told him: "What if we built an AI voice system <em>actually</em> made for restaurants? Something reliable, effortless to use, and tailored for our needs."</p>

    <p>He was in. A year later, after obsessing over the details and working closely with real restaurants, we launched <strong><a href="https://www.nemmis.com" style="color: #00ADB5;">Nemmis</a></strong>.</p>

    <p>And it just works.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>What Makes Nemmis Different</h2>
    <p>Nemmis isn't just another tech company trying to break into food service. We <em>are</em> restaurant people. We understand the chaos of peak hours, the stress of short-staffing, and the pressure to never miss a beat.</p>

    <p>Here's what Nemmis offers:</p>

    <h3>✓ 24/7 Call Handling</h3>
    <p>Never miss a call again. Whether it's 3 PM or 3 AM, Nemmis picks up instantly.</p>

    <h3>✓ Smart Order Taking</h3>
    <p>Nemmis can take full orders, confirm customizations, and even handle allergy concerns.</p>

    <h3>✓ Automated Upselling</h3>
    <p>It doesn't just take orders. It boosts them by suggesting add-ons, combos, and popular items.</p>

    <h3>✓ Seamless POS Integration</h3>
    <p>Nemmis integrates with over 50 POS systems. Orders go straight to your kitchen, no manual entry needed.</p>

    <h3>✓ Reduced Staff Workload</h3>
    <p>Free up your team to focus on guests, not phones.</p>

    <h3>✓ Multilingual Support</h3>
    <p>Serve more customers in their preferred language.</p>

    <h3>✓ Increased Revenue</h3>
    <p>No more missed calls = no more missed dollars.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Real Results from Real Restaurants</h2>
    <p>Since launching Nemmis, we've seen:</p>
    <ul>
      <li>100% reduction in missed calls</li>
      <li>30% increase in average order value (thanks to upsells)</li>
      <li>Faster service and better customer feedback</li>
      <li>Reduced stress for front-of-house teams</li>
    </ul>

    <p>And the best part? Most restaurants are fully up and running within <strong>24 hours</strong>.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Looking Ahead</h2>
    <p>AI isn't the future of restaurants — it's the present. And those who embrace it now will dominate the next decade.</p>

    <p>Voice agents will keep getting smarter. Soon, they'll handle loyalty programs, advanced reservations, personalized upsells based on caller history, and more.</p>

    <p>At Nemmis, we're building that future now.</p>

    <p>If you're a restaurant owner tired of losing money to missed calls, it's time to act.</p>

    <hr style="margin: 2rem 0; border: 1px solid #393E46;">

    <h2>Try Nemmis Today</h2>
    <p>We built Nemmis for restaurant owners, by restaurant owners. It's fast, reliable, and built to grow your business.</p>

    <p>Ready to stop losing $90,000/year?</p>

    <p><strong>Visit <a href="https://www.nemmis.com" style="color: #00ADB5;">Nemmis.com</a> to schedule your free demo.</strong></p>
  `,
};

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6 sm:mb-8">
        <Link href="/blog" className="hover:text-white transition-colors">
          Blog
        </Link>
      </div>

      {/* Article Header */}
      <article>
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Banner Image */}
        <div className="mb-8 sm:mb-12">
          <Image
            src="/restaurant.jpg"
            alt="Restaurant interior with AI phone system"
            width={1200}
            height={600}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg sm:rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div
          className="blog-content max-w-none prose prose-invert prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
