import React, { useState } from 'react';
import { X, Image as ImageIcon, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useAuth } from '../context/AuthContext';

const ComposeTweet = ({ onClose, onTweet }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (content.trim() || image) {
      onTweet({
        content,
        image: imagePreview
      });
      setContent('');
      setImage(null);
      setImagePreview(null);
      onClose?.();
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-5 mb-4 border-2 border-purple-200 shadow-lg">
      <div className="flex space-x-3">
        <img
          src={user?.avatar}
          alt={user?.displayName}
          className="w-14 h-14 rounded-full border-3 border-purple-300 shadow-md"
        />
        <div className="flex-1">
          <Textarea
            placeholder="What's on your mind? Share something fun! ✨"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border-2 border-purple-200 text-lg resize-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 rounded-2xl min-h-24 bg-white font-medium"
          />

          {imagePreview && (
            <div className="relative mt-3">
              <img
                src={imagePreview}
                alt="Preview"
                className="rounded-2xl w-full max-h-96 object-cover border-2 border-purple-200 shadow-md"
              />
              <button
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all shadow-lg transform hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 pt-3 border-t-2 border-purple-100">
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer text-purple-500 hover:bg-purple-100 rounded-full p-3 transition-all transform hover:scale-110">
                <ImageIcon className="w-6 h-6" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              <button className="text-pink-500 hover:bg-pink-100 rounded-full p-3 transition-all transform hover:scale-110">
                <Smile className="w-6 h-6" />
              </button>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!content.trim() && !image}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black rounded-full px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all hover:scale-105 text-lg"
            >
              Post! 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeTweet;