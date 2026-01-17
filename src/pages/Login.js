import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Sparkles, Heart, Star, Smile } from 'lucide-react';
import { Cloud, RainbowDecor } from '../components/Illustrations';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
    navigate('/home');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
        <Heart className="w-10 h-10 text-red-400 fill-red-400" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
        <Sparkles className="w-10 h-10 text-blue-400" />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
        <Smile className="w-12 h-12 text-green-400" />
      </div>

      {/* Clouds */}
      <Cloud className="absolute top-32 left-1/4 animate-float" size="md" color="rgba(255,255,255,0.5)" />
      <Cloud className="absolute top-20 right-1/3 animate-float" size="sm" color="rgba(255,255,255,0.4)" style={{ animationDelay: '2s' }} />
      <Cloud className="absolute bottom-32 left-1/3 animate-float" size="lg" color="rgba(255,255,255,0.6)" style={{ animationDelay: '1s' }} />

      {/* Rainbows */}
      <RainbowDecor className="absolute top-1/4 right-10 opacity-30 animate-pulse" size="md" />
      <RainbowDecor className="absolute bottom-1/4 left-10 opacity-30 animate-pulse" size="lg" style={{ animationDelay: '1.5s' }} />

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
          {/* Header with playful design */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-4 mb-4 animate-bounce">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              Bienvenida! 🎉
            </h1>
            <p className="text-gray-600 text-lg font-semibold">Somos niñas de 7 a 12 años</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-600">Correo 📧</label>
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
              <label className="text-sm font-bold text-purple-600">Contraseña 🔒</label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border-3 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-200 text-lg p-3"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full h-14 text-xl font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Entra! 🚀
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-purple-600 hover:text-purple-800 font-bold underline text-lg"
            >
              Eres nueva? registrate! 🌈
            </button>
          </div>
        </div>

        {/* Playful footer */}
        <div className="text-center mt-6">
          <p className="text-white text-lg font-bold drop-shadow-lg">
            🌟 Conecta, Comparte, y unete a la diversión! 🎨
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;