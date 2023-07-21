import React from "react";
import Example from "../../Images/react.pdf";

const PdfMaterial = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
          <h1>Roadmap to React</h1>
          </div>
          
          <div className="mt-5 mb-5">
            <h2>About React</h2>
            <p>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React allows developers to build reusable UI
              components and manage the state of their applications efficiently.
            </p>
            
            <h2>Getting Started with React</h2>
            <p>
              To get started with React, you can use Create React App, a
              command-line tool that sets up a new React project with all the
              necessary dependencies and configuration.
            </p>
            <code>
              npx create-react-app my-app
              <br />
              cd my-app
              <br />
              npm start
            </code>
            <p>
              This will create a new React project named "my-app" and start a
              development server where you can preview your React application.
            </p>
            <p>
              Now you have a basic understanding of React. Happy coding!
            </p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <a
              href={Example}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download .pdf file
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfMaterial;
