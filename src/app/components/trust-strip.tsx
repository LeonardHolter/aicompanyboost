import Image from 'next/image';

export default function TrustStrip() {
  const companies = [
    { name: 'Finn', logo: '/Finn.png', isImage: true },
    { name: 'ElevenLabs', logo: '/11labs.png', isImage: true },
    { name: 'Chase Bank', logo: '/chase.jpg', isImage: true },
    { name: 'Xiomoi', logo: '/xiomi.png', isImage: true },
    { name: 'John Deere', logo: '/JD.png', isImage: true },
    { name: 'WWF', logo: '/wwf.jpg', isImage: true },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Sliding logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee hover:animate-none">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex items-center space-x-2">
                  {company.isImage ? (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                      {company.logo}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex items-center space-x-2">
                  {company.isImage ? (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                      {company.logo}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
