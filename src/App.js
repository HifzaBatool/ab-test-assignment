// App.js
import React, { useState } from 'react';
import StaticSection from './components/StaticSection';
import ABTestSection from './components/ABTestSection';
import CallToAction from './components/CallToAction';
import './styles.css'; 

const App = () => {
  const [abTestVariation, setABTestVariation] = useState('A');

  const handleCTAClick = () => {
    // Handle CTA click, track the interaction
    setABTestVariation('B');
    console.log('CTA Clicked - Tracking Interaction');
  };

  return (
    <div>
      <StaticSection />
      <ABTestSection variation={abTestVariation} />
      <CallToAction onClick={handleCTAClick} />
    </div>
  );
};

export default App;

