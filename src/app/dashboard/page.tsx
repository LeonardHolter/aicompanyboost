'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Phone,
  DollarSign,
  Clock,
  ShoppingBag,
  TrendingUp,
  Users,
  MessageSquare,
  Settings as SettingsIcon,
  Zap,
  Volume2,
  Gauge,
  Mic,
  Calendar,
} from 'lucide-react';
import Image from 'next/image';

// Sample data for the call graph
const callData = [
  { time: '6:00', calls: 2 },
  { time: '7:00', calls: 5 },
  { time: '8:00', calls: 8 },
  { time: '9:00', calls: 12 },
  { time: '10:00', calls: 15 },
  { time: '11:00', calls: 22 },
  { time: '12:00', calls: 35 },
  { time: '13:00', calls: 42 },
  { time: '14:00', calls: 28 },
  { time: '15:00', calls: 18 },
  { time: '16:00', calls: 15 },
  { time: '17:00', calls: 25 },
  { time: '18:00', calls: 38 },
  { time: '19:00', calls: 45 },
  { time: '20:00', calls: 40 },
  { time: '21:00', calls: 32 },
  { time: '22:00', calls: 18 },
  { time: '23:00', calls: 8 },
];

// Sample conversation logs
const conversationLogs = [
  {
    id: 1,
    time: '7:04 PM',
    date: 'Dec 17',
    phone: '+1 610 787 2997',
    sentiment: 'Excellent',
    summary:
      'The user placed an order for pickup at Crust Pizza, requesting a large Hawaiian Detroit pizza and ten wings with buffalo sauce, along with ranch and blue cheese dressings. The agent confirmed the order details and provided the total cost, successfully completing the transaction.',
    duration: '02:45',
  },
  {
    id: 2,
    time: '6:53 PM',
    date: 'Dec 17',
    phone: '+1 215 439 3151',
    sentiment: 'Excellent',
    summary:
      'The user, Mike, successfully placed an order for two $10 pizzas (one small Detroit style with tomato cheese and one small round Neapolitan with traditional cheese) along with a serving of buffalo tots. The total for the order was $29.15, and the agent confirmed that the order would be ready for pickup in about 25 minutes.',
    duration: '02:11',
  },
  {
    id: 3,
    time: '6:28 PM',
    date: 'Dec 17',
    phone: '+1 484 555 7821',
    sentiment: 'Excellent',
    summary:
      'Customer called to inquire about gluten-free menu options. The agent provided detailed information about available gluten-free pizza crusts and pasta dishes, helping the customer make an informed decision about their dietary needs.',
    duration: '01:58',
  },
  {
    id: 4,
    time: '6:15 PM',
    date: 'Dec 17',
    phone: '+1 267 892 4103',
    sentiment: 'Excellent',
    summary:
      'Reservation request for 6 people at 7:30 PM was successfully processed. The agent collected customer information and confirmed table availability, providing confirmation details for the evening reservation.',
    duration: '01:42',
  },
];

// Integration options
const integrations = [
  { name: 'Tevails', logo: '/tevails.png', connected: false },
  { name: 'Toast', logo: '/toast1.png', connected: true },
  { name: 'Clover', logo: '/clover.png', connected: false },
  { name: 'Owner', logo: '/owner.png', connected: false },
  { name: 'Lightspeed', logo: '/lightspeed.png', connected: false },
];

