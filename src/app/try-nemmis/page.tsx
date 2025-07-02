'use client';

import { useState } from 'react';
import Vapi from '@vapi-ai/web';

export default function TryNemmis() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCall = async () => {
    console.log('Start call button clicked');
    setError(null);
    setIsLoading(true);

    try {
      console.log('Creating Vapi instance...');
      
      // Create Vapi instance
      const vapiInstance = new Vapi('6051a3dc-3fe4-4364-a86e-0a11cfa4419e');
      setVapi(vapiInstance);
      
      console.log('Setting up event listeners...');

      // Set up event listeners before starting call
      vapiInstance.on('call-end', () => {
        console.log('Call ended');
        setIsCallActive(false);
        setIsLoading(false);
      });

      vapiInstance.on('error', (error: any) => {
        console.error('Vapi error:', error);
        setError(`Call failed: ${error.message || 'Unknown error'}`);
        setIsCallActive(false);
        setIsLoading(false);
      });

      vapiInstance.on('call-start', () => {
        console.log('Call started event received');
        setIsCallActive(true);
        setIsLoading(false);
      });

      console.log('Starting call with assistant ID: 790e738c-bdff-46df-b879-e269ce578384');

      // Start the call
      await vapiInstance.start('790e738c-bdff-46df-b879-e269ce578384');
      
      console.log('Call start method called successfully');

    } catch (error: any) {
      console.error('Error starting call:', error);
      setError(error.message || 'Failed to start call');
      setIsLoading(false);
    }
  };

  const endCall = () => {
    console.log('End call button clicked');
    if (vapi) {
      vapi.stop();
      setIsCallActive(false);
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
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#00ADB5' }}>
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-white text-xl font-semibold">Nemmis</span>
              </a>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="/book-demo"
              className="hidden md:block px-6 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#FF5E57', color: 'white' }}
            >
              Book A Demo
            </a>
            <a href="/sign-in" className="text-gray-300 hover:text-white transition-colors">
              Sign In →
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-8 pb-20 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Try <span style={{ color: '#00ADB5' }}>Nemmis</span> Now
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience our AI phone system first-hand. Start a voice conversation<br />
            with our demo assistant and see how Nemmis handles orders, questions, and reservations.
          </p>
          <p className="text-md text-gray-400 max-w-3xl mx-auto">
            This is a real AI system trained on a pizza restaurant menu. Try placing an order, asking about ingredients, or making a reservation. The AI will respond just like it would for a real restaurant.
          </p>
        </div>

        {/* Demo Call Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-12 rounded-2xl" style={{ backgroundColor: '#393E46' }}>
            {/* Pizza Icon */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF5E57' }}>
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nemmis <span style={{ color: '#FF5E57' }}>Pizzeria</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Start a voice conversation with our demo assistant and experience how Nemmis handles real customer interactions
            </p>

            {/* Error Display */}
            {error && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#FF5E57', color: 'white' }}>
                <div className="font-semibold">Error:</div>
                <div className="text-sm mt-1">{error}</div>
                <button 
                  className="mt-2 px-4 py-1 bg-white text-red-600 rounded text-sm"
                  onClick={() => setError(null)}
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Call Status */}
            {isCallActive && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#00ADB5', color: 'white' }}>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="font-semibold">Connected - You can speak now!</span>
                </div>
              </div>
            )}

            {/* Loading Status */}
            {isLoading && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#FFA500', color: 'white' }}>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-spin"></div>
                  <span className="font-semibold">Connecting...</span>
                </div>
              </div>
            )}

            {/* Call Buttons */}
            <div className="mb-8">
              {!isCallActive ? (
                <button 
                  className="px-12 py-4 rounded-lg font-bold text-xl transition-all hover:opacity-90 hover:scale-105 transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#00ADB5', color: 'white' }}
                  onClick={startCall}
                  disabled={isLoading}
                >
                  {isLoading ? '🔄 Connecting...' : '🎤 Start Voice Chat with Nemmis'}
                </button>
              ) : (
                <button 
                  className="px-12 py-4 rounded-lg font-bold text-xl transition-all hover:opacity-90 hover:scale-105 transform duration-200"
                  style={{ backgroundColor: '#FF5E57', color: 'white' }}
                  onClick={endCall}
                >
                  📞 End Call
                </button>
              )}
            </div>

            {/* Demo Instructions */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-6">What to try:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#222831' }}>
                  <h4 className="font-semibold text-white mb-2">📋 Place an Order</h4>
                  <p className="text-gray-300 text-sm">"I'd like to order a large pepperoni pizza"</p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#222831' }}>
                  <h4 className="font-semibold text-white mb-2">❓ Ask Questions</h4>
                  <p className="text-gray-300 text-sm">"What are your hours?" or "What toppings do you have?"</p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#222831' }}>
                  <h4 className="font-semibold text-white mb-2">📅 Make Reservations</h4>
                  <p className="text-gray-300 text-sm">"I'd like to book a table for 4 people tonight"</p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#222831' }}>
                  <h4 className="font-semibold text-white mb-2">🎯 Test Upselling</h4>
                  <p className="text-gray-300 text-sm">Listen for suggestions of drinks and sides</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              This demo runs 24/7. The AI will respond to your voice just like a real restaurant employee. Make sure your microphone is enabled!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-demo" 
                className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 text-center"
                style={{ backgroundColor: '#FF5E57', color: 'white' }}
              >
                Ready to Book a Demo?
              </a>
              <a 
                href="/" 
                className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 text-center border border-gray-600 text-gray-300 hover:text-white"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You'll Experience
            </h2>
            <p className="text-lg text-gray-300">
              Every feature you'll hear in the conversation is available for your restaurant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Instant Response */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB5' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Response</h3>
              <p className="text-gray-300 text-sm">No hold music, no waiting. Responds immediately to your voice.</p>
            </div>

            {/* Smart Upselling */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF5E57' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Upselling</h3>
              <p className="text-gray-300 text-sm">Naturally suggests add-ons and upgrades during conversation.</p>
            </div>

            {/* Perfect Memory */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB5' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Perfect Memory</h3>
              <p className="text-gray-300 text-sm">Remembers everything you say throughout the conversation.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 