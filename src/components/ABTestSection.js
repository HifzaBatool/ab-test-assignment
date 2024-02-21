import React from 'react';

const ABTestSection = ({ variation }) => {
  return (
    <section>
      {/* A/B test variations */}
      {variation === 'A' &&  <><h2 className='heading2'>Spring Sale!</h2>
        <p className='offer'>Hurry, offer valid only this week</p></>
      }

      {variation === 'B' && <><h2 className='heading2'>50% Off!</h2>
      <p className='offer'>For all spring items!</p>
      </>}
    </section>
  );
};

export default ABTestSection;