import React, { useState } from 'react';
import { Heart, Repeat2, MessageCircle, UserPlus, Sparkles, Bell } from 'lucide-react';
import { mockNotifications, mockUsers } from '../mock';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { StarDecor, HeartDecor, Cloud } from '../components/Illustrations';

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const navigate = useNavigate();

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-full p-3 shadow-lg"><Heart className="w-6 h-6 text-white fill-current" /></div>;
      case 'retweet':
        return <div className="bg-gradient-to-br from-green-400 to-cyan-400 rounded-full p-3 shadow-lg"><Repeat2 className="w-6 h-6 text-white" /></div>;
      case 'comment':
        return <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-full p-3 shadow-lg"><MessageCircle className="w-6 h-6 text-white" /></div>;
      case 'follow':
        return <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full p-3 shadow-lg"><UserPlus className="w-6 h-6 text-white" /></div>;
      default:
        return null;
    }
  };

  const getNotificationText = (notification) => {
    const user = mockUsers.find(u => u.id === notification.userId);
    return (
      <div className="flex-1">
        <div className="flex items-center space-x-1">
          <span className="font-black text-gray-800">{user?.displayName}</span>
          <span className="text-gray-700 font-semibold">{notification.content}</span>
        </div>
        <p className="text-sm text-gray-500 font-semibold mt-1">
          {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorations */}
      <StarDecor className="absolute top-32 right-10 animate-bounce opacity-40" size="md" style={{ animationDuration: '3s' }} />
      <HeartDecor className="absolute bottom-32 left-20 animate-bounce opacity-40" size="lg" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
      <Cloud className="absolute top-20 left-1/4 animate-float opacity-30" size="sm" color="rgba(255,255,255,0.8)" />
      
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-lg">
        <div className="px-6 py-4 flex items-center space-x-3">
          <Bell className="w-6 h-6 text-white animate-pulse" />
          <h2 className="text-2xl font-black text-white">Notifications</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-white/20 backdrop-blur-sm">
          <button className="flex-1 py-4 font-black text-white border-b-4 border-white hover:bg-white/30 transition-all">
            All ✨
          </button>
          <button className="flex-1 py-4 font-bold text-white/70 hover:bg-white/30 transition-all">
            Mentions 💬
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="p-4 space-y-3">
        {notifications.map((notification) => {
          const user = mockUsers.find(u => u.id === notification.userId);
          return (
            <div
              key={notification.id}
              className={`bg-white rounded-3xl p-5 hover:shadow-lg cursor-pointer transition-all transform hover:scale-[1.02] border-2 shadow-md ${
                !notification.read ? 'border-purple-300 bg-purple-50' : 'border-purple-100'
              }`}
            >
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src={user?.avatar}
                      alt={user?.displayName}
                      className="w-10 h-10 rounded-full border-2 border-purple-200 shadow-sm"
                    />
                    {!notification.read && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
                        NEW
                      </span>
                    )}
                  </div>
                  {getNotificationText(notification)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fun footer */}
      <div className="text-center py-8">
        <p className="text-gray-400 font-semibold">✨ You're all caught up! 🎉</p>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Notifications;