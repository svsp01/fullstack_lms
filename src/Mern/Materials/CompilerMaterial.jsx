import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Low = () => {
  const [showCompiler, setShowCompiler] = useState(false);

  const handlePracticeClick = () => {
    setShowCompiler(true);
  };

  return (
    <div>
      <div style={{ background: '#f2f2f2', padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>HTML Practical Question:</h2>
        <p style={{ textAlign: 'center' }}>1) Write an HTML program to display hello world.</p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handlePracticeClick}>Practice</button>
        </div>
        {showCompiler && (
          <div className='pt-3'>
            <LiveProvider code="<html><body>Hello, World!</body></html>" className="text-center">
              <LiveEditor style={{ textAlign: 'center' }} language="html" />
              <LiveError className="text-center" />
              <LivePreview className="text-center" />
            </LiveProvider>
          </div>
        )}
        <br /><br /><br />
      </div>
    </div>
  );
};

export default Low;
