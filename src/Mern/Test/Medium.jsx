import React, { useState } from "react";

const Medium = () => {
  const questions = [
    {
      question: 'What is the purpose of the HTML "data-" attribute?',
      options: [
        {
          value: "Storing data on the server",
          label: "Storing data on the server",
        },
        {
          value: "Creating custom attributes for styling",
          label: "Creating custom attributes for styling",
        },
        {
          value: "Storing arbitrary data on HTML elements",
          label: "Storing arbitrary data on HTML elements",
        },
        { value: "Validating user input", label: "Validating user input" },
      ],
      correctAnswer: "Storing arbitrary data on HTML elements",
    },
    {
      question:
        "Which of the following CSS selectors has the highest specificity?",
      options: [
        {
          value: "tag selector (e.g., div)",
          label: "tag selector (e.g., div)",
        },
        {
          value: ".class selector (e.g., .my-class)",
          label: ".class selector (e.g., .my-class)",
        },
        {
          value: "#id selector (e.g., #my-id)",
          label: "#id selector (e.g., #my-id)",
        },
        {
          value: 'Inline styles (e.g., style="color: red")',
          label: 'Inline styles (e.g., style="color: red")',
        },
      ],
      correctAnswer: 'Inline styles (e.g., style="color: red")',
    },
    {
      question: 'In JavaScript, what does the "const" keyword do?',
      options: [
        {
          value: "Declares a variable that cannot be reassigned",
          label: "Declares a variable that cannot be reassigned",
        },
        {
          value: "Declares a variable that can be reassigned",
          label: "Declares a variable that can be reassigned",
        },
        {
          value: "Defines a function that cannot be changed",
          label: "Defines a function that cannot be changed",
        },
        {
          value: "Defines a function that can be changed",
          label: "Defines a function that can be changed",
        },
      ],
      correctAnswer: "Declares a variable that cannot be reassigned",
    },
    {
      question:
        "Which of the following methods is used to send a POST request in JavaScript using Fetch API?",
      options: [
        { value: "fetch.post()", label: "fetch.post()" },
        { value: 'fetch.method("POST")', label: 'fetch.method("POST")' },
        {
          value: 'fetch("url", { method: "POST" })',
          label: 'fetch("url", { method: "POST" })',
        },
        {
          value: 'fetch("url", { method: "GET" })',
          label: 'fetch("url", { method: "GET" })',
        },
      ],
      correctAnswer: 'fetch("url", { method: "POST" })',
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
          <div className="mt-4">
            {isCorrect ? <p>Correct answer!</p> : <p>Wrong answer!</p>}
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                className="px-4 py-2 mt-1  btn btn-outline-dark rounded "
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

export default Medium;
