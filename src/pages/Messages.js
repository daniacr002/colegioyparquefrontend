import React, { useState } from 'react';
import { Send, Image as ImageIcon, Smile, MessageCircle } from 'lucide-react';
import { mockMessages, mockConversations, mockUsers } from '../mock';
import { Input } from '../components/ui/input';
import { formatDistanceToNow } from 'date-fns';
import { StarDecor, HeartDecor } from '../components/Illustrations';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [conversations, setConversations] = useState(mockMessages);
  const [messages, setMessages] = useState(mockConversations);

  const getOtherUser = (participants) => {
    const otherUserId = participants.find(id => id !== '1'); // Assuming current user is '1'
    return mockUsers.find(u => u.id === otherUserId);
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedConversation) {
      const newMessage = {
        id: `msg-${Date.now()}`,
        senderId: '1',
        content: messageText,
        timestamp: new Date().toISOString()
      };
      
      setMessages({
        ...messages,
        [selectedConversation]: [...(messages[selectedConversation] || []), newMessage]
      });
      setMessageText('');
    }
  };

  const selectedMessages = selectedConversation ? messages[selectedConversation] || [] : [];
  const selectedUser = selectedConversation
    ? getOtherUser(conversations.find(c => c.conversationId === selectedConversation)?.participants || [])
    : null;

  return (
    <div className="h-screen flex bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorations */}
      <StarDecor className="absolute top-10 right-10 animate-bounce opacity-30 z-0" size="sm" style={{ animationDuration: '3s' }} />
      <HeartDecor className="absolute bottom-20 right-20 animate-bounce opacity-30 z-0" size="md" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
      
      {/* Conversations List */}
      <div className="w-full md:w-96 flex flex-col bg-white border-r-2 border-purple-100 z-10">
        <div className="sticky top-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-5 shadow-lg">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-black text-white">Messages</h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => {
            const otherUser = getOtherUser(conversation.participants);
            return (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.conversationId)}
                className={`p-4 hover:bg-purple-50 cursor-pointer transition-all border-b border-purple-100 ${
                  selectedConversation === conversation.conversationId ? 'bg-purple-100 border-l-4 border-l-purple-500' : ''
                }`}
              >
                <div className="flex space-x-3">
                  <div className="relative">
                    <img
                      src={otherUser?.avatar}
                      alt={otherUser?.displayName}
                      className="w-14 h-14 rounded-full border-2 border-purple-200 shadow-md"
                    />
                    {conversation.unread && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-black truncate text-gray-800">{otherUser?.displayName}</p>
                      <span className="text-xs text-gray-500 font-semibold">
                        {formatDistanceToNow(new Date(conversation.timestamp), { addSuffix: true }).replace('about ', '')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate font-medium mt-1">
                      {conversation.unread && <span className="text-purple-500 font-black mr-1">•</span>}
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-5 shadow-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUser?.avatar}
                  alt={selectedUser?.displayName}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
                />
                <div>
                  <p className="font-black text-white text-lg">{selectedUser?.displayName}</p>
                  <p className="text-sm text-white/80 font-semibold">@{selectedUser?.username}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {selectedMessages.map((message) => {
                const isCurrentUser = message.senderId === '1';
                return (
                  <div
                    key={message.id}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-md px-5 py-3 rounded-3xl shadow-md transform transition-all hover:scale-105 ${
                        isCurrentUser
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white text-gray-800 border-2 border-purple-100'
                      }`}
                    >
                      <p className="font-medium">{message.content}</p>
                      <p
                        className={`text-xs mt-1 font-semibold ${
                          isCurrentUser ? 'text-white/80' : 'text-gray-500'
                        }`}
                      >
                        {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t-2 border-purple-100 p-4">
              <div className="flex items-center space-x-3">
                <button className="text-purple-500 hover:bg-purple-100 rounded-full p-3 transition-all transform hover:scale-110">
                  <ImageIcon className="w-6 h-6" />
                </button>
                <button className="text-pink-500 hover:bg-pink-100 rounded-full p-3 transition-all transform hover:scale-110">
                  <Smile className="w-6 h-6" />
                </button>
                <Input
                  type="text"
                  placeholder="Type a message... 💬"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 rounded-full border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 px-5 py-3 font-medium"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-8 mb-6 animate-bounce">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-700 mb-3">Start Chatting! 👋</h3>
              <p className="text-gray-500 font-semibold">Pick a friend and send them a message</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;