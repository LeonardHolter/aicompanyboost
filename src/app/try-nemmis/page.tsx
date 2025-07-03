/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define interfaces for Vapi events
interface VapiError {
  message?: string;
  error?: string;
  toString?: () => string;
}

interface VapiMessage {
  type?: string;
  error?: string;
  message?: string;
}

export default function TryNemmis() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);

  const [vapi, setVapi] = useState<any>(null);

  // Initialize Vapi
  useEffect(() => {
    const initVapi = async () => {
      try {
        // Dynamically import Vapi to avoid SSR issues
        const { default: Vapi } = await import('@vapi-ai/web');

        // Use your actual credentials directly
        const publicKey = '6051a3dc-3fe4-4364-a86e-0a11cfa4419e';
        const vapiInstance = new Vapi(publicKey);

        // Set up event listeners

        vapiInstance.on('call-start', () => {
          console.log('Call started');
          setIsCallActive(true);
          setIsLoading(false);
        });

        vapiInstance.on('call-end', () => {
          console.log('Call ended');
          setIsCallActive(false);
          setIsLoading(false);
        });

        vapiInstance.on('error', (errorData: unknown) => {
          console.error('Vapi error:', errorData);
          // Better error handling for undefined error messages
          const vapiError = errorData as VapiError;
          const errorMessage =
            vapiError?.message ||
            vapiError?.error ||
            vapiError?.toString?.() ||
            'Unknown error occurred';
          setError('Call failed: ' + errorMessage);
          setIsCallActive(false);
          setIsLoading(false);
        });

        vapiInstance.on('message', (messageData: unknown) => {
          console.log('Vapi message:', messageData);
          const vapiMessage = messageData as VapiMessage;
          if (vapiMessage.type === 'error') {
            const errorMessage =
              vapiMessage.error || vapiMessage.message || 'Unknown error in message';
            setError('Call error: ' + errorMessage);
            setIsCallActive(false);
            setIsLoading(false);
          }
        });

        setVapi(vapiInstance);
      } catch (error) {
        console.error('Failed to initialize Vapi:', error);
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to initialize voice system';
        setError(errorMessage);
      }
    };

    initVapi();
  }, []);

  const startCall = async (): Promise<void> => {
    if (!vapi) {
      setError('Voice system not initialized');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Use your actual assistant ID directly
      const assistantId = '790e738c-bdff-46df-b879-e269ce578384';

      // Start the call with Vapi
      await vapi.start(assistantId);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
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

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
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
          {!isCallActive ? (
            <button
              onClick={startCall}
              disabled={isLoading || !vapi}
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#FF5E57', color: 'white' }}
            >
              {isLoading ? 'Starting Call...' : 'Start Call'}
            </button>
          ) : (
            <button
              onClick={endCall}
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#dc2626', color: 'white' }}
            >
              End Call
            </button>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {isCallActive && !error && (
            <p className="text-green-500 mt-2">Call is active - speak now!</p>
          )}
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

        {/* Status Notice */}
        <div
          className="max-w-4xl mx-auto mt-16 p-6 rounded-lg"
          style={{ backgroundColor: '#393E46' }}
        >
          <h3 className="text-white font-semibold mb-4">✅ Ready to Go!</h3>
          <div className="text-gray-300 space-y-2">
            <p>Your Nemmis voice assistant is configured and ready to take calls.</p>
            <p className="text-green-400">
              🎉 Click &ldquo;Start Call&rdquo; above to begin your conversation!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
