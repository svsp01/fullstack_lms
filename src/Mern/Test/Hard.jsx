import React, { useState } from "react";

const Hard = () => {
  const questions = [
    {
      question: 'What is the purpose of the CSS "z-index" property?',
      options: [
        {
          value: "Controlling the visibility of an element",
          label: "Controlling the visibility of an element",
        },
        {
          value: "Defining the font size of an element",
          label: "Defining the font size of an element",
        },
        {
          value: "Setting the stacking order of positioned elements",
          label: "Setting the stacking order of positioned elements",
        },
        {
          value: "Adjusting the opacity of an element",
          label: "Adjusting the opacity of an element",
        },
      ],
      correctAnswer: "Setting the stacking order of positioned elements",
    },
    {
      question: "Which HTML tag is used to create a numbered list?",
      options: [
        { value: "ul", label: "ul" },
        { value: "ol", label: "ol" },
        { value: "dl", label: "dl" },
        { value: "li", label: "li" },
      ],
      correctAnswer: "ol",
    },
    {
      question: 'In JavaScript, what is the purpose of the "bind" method?',
      options: [
        {
          value: "To execute a function immediately",
          label: "To execute a function immediately",
        },
        {
          value: "To attach event listeners to DOM elements",
          label: "To attach event listeners to DOM elements",
        },
        {
          value: "To create a new array with specific elements",
          label: "To create a new array with specific elements",
        },
        {
          value: "To permanently bind a function to a specific context",
          label: "To permanently bind a function to a specific context",
        },
      ],
      correctAnswer: "To permanently bind a function to a specific context",
    },
    {
      question:
        "Which of the following is a valid way to declare a CSS class that applies to multiple HTML elements?",
      options: [
        { value: ".my-class { }", label: ".my-class { }" },
        { value: "#my-class { }", label: "#my-class { }" },
        { value: "<my-class> { }", label: "<my-class> { }" },
        { value: 'class="my-class"', label: 'class="my-class"' },
      ],
      correctAnswer: ".my-class { }",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    const isAnswerCorrect =
      selectedValue === questions[currentQuestionIndex].correctAnswer;

    setSelectedAnswer(selectedValue);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <p>
        This page presents a series of challenging questions covering various
        aspects of web development. Each question explores different concepts
        related to HTML, CSS, JavaScript, and the Fetch API. Users are presented
        with multiple choice options for each question, and they must select the
        correct answer from the provided choices. The first question delves into
        the purpose of the HTML "data-" attribute, which allows for storing
        arbitrary data on HTML elements. The second question focuses on CSS
        specificity, where users must identify the selector with the highest
        specificity. Lastly, the fourth question addresses the Fetch API, where
        users need to identify the correct method for sending a POST request in
        JavaScript. This interactive and educational format encourages users to
        deepen their understanding of web development concepts while providing
        an engaging quiz experience.
      </p>
      <div className="mt-5 p-5">
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                value={option.value}
                checked={selectedAnswer === option.value}
                onChange={handleRadioChange}
              />
              {option.label}
            </label>
          </div>
        ))}
        {showFeedback && (
          <div>
            {isCorrect ? <p>Correct answer!</p> : <p>Wrong answer!</p>}
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                className="px-4 py-2 mt-5  btn btn-outline-dark rounded "
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            ) : (
              <p>You've completed all the questions!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hard;
