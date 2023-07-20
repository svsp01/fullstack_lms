import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CompilerMaterial = () => {
  const [showCompiler, setShowCompiler] = useState(false);

  const handlePracticeClick = () => {
    setShowCompiler(true);
  };

  return (
    <div >
      <div className="d-flex justify-content-between align-items-center p-5" style={{ background: "#f2f2f2", padding: "20px" }}>
        <div>
        <h2 className="pb-5" style={{ textAlign: "center" }}>HTML Practical Question:</h2>
        
        
        <pre
          style={{ textAlign: "center", background: "white", padding: "10px" }}
        >
          {`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
        </pre>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handlePracticeClick}>Practice</button>
        </div>
        </div>
        {showCompiler && (
          <div>
            <h2 className="pb-5" style={{ textAlign: "center" }}>HTML Online Compiler:</h2>
            <LiveProvider
              code="<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a paragraph.</p>
</body>
</html>"
              className="text-center"
            >
              <LiveEditor language="html" className="text-center" />
              <LiveError className="text-center" />
              <LivePreview className="text-center" />
            </LiveProvider>
          </div>
        )}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default CompilerMaterial;
