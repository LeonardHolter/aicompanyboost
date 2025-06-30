'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Loader2, Send } from 'lucide-react';
import { useCalendly } from '../hooks/useCalendly';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function DemoSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { openCalendly } = useCalendly();

  // Auto-start the demo with initial AI greeting
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content:
          "Hello! I'm an AI support assistant. I can help you with order tracking, returns, product information, and more. What can I assist you with today?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare conversation history for OpenAI
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (data.success && data.response) {
        const aiMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        // Fallback response
        const fallbackMessage: Message = {
          role: 'assistant',
          content:
            data.fallback ||
            "I'm sorry, I'm experiencing technical difficulties. Please try again.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallbackMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content:
          "I'm sorry, I'm having trouble connecting. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleBookConsultation = () => {
    console.log('Demo Section: Book consultation button clicked!');
    window.open(
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation',
      '_blank'
    );
    openCalendly();
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our AI Customer Service Automation in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our AI customer service automation handles real
            customer inquiries instantly. Try our interactive AI customer
            support demo yourself.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Real AI Chat Interface - Always Visible */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Demo Header */}
            <div className="bg-blue-600 text-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-medium text-sm sm:text-base">
                    AI Support Assistant - Live Demo
                  </span>
                </div>
                <div className="text-xs sm:text-sm opacity-90 hidden sm:block">
                  Powered by OpenAI • Real AI Responses
                </div>
                <div className="text-xs opacity-90 sm:hidden">Live AI</div>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      message.role === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        AI
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-xs lg:max-w-md ${
                        message.role === 'user'
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        👤
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      AI
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Area */}
              <div className="border-t p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Ask about orders, returns, products..."
                    className="flex-1 border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button
                    size="sm"
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-blue-600 hover:bg-blue-700 min-w-[44px] min-h-[44px] touch-manipulation"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  🔥 Real AI demo powered by OpenAI - try it!
                </p>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Implement This for Your Business?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                See how this AI solution can transform your customer support.
                Book a personalized demo with your actual business data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBookConsultation}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book Custom Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
