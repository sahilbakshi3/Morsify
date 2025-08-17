import React from 'react';
import MemoryCard from './MemoryCard';
import { MEMORY_GUIDE } from '../../constants/memoryGuide';
import { useAudio } from '../../hooks/useAudio';

const MemoryGuide = () => {
  const { playLetter } = useAudio();

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Morse Code Memory Guide</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Memorable phrase nuances to learn morse code patterns. 
          <span className="text-cyan-400"> (lowercase = dot, CAPS = dash)</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Original YouTube reference: <a 
            href="https://youtu.be/D8tPkb98Fkk?si=a8Dmf6OsBYNEMdrF" 
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch here
          </a>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MEMORY_GUIDE.map((item) => (
          <MemoryCard
            key={item.letter}
            letter={item.letter}
            morse={item.morse}
            phrase={item.phrase}
            onPlaySound={playLetter}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGuide;
