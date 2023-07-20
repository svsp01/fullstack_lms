import React from 'react';
import Container from 'react-bootstrap/Container';

const HtmlTutorial = () => {
  return (
    <Container fluid className="html-tutorial-container d-block" >
      <h2 className="html-tutorial-title ">HTML Tutorial</h2>
      <p className="html-tutorial-description">
        HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.
      </p>
      <p className="html-tutorial-description">
      The tutorial on HTML, or HTML 5 tutorial, imparts fundamental and advanced principles of HTML. Our HTML tutorial is designed to cater to both beginners and professionals. Each topic in our tutorial is presented in a sequential manner, allowing for easy comprehension. Whether you're new to HTML or an experienced individual, you can acquire a comprehensive understanding of HTML from the ground up. Once you've mastered HTML alongside CSS and JavaScript, you'll possess the skills to create your own engaging and dynamic websites. However, for the scope of this tutorial, our focus will solely be on HTML.
      </p>
      
      <h3 className="html-tutorial-subtitle">The major points of HTML are given below:</h3>
      <ul className="html-tutorial-list">
        <li>HTML stands for HyperText Markup Language.</li>
        <li>HTML is used to create web pages and web applications.</li>
        <li>HTML is widely used language on the web.</li>
        <li>We can create a static website by HTML only.</li>
        <li>Technically, HTML is a Markup language rather than a programming language.</li>
      </ul>
    </Container>
  );
};

export default HtmlTutorial;
