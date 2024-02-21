import React from 'react';

const CallToAction = ({ onClick }) => {
  const handleButtonClick = () => {
    // Track user interaction (console.log for simplicity)
    console.log('CTA Clicked');
    onClick(); // Trigger any additional action
  };

  return (
    <div className='center-container'>
    <button className='button-style' onClick={handleButtonClick}>
      Click Me
    </button>
    </div>
    
  );
};

export default CallToAction;