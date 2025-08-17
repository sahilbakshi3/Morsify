import { useState } from 'react';
import { textToMorse, morseToText } from '../services/morseService';
import { translateWithAPI } from '../services/apiService';

export const useTranslation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const translate = async (text, isTextToMorse = true) => {
    if (!text.trim()) return '';

    setIsLoading(true);
    setError(null);

    try {
      // Try API first
      const apiResult = await translateWithAPI(text, isTextToMorse);
      
      if (apiResult.success) {
        return apiResult.translation;
      } else {
        // Fallback to offline translation
        console.log('API failed, using offline translation');
        return isTextToMorse ? textToMorse(text) : morseToText(text);
      }
    } catch (error) {
      setError(error.message);
      // Fallback to offline translation
      return isTextToMorse ? textToMorse(text) : morseToText(text);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    translate,
    isLoading,
    error
  };
};