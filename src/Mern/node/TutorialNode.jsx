import React from "react";

function TutorialNode() {
  return (
    <div className="p-3 bg-light">
      <div>
        <h2>What Can Node.js Do?</h2>
        <ul>
          <li>Node.js can generate dynamic page content</li>
          <li>
            Node.js can create, open, read, write, delete, and close files on
            the server
          </li>
          <li>Node.js can collect form data</li>
          <li>Node.js can add, delete, modify data in your database</li>
        </ul>
        <h2>What is a Node.js File?</h2>
        <p>
          Node.js files contain tasks that will be executed on certain events. A
          typical event is someone trying to access a port on the server.
          Node.js files must be initiated on the server before having any
          effect. Node.js files have the extension ".js". Node allows developers
          to write JavaScript code that runs directly in a computer process
          itself instead of in a browser. Node can, therefore, be used to write
          server-side applications with access to the operating system, file
          system, and everything else required to build fully-functional
          applications. Node.  Node allows developers to write JavaScript code
          that runs directly in a computer process itself instead of in a
          browser. Node can, therefore, be used to write server-side
          applications with access to the operating system, file system, and
          everything else required to build fully-functional applications. Node.
        </p>
      </div>
    </div>
  );
}

export default TutorialNode;
