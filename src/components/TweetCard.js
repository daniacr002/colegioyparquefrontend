import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '../mock';
import { formatDistanceToNow } from 'date-fns';

const TweetCard = ({ tweet, onLike, onRetweet, onComment }) => {
  const navigate = useNavigate();
  const user = mockUsers.find(u => u.id === tweet.userId);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [likes, setLikes] = useState(tweet.likes);
  const [retweets, setRetweets] = useState(tweet.retweets);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    onLike?.(tweet.id);
  };

  const handleRetweet = (e) => {
    e.stopPropagation();
    setIsRetweeted(!isRetweeted);
    setRetweets(isRetweeted ? retweets - 1 : retweets + 1);
    onRetweet?.(tweet.id);
  };

  const handleComment = (e) => {
    e.stopPropagation();
    onComment?.(tweet.id);
  };

  const handleUserClick = (e) => {
    e.stopPropagation();
    navigate(`/profile/${user.username}`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 mb-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-purple-100">
      <div className="flex space-x-3">
        <div className="relative">
          <img
            src={user?.avatar}
            alt={user?.displayName}
            className="w-14 h-14 rounded-full cursor-pointer hover:opacity-90 transition-opacity border-3 border-purple-200 shadow-md"
            onClick={handleUserClick}
          />
          {user?.verified && (
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-1">
              <span
                className="font-black text-gray-800 hover:underline cursor-pointer text-lg"
                onClick={handleUserClick}
              >
                {user?.displayName}
              </span>
              {user?.verified && (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <button className="text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-full p-2 transition-all">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
            <span>@{user?.username}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(tweet.timestamp), { addSuffix: true })}</span>
          </div>

          <p className="mt-2 text-gray-800 whitespace-pre-wrap text-base leading-relaxed">{tweet.content}</p>

          {tweet.image && (
            <iframe
              src={tweet.image}
              alt="Tweet content"
              className="mt-4 rounded-2xl w-full max-h-96 object-cover border-2 border-purple-100 shadow-md"
            />
          )}

          <div className="flex items-center justify-between mt-4 max-w-md">
            <button
              onClick={handleComment}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full px-4 py-2 transition-all transform hover:scale-110 font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{tweet.comments}</span>
            </button>

            <button
              onClick={handleRetweet}
              className={`flex items-center space-x-2 hover:bg-green-50 rounded-full px-4 py-2 transition-all transform hover:scale-110 font-semibold ${isRetweeted ? 'text-green-500' : 'text-gray-600 hover:text-green-500'
                }`}
            >
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm">{retweets}</span>
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 hover:bg-pink-50 rounded-full px-4 py-2 transition-all transform hover:scale-110 font-semibold ${isLiked ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{likes}</span>
            </button>

            <button className="text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-full p-2 transition-all transform hover:scale-110">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;