import React, { useState } from 'react';
import { Volume2, VolumeX, Copy } from 'lucide-react';
import Button from '../common/Button';
import TextArea from '../common/TextArea';
import { useTranslation } from '../../hooks/useTranslation';
import { useAudio } from '../../hooks/useAudio';
import { useClipboard } from '../../hooks/useClipboard';

const TranslationPanel = ({ activeTab }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  const { translate, isLoading } = useTranslation();
  const { isAudioEnabled, playMorse, toggleAudio } = useAudio();
  const { copySuccess, copyToClipboard } = useClipboard();

  const handleTranslate = async () => {
    const isTextToMorse = activeTab === 'textToMorse';
    const result = await translate(inputText, isTextToMorse);
    setOutputText(result);
    
    if (isAudioEnabled && isTextToMorse) {
      playMorse(result);
    }
  };

  const clearAll = () => {
    setInputText('');
    setOutputText('');
  };

  const handleCopy = () => {
    copyToClipboard(outputText);
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <TextArea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            activeTab === 'textToMorse' 
              ? 'Type your message here...' 
              : 'Enter morse code (.- -... -.-. -..)' 
          }
          label={activeTab === 'textToMorse' ? 'Enter Text' : 'Enter Morse Code'}
        />

        {/* Output Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="text-xl font-semibold text-white">
              {activeTab === 'textToMorse' ? 'Morse Code' : 'Translated Text'}
            </label>
            <div className="flex gap-2">
              {outputText && (
                <Button
                  onClick={handleCopy}
                  variant="success"
                  size="sm"
                >
                  <Copy size={20} />
                </Button>
              )}
            </div>
          </div>
          <TextArea
            value={outputText}
            readOnly
            placeholder="Translation will appear here..."
          />
          {copySuccess && (
            <p className="text-green-400 text-sm mt-2">Copied to clipboard!</p>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button
          onClick={handleTranslate}
          disabled={!inputText.trim() || isLoading}
          size="lg"
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </Button>
        
        <Button
          onClick={clearAll}
          variant="secondary"
          size="lg"
        >
          Clear All
        </Button>
        
        <Button
          onClick={toggleAudio}
          variant={isAudioEnabled ? 'warning' : 'secondary'}
        >
          {isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          Audio {isAudioEnabled ? 'On' : 'Off'}
        </Button>
      </div>
    </div>
  );
};

export default TranslationPanel;