import React from "react";

function SelectorsCss() {
  return (
    <div className="p-3 bg-light">
      <div>
        <h2>CSS Selectors</h2>
        <p>A CSS rule set contains a selector and a declaration block.</p>
        <h3>CSS Syntax:</h3>
        <p>
          <strong>Selector:</strong> Selector indicates the HTML element you
          want to style. It could be any tag like &lt;h1&gt;, &lt;title&gt; etc.
        </p>
        <p>
          <strong>Declaration Block:</strong> The declaration block can contain
          one or more declarations separated by a semicolon. For the above
          example, there are two declarations:
        </p>
        <pre>
          <code>
            color: yellow;
            <br />
            font-size: 11px;
          </code>
        </pre>
        <p>
          Each declaration contains a property name and value, separated by a
          colon.
        </p>
        <p>
          <strong>Property:</strong> A Property is a type of attribute of an
          HTML element. It could be color, border, etc.
        </p>
        <p>
          <strong>Value:</strong> Values are assigned to CSS properties. In the
          above example, the value "yellow" is assigned to the color property.
        </p>
      </div>
    </div>
  );
}

export default SelectorsCss;
