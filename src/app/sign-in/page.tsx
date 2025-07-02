'use client';

import { useState } from 'react';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    // Simulate a login attempt
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1000);
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
            <a href="/try-nemmis" className="text-gray-300 hover:text-white transition-colors">
              Try Nemmis →
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-8 pb-20 max-w-lg mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Restaurant <span style={{ color: '#00ADB5' }}>Login</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Access your Nemmis dashboard to manage your AI assistant
          </p>
        </div>

        {/* Login Form */}
        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#393E46' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {showError && (
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FF5E57', color: 'white' }}>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Invalid login credentials</span>
                </div>
                <p className="text-sm mt-1">Please check your username and password and try again.</p>
              </div>
            )}

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
                style={{ backgroundColor: '#222831', color: 'white' }}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
                style={{ backgroundColor: '#222831', color: 'white' }}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 rounded-lg font-semibold text-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#00ADB5', color: 'white' }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Forgot your password?
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Need help accessing your account?
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </a>
        </div>
      </main>
    </div>
  );
} 