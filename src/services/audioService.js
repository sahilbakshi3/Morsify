import { 
  DOT_DURATION, 
  DASH_DURATION, 
  PAUSE_DURATION, 
  LETTER_PAUSE, 
  WORD_PAUSE, 
  AUDIO_FREQUENCY 
} from '../constants/morseCode';

class AudioService {
  constructor() {
    this.context = null;
  }

  initAudioContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.context;
  }

  playMorseCode(morse) {
    const context = this.initAudioContext();
    let currentTime = context.currentTime;

    morse.split('').forEach(char => {
      if (char === '.') {
        this.playTone(context, currentTime, DOT_DURATION);
        currentTime += (DOT_DURATION + PAUSE_DURATION) / 1000;
      } else if (char === '-') {
        this.playTone(context, currentTime, DASH_DURATION);
        currentTime += (DASH_DURATION + PAUSE_DURATION) / 1000;
      } else if (char === ' ') {
        currentTime += LETTER_PAUSE / 1000;
      } else if (char === '/') {
        currentTime += WORD_PAUSE / 1000;
      }
    });
  }

  playTone(context, startTime, duration) {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.frequency.value = AUDIO_FREQUENCY;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, startTime);
    gainNode.gain.setValueAtTime(0, startTime + duration / 1000);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration / 1000);
  }

  playLetterSound(morse) {
    this.playMorseCode(morse);
  }
}

export default new AudioService();