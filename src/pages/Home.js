import React, { useState } from 'react';
import ComposeTweet from '../components/ComposeTweet';
import TweetCard from '../components/TweetCard';
import { mockTweets } from '../mock';
import { useAuth } from '../context/AuthContext';
import { Sparkles, TrendingUp } from 'lucide-react';
import { StarDecor, HeartDecor, Cloud, RainbowDecor, ButterflyDecor } from '../components/Illustrations';

const Home = () => {
  const { user } = useAuth();
  const [tweets, setTweets] = useState(mockTweets);

  const handleNewTweet = (tweetData) => {
    const newTweet = {
      id: Date.now().toString(),
      userId: user.id,
      content: tweetData.content,
      image: tweetData.image,
      likes: 0,
      retweets: 0,
      comments: 0,
      timestamp: new Date().toISOString(),
      likedBy: [],
      retweetedBy: []
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorations */}
      <StarDecor className="absolute top-20 right-10 animate-bounce opacity-40" size="md" style={{ animationDuration: '3s' }} />
      <HeartDecor className="absolute top-40 left-10 animate-bounce opacity-40" size="sm" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
      <ButterflyDecor className="absolute bottom-32 right-20 animate-float opacity-50" size="md" />
      <Cloud className="absolute top-10 left-1/4 animate-float opacity-30" size="sm" color="rgba(255,255,255,0.8)" />
      <RainbowDecor className="absolute bottom-10 left-10 opacity-20 animate-pulse" size="lg" />
      
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-lg">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <h2 className="text-2xl font-black text-white">Your Feed</h2>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">What's Hot!</span>
          </div>
        </div>
      </div>

      <div className="p-4 relative">
        {/* Compose Tweet */}
        <ComposeTweet onTweet={handleNewTweet} />

        {/* Fun divider */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full"></div>
          <span className="mx-4 text-2xl">✨</span>
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full"></div>
        </div>

        {/* Tweets Feed */}
        <div>
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>

        {/* Fun footer message */}
        <div className="text-center py-8">
          <p className="text-gray-400 font-semibold">🌈 You've seen all the latest posts! 🎨</p>
        </div>
      </div>
      
      <style>{`
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

export default Home;