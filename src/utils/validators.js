export const validateMorseInput = (input) => {
  if (!input || input.trim().length === 0) {
    return { isValid: false, message: 'Input cannot be empty' };
  }

  const validPattern = /^[.\-\s/]+$/;
  if (!validPattern.test(input)) {
    return { isValid: false, message: 'Invalid characters in Morse code' };
  }

  return { isValid: true, message: '' };
};

export const validateTextInput = (input) => {
  if (!input || input.trim().length === 0) {
    return { isValid: false, message: 'Input cannot be empty' };
  }

  if (input.length > 1000) {
    return { isValid: false, message: 'Text too long (max 1000 characters)' };
  }

  return { isValid: true, message: '' };
};