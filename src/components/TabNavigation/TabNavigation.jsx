import React from 'react';
import { Zap, RotateCcw, BookOpen } from 'lucide-react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'textToMorse',
      label: 'Text to Morse',
      icon: Zap
    },
    {
      id: 'morseToText',
      label: 'Morse to Text',
      icon: RotateCcw
    },
    {
      id: 'memoryGuide',
      label: 'Memory Guide',
      icon: BookOpen
    }
  ];

  return (
    <div className="flex flex-wrap justify-center mb-8 bg-black/20 backdrop-blur-sm rounded-2xl p-2">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`px-6 py-3 rounded-xl m-1 transition-all duration-300 flex items-center gap-2 ${
            activeTab === id
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;