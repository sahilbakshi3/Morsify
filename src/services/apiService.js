const API_ENDPOINTS = {
  TEXT_TO_MORSE: 'https://api.funtranslations.com/translate/english2morse.json',
  MORSE_TO_TEXT: 'https://api.funtranslations.com/translate/morse2english.json'
};

export const translateWithAPI = async (text, isTextToMorse) => {
  try {
    const endpoint = isTextToMorse 
      ? API_ENDPOINTS.TEXT_TO_MORSE
      : API_ENDPOINTS.MORSE_TO_TEXT;
    
    const response = await fetch(`${endpoint}?text=${encodeURIComponent(text)}`);
    const data = await response.json();
    
    if (data.success && data.contents) {
      return {
        success: true,
        translation: data.contents.translated
      };
    } else {
      throw new Error('API translation failed');
    }
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};