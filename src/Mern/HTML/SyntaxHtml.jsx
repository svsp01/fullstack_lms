import React from "react";

function SyntaxHtml() {
  return (
    <div className="p-3 bg-light shadow-lg">
      <div>
        <h2>HTML Tags</h2>
        <p>
          HTML tags are like keywords which define how a web browser will format
          and display the content. With the help of tags, a web browser can
          distinguish between HTML content and simple content. HTML tags contain
          three main parts: opening tag, content, and closing tag. However, some
          HTML tags are unclosed tags.
        </p>
        <p>
          When a web browser reads an HTML document, it reads it from top to
          bottom and left to right. HTML tags are used to create HTML documents
          and define their properties. Each HTML tag has different properties.
        </p>
        <p>
          An HTML file must have some essential tags so that the web browser can
          differentiate between simple text and HTML text. You can use as many
          tags as you want as per your code requirements.
        </p>
        <p>
          All HTML tags must be enclosed within &lt; &gt; these brackets. Every
          tag in HTML performs different tasks. If you have used an opening tag
          &lt;tag&gt;, then you must use a closing tag &lt;/tag&gt; (except for
          some tags).
        </p>
        <h3>Syntax:</h3>
        <p>&lt;tag&gt; content &lt;/tag&gt;</p>
      </div>
    </div>
  );
}

export default SyntaxHtml;
