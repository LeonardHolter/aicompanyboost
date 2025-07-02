import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#222831' }}>
      {/* Header */}
      <header className="relative">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#00ADB5' }}
              >
                <span className="text-white font-bold text-lg font-inter">N</span>
              </div>
              <span className="text-white text-xl font-semibold font-inter">Nemmis</span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book-demo"
              className="hidden md:block px-6 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#FF5E57', color: 'white' }}
            >
              Book A Demo
            </Link>
            <Link href="/sign-in" className="text-gray-300 hover:text-white transition-colors">
              Sign In →
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="px-6 pt-16 pb-20 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Revolutionise Your Restaurant&apos;s
          <br />
          <span style={{ color: '#00ADB5' }}>Communication with AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Nemmis helps the average restaurant recover 6-figures per year in lost
          <br />
          revenue by ensuring every call is answered through AI &mdash; instantly,
          <br />
          intelligently, and around the clock.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/book-demo"
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 text-center"
            style={{ backgroundColor: '#FF5E57', color: 'white' }}
          >
            Book A Demo
          </Link>
          <Link
            href="/try-nemmis"
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 text-center"
            style={{ backgroundColor: '#00ADB5', color: 'white' }}
          >
            Try Nemmis
          </Link>
        </div>

        {/* Trustpilot Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-white font-semibold">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  style={{ color: '#00ADB5' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-300">Trustpilot</span>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Trusted By Restaurants Across North America
          </h2>

          {/* Restaurant Logos - Sliding Animation */}
          <div className="logo-slider opacity-70">
            <div className="logo-track">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 mr-16">
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/thepizzanomad.png"
                    alt="The Pizza Nomad"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/toast.png"
                    alt="Toast Coffee + Kitchen"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/toscana.png"
                    alt="Toscana Italian American Restaurant"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/vietlounge.png"
                    alt="Viet Lounge"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/buchobagles.png"
                    alt="Bucho Bagles"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/thestation.png"
                    alt="The Station"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16">
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/thepizzanomad.png"
                    alt="The Pizza Nomad"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/toast.png"
                    alt="Toast Coffee + Kitchen"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/toscana.png"
                    alt="Toscana Italian American Restaurant"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/vietlounge.png"
                    alt="Viet Lounge"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/buchobagles.png"
                    alt="Bucho Bagles"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex justify-center min-w-[120px]">
                  <Image
                    src="/thestation.png"
                    alt="The Station"
                    width={120}
                    height={48}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center my-20">
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
          <div className="mx-6">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ADB5' }}></div>
          </div>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
        </div>

        {/* Value Proposition Section */}
        <div className="text-center mt-20 mb-16">
          {/* Big Text */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
            The average restaurant makes an extra{' '}
            <span style={{ color: '#FF5E57' }}>6-figures per year</span> with Nemmis
          </h2>

          {/* Small Text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Whether from saving missed calls, upselling on every order or cutting labour costs, the
            video below explain how Nemmis can change your restaurant forever
          </p>

          {/* YouTube Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#393E46' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#00ADB5' }}
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-semibold">Watch How Nemmis Works</p>
                  <p className="text-gray-300 text-sm mt-2">Click to play demo video</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            {/* Video Placeholder - Left Side */}
            <div className="w-full lg:w-1/2">
              <div
                className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#393E46' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#00ADB5' }}
                    >
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-semibold">Demo Video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Title and Description */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Unlock the <span style={{ color: '#FF5E57' }}>profits</span> in your
                  restaurant&apos;s operations
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  With Nemmis your staff can focus their time and energy on in-person customers,
                  while never having to worry about the phone ringing again.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                {/* Never Miss An Order Card */}
                <div className="p-6 rounded-2xl" style={{ backgroundColor: '#393E46' }}>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00ADB5' }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Never Miss An Order</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Nemmis will answer every call 24/7, so you never miss an opportunity to turn
                        a customer inquiry into a sale.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Increase Your AOV Card */}
                <div className="p-6 rounded-2xl" style={{ backgroundColor: '#393E46' }}>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00ADB5' }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Increase Your AOV</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Trained on your menu, Nemmis will suggest pairings to each customer based on
                        their existing order to increase average order value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 mb-16">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-20">
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
            <div className="mx-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ADB5' }}></div>
            </div>
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hear it from the restauranteurs <span style={{ color: '#00ADB5' }}>we support</span>
            </h2>
            <p className="text-lg text-gray-300">
              Try the system they use with the button below. (Place an order, make a reservation or
              ask a question)
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div className="testimonial-slider overflow-hidden">
            <div className="testimonial-track flex space-x-8">
              {/* First set of testimonials */}
              <div className="flex space-x-8">
                {/* Lucas Norman Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#EEEEEE', color: '#222831' }}
                    >
                      LN
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Lucas Norman</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 13, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I&apos;ve been using this AI system for the past 4 weeks at my pizza takeaway
                    and delivery restaurant. Our customer base is mostly older and they prefer to
                    call in their orders rather than using online options. Previously, our college
                    staff sometimes missed calls when busy with in-person customers, but now the
                    system handles the calls and inputs orders directly into our POS and printer.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">
                    Date of experience: December 05, 2024
                  </p>
                </div>

                {/* Samantha Noble Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#EEEEEE', color: '#222831' }}
                    >
                      SN
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Samantha Noble</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 20, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We rely a lot on phone orders for takeout, and with just one girl handling both
                    calls and in-person customers, things used to get pretty hectic. I kept hearing
                    from customers that our staff rushed them on the phone or even came off as rude.
                    Since we got Nemmis, those issues have pretty much vanished, and our team can
                    now focus on giving our in-house guests the attention they deserve.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">Date of experience: January 02, 2025</p>
                </div>

                {/* Michael Hamilton Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#393E46', color: '#EEEEEE' }}
                    >
                      F
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Michael Hamilton</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 18, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I&apos;ve had a fantastic experience with Nemmis. In the beginning, their team
                    did have some trouble getting the AI to learn and understand my menu, since it
                    has over 120 items, with lots of customizations for customers to make. But after
                    they figured that out I&apos;ve got nothing but good things to say. The AI makes
                    me thousands of dollars a month from upselling.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">
                    Date of experience: December 18, 2024
                  </p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8">
                {/* Lucas Norman Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#EEEEEE', color: '#222831' }}
                    >
                      LN
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Lucas Norman</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 13, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I&apos;ve been using this AI system for the past 4 weeks at my pizza takeaway
                    and delivery restaurant. Our customer base is mostly older and they prefer to
                    call in their orders rather than using online options. Previously, our college
                    staff sometimes missed calls when busy with in-person customers, but now the
                    system handles the calls and inputs orders directly into our POS and printer.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">
                    Date of experience: December 05, 2024
                  </p>
                </div>

                {/* Samantha Noble Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#EEEEEE', color: '#222831' }}
                    >
                      SN
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Samantha Noble</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 20, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We rely a lot on phone orders for takeout, and with just one girl handling both
                    calls and in-person customers, things used to get pretty hectic. I kept hearing
                    from customers that our staff rushed them on the phone or even came off as rude.
                    Since we got Nemmis, those issues have pretty much vanished, and our team can
                    now focus on giving our in-house guests the attention they deserve.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">Date of experience: January 02, 2025</p>
                </div>

                {/* Michael Hamilton Testimonial */}
                <div
                  className="min-w-[400px] p-6 rounded-2xl"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: '#393E46', color: '#EEEEEE' }}
                    >
                      F
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Michael Hamilton</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">US • 1 review</span>
                        <span className="text-gray-400 text-sm">Feb 18, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#00ADB5' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I&apos;ve had a fantastic experience with Nemmis. In the beginning, their team
                    did have some trouble getting the AI to learn and understand my menu, since it
                    has over 120 items, with lots of customizations for customers to make. But after
                    they figured that out I&apos;ve got nothing but good things to say. The AI makes
                    me thousands of dollars a month from upselling.
                  </p>
                  <p className="text-gray-400 text-xs mt-4">
                    Date of experience: December 18, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Try Nemmis Button - After Testimonials */}
          <div className="text-center mt-12">
            <Link
              href="/try-nemmis"
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#FF5E57', color: 'white' }}
            >
              Try Nemmis
            </Link>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center mt-20">
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
            <div className="mx-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ADB5' }}></div>
            </div>
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
          </div>
        </div>

        {/* Superhuman Employee Section */}
        <div className="text-center mt-20 mb-16">
          {/* Big Text */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your next <span style={{ color: '#FF5E57' }}>superhuman</span> employee
          </h2>

          {/* Small Text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
            Trained to talk like your best employee. Built to work like ten. Nemmis handles your
            phones with speed, memory, and perfect accuracy—24/7.
          </p>

          {/* Feature Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Take Delivery & Takeout Orders */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/takeout.png"
                  alt="Takeout Orders"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Take Delivery & <span style={{ color: '#FF5E57' }}>Takeout Orders</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every delivery and takeout call is handled with pinpoint accuracy—no errors, no
                confusion. Smart upsells run in the background, increasing order value effortlessly.
              </p>
            </div>

            {/* Plug Into Your POS - Extended Box */}
            <div
              className="lg:col-span-2 p-6 rounded-2xl text-left flex items-start space-x-8"
              style={{ backgroundColor: '#393E46' }}
            >
              <div className="flex-1 max-w-md">
                <div className="mb-8">
                  <Image
                    src="/yourPOS.png"
                    alt="POS Integration"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-8 leading-relaxed">
                  Plug Into <span style={{ color: '#FF5E57' }}>Your POS</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  With 45+ POS integrations, Nemmis sends every order straight to your system—no
                  manual input, no missed steps, and you&apos;ll never hear the phone ring again.
                </p>
              </div>
              <div className="relative w-80 h-48 opacity-60">
                <Image
                  src="/tevails.png"
                  alt="Tevails"
                  width={120}
                  height={48}
                  className="absolute top-2 left-4 h-8 object-contain filter grayscale"
                />
                <Image
                  src="/toast1.png"
                  alt="Toast"
                  width={120}
                  height={48}
                  className="absolute top-2 right-4 h-8 object-contain filter grayscale"
                />
                <Image
                  src="/clover.png"
                  alt="Clover"
                  width={120}
                  height={48}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 object-contain filter grayscale"
                />
                <Image
                  src="/owner.png"
                  alt="Owner"
                  width={120}
                  height={48}
                  className="absolute bottom-2 left-8 h-8 object-contain filter grayscale"
                />
                <Image
                  src="/lightspeed.png"
                  alt="Lightspeed"
                  width={120}
                  height={48}
                  className="absolute bottom-0 right-2 h-8 object-contain filter grayscale"
                />
              </div>
            </div>

            {/* Take Bookings & Triage Events */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/takebookings.png"
                  alt="Bookings"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Take <span style={{ color: '#FF5E57' }}>Bookings</span> & Triage Events
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nemmis handles all reservations and event inquiries—confirming, updating, or
                cancelling bookings—so no customer gets missed, no opportunity lost.
              </p>
            </div>

            {/* Secure Every Single Payment */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/payments.png"
                  alt="Payments"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Secure Every Single <span style={{ color: '#FF5E57' }}>Payment</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nemmis takes secure card payments directly over the phone, then sends paid orders to
                your POS—so you never make food without getting paid first.
              </p>
            </div>

            {/* Free Staff From FAQs */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/freeStaff.png"
                  alt="Staff FAQs"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Free <span style={{ color: '#FF5E57' }}>Staff</span> From FAQs
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Common questions like hours, parking, or menu items are instantly answered—freeing
                your team to focus on service, not repeating the same answers.
              </p>
            </div>

            {/* Memory That Drives Revenue */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/DrivesRevenue.png"
                  alt="Memory Revenue"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Memory That <span style={{ color: '#FF5E57' }}>Drives Revenue</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nemmis never has a bad day, never calls in sick, never is rude to a customer and is
                always improving with every call it takes.
              </p>
            </div>

            {/* No Language Barriers */}
            <div className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#393E46' }}>
              <div className="mb-4">
                <Image
                  src="/Barriers.png"
                  alt="Language Barriers"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                No Language <span style={{ color: '#FF5E57' }}>Barriers</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Serve guests in their preferred language—no staff required. Nemmis breaks language
                barriers so you never miss a customer, or their preferred language.
              </p>
            </div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center mt-20">
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
            <div className="mx-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ADB5' }}></div>
            </div>
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
          </div>

          {/* Onboarding Section */}
          <div className="text-center mt-20 mb-16">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How does <span style={{ color: '#FF5E57' }}>onboarding</span> work
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-16">
              An easy onboarding process that&apos;s done in 3 steps over 15 days,
              <br />
              requiring 45 minutes of your time
            </p>

            {/* Onboarding Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1: Onboarding Form */}
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#393E46' }}>
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#00ADB5' }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Onboarding form</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fill out a quick form that give our team the knowledge to train and customise your
                  Nemmis agent to your restaurant&apos;s needs and requirements
                </p>
              </div>

              {/* Step 2: Clarity Call */}
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#393E46' }}>
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#00ADB5' }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Clarity Call</h3>
                <p className="text-gray-300 leading-relaxed">
                  Meet with our Head of Development to iron out how each customer call scenario
                  should be handled.
                </p>
              </div>

              {/* Step 3: Training & Launch */}
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#393E46' }}>
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#00ADB5' }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Training & Launch</h3>
                <p className="text-gray-300 leading-relaxed">
                  From there our team will take 5 - 10 days to build, integrate and test your Nemmis
                  agent after which we will launch by simply forwarding all of your current calls to
                  Nemmis.
                </p>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center mt-20">
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
            <div className="mx-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ADB5' }}></div>
            </div>
            <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: '#393E46' }}></div>
          </div>

          {/* Common Questions Section */}
          <div className="text-center mt-20 mb-16">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Common questions
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-16">
              Still have questions? We&apos;ve answered some of the most common
              <br />
              queries below to help you make an informed decision.
            </p>

            {/* FAQ Accordion */}
            <div className="max-w-5xl mx-auto">
              <div className="border border-gray-600 rounded-lg overflow-hidden">
                {/* Question 1 */}
                <details className="group">
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors"
                    style={{ backgroundColor: '#393E46' }}
                  >
                    <span className="text-white text-lg font-medium text-left">
                      How will my kitchen be able to receive the orders that Nemmis takes?
                    </span>
                    <span className="text-gray-300 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 pt-0" style={{ backgroundColor: '#393E46' }}>
                    <p className="text-gray-300 text-left leading-relaxed">
                      Nemmis will be able to place the orders through an API connection to your POS
                      and/or Printer. Alternatively you can also choose to simply take orders
                      through our dashboard.
                    </p>
                  </div>
                </details>

                {/* Question 2 */}
                <details className="group border-t border-gray-600">
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors"
                    style={{ backgroundColor: '#393E46' }}
                  >
                    <span className="text-white text-lg font-medium text-left">
                      Can Nemmis process payments over the phone?
                    </span>
                    <span className="text-gray-300 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 pt-0" style={{ backgroundColor: '#393E46' }}>
                    <p className="text-gray-300 text-left leading-relaxed">
                      Yes, we can send a payment link via SMS or process card details directly
                      through your POS using an encrypted connection.
                    </p>
                  </div>
                </details>

                {/* Question 3 */}
                <details className="group border-t border-gray-600">
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors"
                    style={{ backgroundColor: '#393E46' }}
                  >
                    <span className="text-white text-lg font-medium text-left">
                      How will Nemmis handle customers who struggle to speak English?
                    </span>
                    <span className="text-gray-300 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 pt-0" style={{ backgroundColor: '#393E46' }}>
                    <p className="text-gray-300 text-left leading-relaxed">
                      Nemmis is trained to understand many accents, including South Asian, East
                      Asian, Caribbean, and more. It ensures clear communication for customers whose
                      first language isn&apos;t English.
                    </p>
                  </div>
                </details>

                {/* Question 4 */}
                <details className="group border-t border-gray-600">
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors"
                    style={{ backgroundColor: '#393E46' }}
                  >
                    <span className="text-white text-lg font-medium text-left">
                      How would you provide us with support, and do we need to pay for it?
                    </span>
                    <span className="text-gray-300 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 pt-0" style={{ backgroundColor: '#393E46' }}>
                    <p className="text-gray-300 text-left leading-relaxed">
                      You&apos;ll get a lifetime private-chat with our team as soon as you sign up.
                      This lets you ask questions, give feedback, or schedule direct calls with our
                      developers for free —no chatbots or long wait times.
                    </p>
                  </div>
                </details>

                {/* Question 5 */}
                <details className="group border-t border-gray-600">
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors"
                    style={{ backgroundColor: '#393E46' }}
                  >
                    <span className="text-white text-lg font-medium text-left">
                      Will I be able to see a report of how Nemmis is doing?
                    </span>
                    <span className="text-gray-300 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 pt-0" style={{ backgroundColor: '#393E46' }}>
                    <p className="text-gray-300 text-left leading-relaxed">
                      You&apos;ll find all performance data in a custom dashboard we provide you
                      with, including reports on calls and other key metrics.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-20" style={{ backgroundColor: '#393E46' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Text */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#FF5E57' }}
            >
              Give your restaurant an edge
            </h2>
            <p className="text-lg text-gray-300">
              Built for restaurants. Trusted by owners. Feared by hold music
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#00ADB5' }}
              >
                <span className="text-white font-bold text-xl font-inter">N</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold font-inter">Nemmis</h3>
                <p className="text-gray-400 text-sm">
                  Revolutionise your restaurant&apos;s communication
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">Get in touch</p>
              <Link
                href="mailto:contact@nemmis.com"
                className="text-white text-lg font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#00ADB5' }}
              >
                contact@nemmis.com
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Nemmis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
