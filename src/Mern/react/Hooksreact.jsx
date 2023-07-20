import React from 'react';

const HooksReact = () => {
  return (
    <div className="bg-light p-3 ">
      <h2 className="mt-3">React Hooks</h2>
      <p>Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.</p>
      <p>Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.</p>
      <p><strong>When to use Hooks:</strong></p>
      <p>If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class. But, now you can do it by using a Hook inside the existing function component.</p>
      <p><strong>Rules of Hooks:</strong></p>
      <p>Hooks are similar to JavaScript functions, but you need to follow these two rules when using them. Hooks rule ensures that all the stateful logic in a component is visible in its source code. These rules are:</p>
    </div>
  );
};

export default HooksReact;
