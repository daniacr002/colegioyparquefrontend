import React, { useState } from 'react';
import { Search, TrendingUp, Sparkles, Star } from 'lucide-react';
import { Input } from '../components/ui/input';
import { mockTweets, mockTrending } from '../mock';
import TweetCard from '../components/TweetCard';
import { StarDecor, Cloud, ButterflyDecor } from '../components/Illustrations';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('forYou');

  const tabs = [
    { id: 'forYou', label: 'For you', emoji: '✨' },
    { id: 'trending', label: 'Trending', emoji: '🔥' },
    { id: 'news', label: 'News', emoji: '📰' },
    { id: 'sports', label: 'Sports', emoji: '⚽' },
    { id: 'entertainment', label: 'Fun', emoji: '🎭' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorations */}
      <StarDecor className="absolute top-32 right-10 animate-bounce opacity-40" size="md" style={{ animationDuration: '3s' }} />
      <ButterflyDecor className="absolute bottom-32 left-20 animate-float opacity-50" size="md" />
      <Cloud className="absolute top-20 left-1/4 animate-float opacity-30" size="sm" color="rgba(255,255,255,0.8)" />
      
      {/* Header with gradient */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-lg">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-purple-500" />
            <Input
              type="text"
              placeholder="Search SchoolPark... 🔍"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-white rounded-full focus:ring-4 focus:ring-purple-300 font-semibold text-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide bg-white/20 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-6 py-4 font-black hover:bg-white/30 transition-all relative min-w-fit ${
                activeTab === tab.id ? 'text-white' : 'text-white/70'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full shadow-lg" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'trending' ? (
          <div className="space-y-3">
            {mockTrending.map((trend) => (
              <div
                key={trend.id}
                className="bg-white rounded-3xl p-5 hover:shadow-lg cursor-pointer transition-all transform hover:scale-[1.02] border-2 border-purple-100 shadow-md"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-full p-3">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-purple-600 font-bold">{trend.category} • Trending</p>
                    <p className="font-black text-lg mt-1 text-gray-800">{trend.topic}</p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">{trend.tweets} Posts</p>
                  </div>
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {mockTweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Explore;