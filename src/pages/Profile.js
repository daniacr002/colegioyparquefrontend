import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Star, Rocket, Trophy, Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockUsers, mockTweets } from '../mock';
import TweetCard from '../components/TweetCard';
import { Button } from '../components/ui/button';
import { format } from 'date-fns';
import { StarDecor, HeartDecor, FlowerDecor, RainbowDecor, Cloud } from '../components/Illustrations';

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find(u => u.username === username);
  const userTweets = mockTweets.filter(t => t.userId === user?.id);
  const [isFollowing, setIsFollowing] = useState(false);

  if (!user) {
    return <div className="p-4">User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorations */}
      <StarDecor className="absolute top-24 right-10 animate-bounce opacity-40" size="lg" style={{ animationDuration: '3s' }} />
      <HeartDecor className="absolute top-40 left-10 animate-bounce opacity-40" size="md" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      <FlowerDecor className="absolute bottom-32 right-20 animate-float opacity-50" size="lg" />
      <Cloud className="absolute top-10 right-1/4 animate-float opacity-30" size="md" color="rgba(255,255,255,0.8)" />
      <RainbowDecor className="absolute bottom-20 left-20 opacity-20 animate-pulse" size="lg" />
      
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-lg">
        <div className="flex items-center space-x-4 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h2 className="text-xl font-black text-white">{user.displayName}</h2>
            <p className="text-sm text-white/80 font-semibold">{userTweets.length} Posts</p>
          </div>
        </div>
      </div>

      {/* Cover Image with gradient overlay */}
      <div className="relative">
        <div className="h-56 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 overflow-hidden relative">
          <img
            src={user.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        </div>
        
        {/* Profile Picture with fun border */}
        <div className="absolute left-6 -bottom-20 border-4 border-white rounded-full shadow-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
          <img
            src={user.avatar}
            alt={user.displayName}
            className="w-36 h-36 rounded-full border-4 border-white"
          />
          {user.verified && (
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2 border-3 border-white shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 mt-24 mb-4">
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`rounded-full font-black px-8 py-3 shadow-lg transform transition-all hover:scale-105 ${
              isFollowing
                ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-red-400 hover:to-red-500'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}
          >
            {isFollowing ? 'Following ❤️' : 'Follow ⭐'}
          </Button>
        </div>

        {/* User info card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 mb-4">
          <h2 className="text-3xl font-black flex items-center text-gray-800">
            {user.displayName}
            {user.verified && (
              <svg className="w-7 h-7 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </h2>
          <p className="text-purple-600 font-bold text-lg">@{user.username}</p>

          <p className="mt-4 text-gray-700 text-base leading-relaxed">{user.bio}</p>

          <div className="flex items-center space-x-3 mt-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Joined {format(new Date(user.joinedDate), 'MMM yyyy')}</span>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
            <div className="text-center">
              <p className="text-4xl font-black text-white">{user.following}</p>
              <p className="text-white font-bold text-sm mt-1">Following</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
            <div className="text-center">
              <p className="text-4xl font-black text-white">{user.followers}</p>
              <p className="text-white font-bold text-sm mt-1">Followers</p>
            </div>
          </div>
        </div>

        {/* Fun badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg transform transition-all hover:scale-105">
            <Trophy className="w-5 h-5 text-orange-700" />
            <span className="font-black text-orange-700 text-sm">Active Member</span>
          </div>
          <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg transform transition-all hover:scale-105">
            <Rocket className="w-5 h-5 text-purple-700" />
            <span className="font-black text-purple-700 text-sm">Explorer</span>
          </div>
          <div className="bg-gradient-to-r from-pink-300 to-red-300 rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg transform transition-all hover:scale-105">
            <Heart className="w-5 h-5 text-red-700" />
            <span className="font-black text-red-700 text-sm">Friend Maker</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-y-2 border-purple-100 shadow-sm">
        <div className="flex overflow-x-auto">
          <button className="flex-1 py-4 font-black text-purple-600 border-b-4 border-purple-500 hover:bg-purple-50 transition-all min-w-32">
            Posts 📝
          </button>
          <button className="flex-1 py-4 font-bold text-gray-500 hover:bg-purple-50 transition-all min-w-32">
            Replies 💬
          </button>
          <button className="flex-1 py-4 font-bold text-gray-500 hover:bg-purple-50 transition-all min-w-32">
            Media 🖼️
          </button>
          <button className="flex-1 py-4 font-bold text-gray-500 hover:bg-purple-50 transition-all min-w-32">
            Likes ❤️
          </button>
        </div>
      </div>

      {/* User's Tweets */}
      <div className="p-4">
        {userTweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
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

export default Profile;