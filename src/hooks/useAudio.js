import { useState } from 'react';
import audioService from '../services/audioService';

export const useAudio = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  const playMorse = (morse) => {
    if (isAudioEnabled) {
      audioService.playMorseCode(morse);
    }
  };

  const playLetter = (morse) => {
    if (isAudioEnabled) {
      audioService.playLetterSound(morse);
    }
  };

  const toggleAudio = () => {
    setIsAudioEnabled(prev => !prev);
  };

  return {
    isAudioEnabled,
    playMorse,
    playLetter,
    toggleAudio
  };
};