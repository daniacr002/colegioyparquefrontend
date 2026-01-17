import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PartyPopper, Sparkles, Trophy, Star, Heart, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';

const Success = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [countdown, setCountdown] = useState(3);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data
    const data = JSON.parse(sessionStorage.getItem('userData') || '{}');
    setUserData(data);

    // Register user
    if (data.email) {
      signup(data);
    }

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/home');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, signup]);

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti-like elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 && <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />}
            {i % 4 === 1 && <Heart className="w-6 h-6 text-red-300 fill-red-300" />}
            {i % 4 === 2 && <Sparkles className="w-6 h-6 text-blue-300" />}
            {i % 4 === 3 && <span className="text-4xl">🎉</span>}
          </div>
        ))}
      </div>

      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-50 animate-ping" style={{ animationDuration: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-50 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-ping" style={{ animationDuration: '2.5s' }}></div>

      <div className="w-full max-w-lg relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform transition-all animate-bounce" style={{ animationDuration: '1s', animationIterationCount: '1' }}>
          {/* Trophy animation */}
          <div className="mb-6">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-6 animate-bounce">
                <Trophy className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>

          {/* Success message */}
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 animate-pulse">
            Awesome! 🎉
          </h1>
          
          <div className="mb-6">
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to SchoolPark!
            </p>
            <p className="text-lg text-gray-600 font-semibold">
              Your profile is ready, {userData?.displayName}! 🌟
            </p>
          </div>

          {/* User info card */}
          {userData && (
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={userData.avatar}
                  alt="Your profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <p className="text-xl font-bold text-purple-700 mb-1">@{userData.username}</p>
              <p className="text-sm text-gray-600 font-semibold">Estimated Age: {userData.estimatedAge} years old</p>
            </div>
          )}

          {/* Fun badges */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-2xl px-4 py-2 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-700">New Member</span>
            </div>
            <div className="bg-green-100 rounded-2xl px-4 py-2 flex items-center gap-2">
              <PartyPopper className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-700">Level 1</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-3">
              <p className="text-white font-black text-lg">
                Starting in {countdown}...
              </p>
            </div>
          </div>

          {/* Skip button */}
          <Button
            onClick={goToHome}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full h-14 text-xl font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Start Exploring Now! 🚀
          </Button>

          {/* Motivational message */}
          <div className="mt-6 bg-yellow-50 rounded-2xl p-4">
            <p className="text-gray-700 font-semibold text-sm">
              🌈 Get ready to make new friends and share amazing moments! 🎨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;