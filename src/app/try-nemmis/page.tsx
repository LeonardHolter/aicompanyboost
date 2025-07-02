'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CallResponse {
  success: boolean;
  error?: string;
}

export default function TryNemmis() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCall = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/start-call');
      const data: CallResponse = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to start call');
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

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
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-8 pb-20 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Try <span style={{ color: '#FF5E57' }}>Nemmis</span> Now
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience how Nemmis handles your restaurant&apos;s calls. Place an order,
            <br />
            make a reservation, or ask about the menu.
          </p>
        </div>

        {/* Call Button */}
        <div className="text-center mb-16">
          <button
            onClick={startCall}
            disabled={isLoading}
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#FF5E57', color: 'white' }}
          >
            {isLoading ? 'Starting Call...' : 'Start Call'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Example Prompts */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Try saying...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#393E46' }}>
              <h3 className="font-semibold text-white mb-2">📋 Place an Order</h3>
              <p className="text-gray-300 text-sm">
                &ldquo;I&apos;d like a large pepperoni pizza&rdquo;
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#393E46' }}>
              <h3 className="font-semibold text-white mb-2">❓ Ask Questions</h3>
              <p className="text-gray-300 text-sm">&ldquo;What are your hours?&rdquo;</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#393E46' }}>
              <h3 className="font-semibold text-white mb-2">📅 Make Reservations</h3>
              <p className="text-gray-300 text-sm">
                &ldquo;I&apos;d like to book a table for tonight&rdquo;
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
