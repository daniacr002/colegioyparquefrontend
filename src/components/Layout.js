import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Search, Bell, Mail, User, LogOut } from 'lucide-react';
import TrendingPanel from './TrendingPanel';
import RainbowLogo from './RainbowLogo';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home', emoji: '🏠' },
    { icon: Search, label: 'Explore', path: '/explore', emoji: '🔍' },
    { icon: Bell, label: 'Notifications', path: '/notifications', emoji: '🔔' },
    { icon: Mail, label: 'Messages', path: '/messages', emoji: '💌' },
    { icon: User, label: 'Profile', path: `/profile/${user?.username}`, emoji: '👤' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex">
        {/* Left Sidebar - Navigation */}
        <div className="w-20 xl:w-72 sticky top-0 h-screen flex flex-col justify-between bg-white border-r-2 border-purple-100 shadow-lg p-4">
          <div>
            <div className="mb-8 p-3 flex items-center space-x-2">
              <RainbowLogo size="md" />
              <span className="hidden xl:inline text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SchoolPark</span>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || 
                  (item.path.includes('/profile') && location.pathname.includes('/profile'));
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all transform hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg font-black' 
                        : 'font-bold text-gray-700 hover:bg-purple-100'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="hidden xl:inline text-lg">{item.label}</span>
                    <span className="hidden xl:inline text-xl">{item.emoji}</span>
                  </button>
                );
              })}
            </nav>

            <button className="mt-6 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-black rounded-full py-4 px-6 transition-all transform hover:scale-105 shadow-lg hidden xl:block text-lg">
              New Post 🚀
            </button>
            <button className="mt-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black rounded-full flex items-center justify-center xl:hidden shadow-lg transform hover:scale-110 transition-all">
              <span className="text-2xl">+</span>
            </button>
          </div>

          {/* User Profile Section */}
          <div className="mt-auto">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-3 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-full border-3 border-white shadow-md"
                />
                <div className="hidden xl:block flex-1">
                  <p className="font-black text-sm text-gray-800">{user?.displayName}</p>
                  <p className="text-purple-600 text-sm font-bold">@{user?.username}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="hidden xl:flex items-center space-x-2 w-full mt-3 bg-red-500 hover:bg-red-600 text-white rounded-full py-2 px-4 font-bold transition-all transform hover:scale-105"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          <Outlet />
        </div>

        {/* Right Sidebar - Trending & Suggestions */}
        <div className="hidden lg:block w-80 xl:w-96 bg-white border-l-2 border-purple-100 shadow-lg">
          <TrendingPanel />
        </div>
      </div>
    </div>
  );
};

export default Layout;