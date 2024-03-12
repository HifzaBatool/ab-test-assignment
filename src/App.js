// App.js
import React, { useState,  } from 'react';
import StaticSection from './components/StaticSection';
import ABTestSection from './components/ABTestSection';
import CallToAction from './components/CallToAction';
import './styles.css'; 

const App = () => {
  // Initialize the A/B test variation on page load
  const [abTestVariation, setABTestVariation] = useState(Math.random() <= 0.5 ? 'A' : 'B');

  const handleCTAClick = () => {
    // Handle CTA click, track the interaction
    const interactionData = { event: 'clicked', version: abTestVariation };

    console.log('CTA Clicked - Tracking Interaction', interactionData);
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
