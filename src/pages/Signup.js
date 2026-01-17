import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Sparkles, Rocket, Star, Heart } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    username: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in sessionStorage to use in camera page
    sessionStorage.setItem('signupData', JSON.stringify(formData));
    navigate('/camera-capture');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      </div>
      <div className="absolute top-20 right-20 animate-bounce">
        <Heart className="w-10 h-10 text-red-400 fill-red-400" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce">
        <Sparkles className="w-10 h-10 text-blue-400" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce">
        <Rocket className="w-12 h-12 text-orange-400" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
          {/* Header with playful emoji */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 mb-4 animate-bounce">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              Join SchoolPark! 🎉
            </h1>
            <p className="text-gray-600 text-lg font-semibold">Create your awesome profile!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-purple-600">Your Cool Name 😎</label>
              <Input
                type="text"
                name="displayName"
                placeholder="Enter your name"
                value={formData.displayName}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border-3 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-200 text-lg p-3"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-pink-600">Username 🚀</label>
              <Input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border-3 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 text-lg p-3"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-600">Email 📧</label>
              <Input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border-3 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-200 text-lg p-3"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-green-600">Password 🔒</label>
              <Input
                type="password"
                name="password"
                placeholder="Choose a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full rounded-2xl border-3 border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-200 text-lg p-3"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-full h-14 text-xl font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Next: Take a Selfie! 📸
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-purple-600 hover:text-purple-800 font-bold underline"
            >
              Already have an account? Log in!
            </button>
          </div>
        </div>

        {/* Playful footer */}
        <div className="text-center mt-6">
          <p className="text-white text-lg font-bold drop-shadow-lg">
            🌈 Welcome to the fun! 🎨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;