import React from 'react';
import { Search, TrendingUp, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { mockTrending, mockUsers } from '../mock';
import { StarDecor, Cloud } from './Illustrations';

const TrendingPanel = () => {
  return (
    <div className="sticky top-0 p-4 space-y-4 relative">
      {/* Floating decorations */}
      <StarDecor className="absolute top-2 right-2 animate-bounce opacity-20" size="sm" style={{ animationDuration: '3s' }} />
      <Cloud className="absolute bottom-10 left-2 animate-float opacity-20" size="sm" color="rgba(255,255,255,0.8)" />
      
      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-4 top-4 w-5 h-5 text-purple-500" />
        <Input
          type="text"
          placeholder="Search... 🔍"
          className="w-full pl-12 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-full focus:bg-white focus:ring-2 focus:ring-purple-300 font-semibold"
        />
      </div>

      {/* Trends for you */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg border-2 border-purple-100">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <h2 className="text-xl font-black text-white">Trending 🔥</h2>
          </div>
        </div>
        <div>
          {mockTrending.map((trend) => (
            <div
              key={trend.id}
              className="p-4 hover:bg-white cursor-pointer transition-all border-b border-purple-100 last:border-b-0"
            >
              <p className="text-xs text-purple-600 font-bold">{trend.category} • Trending</p>
              <p className="font-black text-sm mt-1 text-gray-800">{trend.topic}</p>
              <p className="text-xs text-gray-600 font-semibold mt-1">{trend.tweets} Posts</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who to follow */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-lg border-2 border-blue-100">
        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-xl font-black text-white">New Friends 👋</h2>
          </div>
        </div>
        <div>
          {mockUsers.slice(1, 4).map((user) => (
            <div
              key={user.id}
              className="p-4 hover:bg-white transition-all border-b border-blue-100 last:border-b-0 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-12 h-12 rounded-full border-2 border-blue-200 shadow-md"
                />
                <div>
                  <p className="font-black text-sm flex items-center text-gray-800">
                    {user.displayName}
                    {user.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">@{user.username}</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-2 rounded-full text-sm font-black transition-all transform hover:scale-105 shadow-md">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TrendingPanel;