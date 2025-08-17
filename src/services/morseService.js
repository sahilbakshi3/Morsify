import { MORSE_CODE_DICT, REVERSE_MORSE_DICT } from '../constants/morseCode';

export const textToMorse = (text) => {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE_DICT[char] || char)
    .join(' ');
};

export const morseToText = (morse) => {
  return morse
    .split(' ')
    .map(code => REVERSE_MORSE_DICT[code] || code)
    .join('');
};

export const validateMorseCode = (morse) => {
  const validChars = /^[.\-\s/]+$/;
  return validChars.test(morse);
};

export const validateText = (text) => {
  return text.trim().length > 0;
};