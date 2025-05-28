import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Learn Dutch Effortlessly</h1>
        <p className="text-xl mb-6">Join thousands of learners mastering Dutch online.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
