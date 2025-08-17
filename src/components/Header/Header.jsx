import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
        Morsify
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Master the art of Morse code with our advanced translator, memory guides, and audio features
      </p>
    </div>
  );
};

export default Header;