import React from "react";

function SelectorsJavascript() {
  return (
    <div className="bg-light p-3">
      <div>
        <h2>JavaScript Selectors</h2>
        <p>
          A JavaScript variable is simply a name of a storage location. There
          are two types of variables in JavaScript: local variables and global
          variables.
        </p>
        <h3>JavaScript Local Variable</h3>
        <p>
          A local variable is declared inside a function or block and is only
          accessible within that function or block. It has a limited scope and
          cannot be accessed outside of its declaring function or block.
        </p>
        <h3>JavaScript Global Variable</h3>
        <p>
          A global variable is declared outside of any function or block and is
          accessible throughout the entire JavaScript program. It has a global
          scope and can be accessed from any part of the code.
        </p>
        <h3>Rules for Declaring JavaScript Variables</h3>
        <ul>
          <li>
            The name must start with a letter (a to z or A to Z), underscore
            (_), or dollar sign ($).
          </li>
          <li>
            After the first letter, we can use digits (0 to 9), for example,
            value1.
          </li>
          <li>
            JavaScript variables are case-sensitive, for example, x and X are
            different variables.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectorsJavascript;
