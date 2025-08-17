import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import TranslationPanel from './components/TranslationPanel';
import MemoryGuide from './components/MemoryGuide';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('textToMorse');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <TabNavigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        {activeTab !== 'memoryGuide' ? (
          <TranslationPanel activeTab={activeTab} />
        ) : (
          <MemoryGuide />
        )}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;