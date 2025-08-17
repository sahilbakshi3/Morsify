export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const formatMorseCode = (morse) => {
  return morse.replace(/\s+/g, ' ').trim();
};

export const formatText = (text) => {
  return text.replace(/\s+/g, ' ').trim();
};

export const isValidMorseCharacter = (char) => {
  return /[.\-\s/]/.test(char);
};