// Sample table data
const tables = [
  { id: 1, status: 'available' },
  { id: 2, status: 'booked' },
  { id: 3, status: 'available' },
  { id: 4, status: 'booked' },
  { id: 5, status: 'available' },
  { id: 6, status: 'booked' },
  { id: 7, status: 'available' },
  { id: 8, status: 'available' },
  { id: 9, status: 'booked' },
  { id: 10, status: 'available' },
  { id: 11, status: 'booked' },
  { id: 12, status: 'available' },
  { id: 13, status: 'booked' },
  { id: 14, status: 'available' },
  { id: 15, status: 'booked' },
];

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [ambientNoise, setAmbientNoise] = useState(0.3);
  const [selectedVoice, setSelectedVoice] = useState('sarah');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#222831' }}
      >
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'logs', label: 'Logs', icon: MessageSquare },
    { id: 'booking', label: 'Booking', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
    { id: 'integrations', label: 'Integrations', icon: Zap },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#222831' }}>
      {/* Header */}
      <header className="border-b border-gray-700" style={{ backgroundColor: '#393E46' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#00ADB5' }}
              >
                <span className="text-white font-bold text-lg font-inter">N</span>
              </div>
              <span className="text-white text-xl font-semibold font-inter">Nemmis Dashboard</span>
            </div>

            {/* User Info and Sign Out */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#FF5E57', color: 'white' }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-b border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#00ADB5] text-[#00ADB5]'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back! 👋</h1>
              <p className="text-gray-300">Here&apos;s how your AI assistant performed today</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {/* Total Orders */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Total Orders</p>
                    <p className="text-2xl font-bold text-white">127</p>
                    <p className="text-green-400 text-sm flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +12% from yesterday
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00ADB5' }}>
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Revenue */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-white">$3,247</p>
                    <p className="text-green-400 text-sm flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +18% from yesterday
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00ADB5' }}>
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Revenue Saved */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Revenue Saved</p>
                    <p className="text-2xl font-bold text-white">$812</p>
                    <p className="text-orange-400 text-sm flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      25% calls saved
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FF5E57' }}>
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Time Saved */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Time Saved</p>
                    <p className="text-2xl font-bold text-white">4.2 hrs</p>
                    <p className="text-blue-400 text-sm flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      Staff productivity
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00ADB5' }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Calls Handled */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Calls Handled</p>
                    <p className="text-2xl font-bold text-white">342</p>
                    <p className="text-green-400 text-sm flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-1" />
                      100% answered
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00ADB5' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Call Activity Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart */}
              <div className="lg:col-span-2 p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Call Activity Today</h3>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#00ADB5' }}
                    ></div>
                    <span className="text-gray-400 text-sm">Calls per hour</span>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={callData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                      <XAxis dataKey="time" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#222831',
                          border: '1px solid #555',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="calls"
                        stroke="#00ADB5"
                        strokeWidth={3}
                        dot={{ fill: '#00ADB5', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#00ADB5', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Side Stats */}
              <div className="space-y-6">
                {/* Peak Hours */}
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                  <h4 className="text-lg font-bold text-white mb-4">Peak Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lunch Rush</span>
                      <span className="text-white font-semibold">12:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Dinner Rush</span>
                      <span className="text-white font-semibold">18:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Busiest Hour</span>
                      <span className="text-white font-semibold">19:00 (45 calls)</span>
                    </div>
                  </div>
                </div>

                {/* AI Performance */}
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                  <h4 className="text-lg font-bold text-white mb-4">AI Performance</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Order Accuracy</span>
                        <span className="text-white">98.5%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: '#00ADB5', width: '98.5%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Customer Satisfaction</span>
                        <span className="text-white">96.2%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: '#00ADB5', width: '96.2%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Upsell Success</span>
                        <span className="text-white">34.8%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: '#00ADB5', width: '34.8%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-white">Order #1247 - Large Pizza with extra cheese</span>
                  </div>
                  <span className="text-gray-400 text-sm">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-600">
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white">Reservation for 4 people at 7:30 PM</span>
                  </div>
                  <span className="text-gray-400 text-sm">5 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-white">Order #1246 - Pasta Carbonara + Tiramisu</span>
                  </div>
                  <span className="text-gray-400 text-sm">8 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span className="text-white">Customer inquiry about gluten-free options</span>
                  </div>
                  <span className="text-gray-400 text-sm">12 minutes ago</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Logs Tab */}
        {activeTab === 'logs' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Conversation Logs</h2>
              <p className="text-gray-300">Recent AI conversations with sentiment analysis</p>
            </div>

            <div className="space-y-4">
              {conversationLogs.map(log => (
                <div key={log.id} className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{log.time}</h4>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {log.sentiment}
                          </span>
                          <button className="text-gray-400 hover:text-white">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{log.date}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 leading-relaxed">{log.summary}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{log.phone}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1m0 4.5V19a2 2 0 002 2h12a2 2 0 002-2v-6.5m0 0V12a2 2 0 00-2-2H6a2 2 0 00-2 2v.5z"
                        />
                      </svg>
                      <span className="text-sm">Play</span>
                      <span className="text-sm">({log.duration})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">AI Assistant Settings</h2>
              <p className="text-gray-300">Configure your AI voice assistant preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Voice Selection */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center space-x-2 mb-4">
                  <Mic className="w-5 h-5 text-[#00ADB5]" />
                  <h3 className="text-lg font-bold text-white">Voice Selection</h3>
                </div>
                <div className="space-y-3">
                  {['sarah', 'david', 'emma', 'alex'].map(voice => (
                    <label key={voice} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="voice"
                        value={voice}
                        checked={selectedVoice === voice}
                        onChange={e => setSelectedVoice(e.target.value)}
                        className="w-4 h-4 text-[#00ADB5] focus:ring-[#00ADB5]"
                      />
                      <div className="flex-1">
                        <p className="text-white font-medium capitalize">{voice}</p>
                        <p className="text-gray-400 text-sm">
                          {voice === 'sarah' && 'Friendly, professional female voice'}
                          {voice === 'david' && 'Warm, confident male voice'}
                          {voice === 'emma' && 'Clear, articulate female voice'}
                          {voice === 'alex' && 'Calm, reassuring male voice'}
                        </p>
                      </div>
                      <button className="px-3 py-1 rounded text-xs bg-gray-600 text-white hover:bg-gray-500">
                        Preview
                      </button>
                    </label>
                  ))}
                </div>
              </div>

              {/* Conversation Speed */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center space-x-2 mb-4">
                  <Gauge className="w-5 h-5 text-[#00ADB5]" />
                  <h3 className="text-lg font-bold text-white">Conversation Speed</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Speaking Rate</span>
                      <span className="text-white">{voiceSpeed}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={voiceSpeed}
                      onChange={e => setVoiceSpeed(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Slow (0.5x)</span>
                      <span>Normal (1.0x)</span>
                      <span>Fast (2.0x)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient Noise */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center space-x-2 mb-4">
                  <Volume2 className="w-5 h-5 text-[#00ADB5]" />
                  <h3 className="text-lg font-bold text-white">Ambient Noise</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Restaurant Background Noise</span>
                      <span className="text-white">{Math.round(ambientNoise * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={ambientNoise}
                      onChange={e => setAmbientNoise(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Silent</span>
                      <span>Moderate</span>
                      <span>Busy</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Adjusts AI sensitivity to handle background restaurant noise
                  </p>
                </div>
              </div>

              {/* Additional Settings */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <h3 className="text-lg font-bold text-white mb-4">Additional Settings</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Auto-upsell suggestions</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Call recording</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Sentiment analysis</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Real-time notifications</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations Tab */}
        {activeTab === 'integrations' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Integrations</h2>
              <p className="text-gray-300">Connect your existing restaurant systems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map(integration => (
                <div
                  key={integration.name}
                  className="p-6 rounded-xl border border-gray-600 flex flex-col items-center justify-center space-y-6"
                  style={{ backgroundColor: '#393E46' }}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={80}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                        priority
                      />
                    </div>
                    {integration.connected && (
                      <div className="w-3 h-3 bg-green-400 rounded-full absolute top-4 right-4"></div>
                    )}
                  </div>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      integration.connected
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-[#00ADB5] text-white hover:bg-[#00ADB5]/90'
                    }`}
                  >
                    {integration.connected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Tab */}
        {activeTab === 'booking' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Table Booking</h2>
              <p className="text-gray-300">Manage your restaurant table reservations</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Available Tables</p>
                    <p className="text-2xl font-bold text-white">
                      {tables.filter(t => t.status === 'available').length}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-600">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Booked Tables</p>
                    <p className="text-2xl font-bold text-white">
                      {tables.filter(t => t.status === 'booked').length}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-600">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Total Tables</p>
                    <p className="text-2xl font-bold text-white">{tables.length}</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00ADB5' }}>
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tables Grid */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#393E46' }}>
              <h3 className="text-xl font-bold text-white mb-6">Restaurant Floor Plan</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {tables.map(table => (
                  <div
                    key={table.id}
                    className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 ${
                      table.status === 'available'
                        ? 'bg-green-100 border-green-400 text-green-800'
                        : 'bg-red-100 border-red-400 text-red-800'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-1">{table.id}</div>
                    <div className="text-xs font-medium uppercase">{table.status}</div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-8 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded"></div>
                  <span className="text-gray-300 text-sm">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded"></div>
                  <span className="text-gray-300 text-sm">Booked</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
