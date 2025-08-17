import React from 'react';
import { Volume2 } from 'lucide-react';
import Button from '../common/Button';

const MemoryCard = ({ letter, morse, phrase, onPlaySound }) => {
  return (
    <div className="bg-black/30 border border-gray-700 hover:border-cyan-400 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl font-bold text-cyan-400">{letter}</span>
        <span className="text-xl font-mono text-yellow-400 bg-black/40 px-3 py-1 rounded-lg">
          {morse}
        </span>
      </div>
      <p className="text-gray-300 text-sm italic mb-3">"{phrase}"</p>
      <Button
        onClick={() => onPlaySound(morse)}
        variant="success"
        size="sm"
      >
        <Volume2 size={16} />
        Play Sound
      </Button>
    </div>
  );
};

export default MemoryCard;