import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, RefreshCw, Check, Smile } from 'lucide-react';
import { Button } from '../components/ui/button';

const CameraCapture = () => {
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      // Request camera with front-facing preference for selfies
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          setCameraReady(true);
        };
      }
      setError(null);
    } catch (err) {
      console.error('Camera error:', err);
      setError('Unable to access camera. Please check permissions!');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = canvas.toDataURL('image/jpeg');
      setCapturedImage(imageData);
      
      // Stop camera stream
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  const confirmPhoto = () => {
    // Get signup data from sessionStorage
    const signupData = JSON.parse(sessionStorage.getItem('signupData') || '{}');
    
    // Mock age estimation (random between 10-14 for pre-adolescent)
    const estimatedAge = Math.floor(Math.random() * 5) + 10;
    
    // Store complete user data
    const userData = {
      ...signupData,
      selfie: capturedImage,
      estimatedAge,
      id: Date.now().toString(),
      avatar: capturedImage,
      bio: 'New SchoolPark member! 🎉',
      followers: 0,
      following: 0,
      joinedDate: new Date().toISOString(),
      verified: false
    };
    
    sessionStorage.setItem('userData', JSON.stringify(userData));
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-green-300 rounded-full opacity-30 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-4 mb-4 animate-bounce">
              <Camera className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
              Say Cheese! 📸
            </h1>
            <p className="text-gray-600 text-lg font-semibold">
              {capturedImage ? 'Looking great! 🌟' : 'Take a selfie for your profile!'}
            </p>
          </div>

          {/* Camera/Image Display */}
          <div className="relative mb-6 rounded-3xl overflow-hidden bg-gray-900 aspect-video">
            {error ? (
              <div className="flex items-center justify-center h-full p-8 text-center">
                <div>
                  <Smile className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{error}</p>
                  <Button
                    onClick={startCamera}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 rounded-full"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : capturedImage ? (
              <img
                src={capturedImage}
                alt="Captured selfie"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover mirror"
              />
            )}
            
            {/* Camera overlay effects */}
            {!capturedImage && cameraReady && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full opacity-50"></div>
              </div>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />

          {/* Action Buttons */}
          <div className="space-y-3">
            {!capturedImage ? (
              <Button
                onClick={capturePhoto}
                disabled={!cameraReady}
                className="w-full bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-white rounded-full h-14 text-xl font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Camera className="w-6 h-6 mr-2" />
                Capture Photo! 📸
              </Button>
            ) : (
              <div className="flex gap-3">
                <Button
                  onClick={retakePhoto}
                  className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white rounded-full h-14 text-lg font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Retake
                </Button>
                <Button
                  onClick={confirmPhoto}
                  className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-full h-14 text-lg font-black shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Continue!
                </Button>
              </div>
            )}
          </div>

          {/* Fun tip */}
          <div className="mt-6 text-center bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-4">
            <p className="text-gray-700 font-semibold">💡 Tip: Smile and make sure your face is clearly visible!</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mirror {
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  );
};

export default CameraCapture;