import React, { useState } from "react";

const Easy = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        {
          value: "HyperText Markup Language",
          label: "HyperText Markup Language",
        },
        {
          value: "Hyperlink and Text Markup Language",
          label: "Hyperlink and Text Markup Language",
        },
        {
          value: "HyperText Machine Language",
          label: "HyperText Machine Language",
        },
        {
          value: "Hyperlink and Text Machine Language",
          label: "Hyperlink and Text Machine Language",
        },
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: [
        { value: "color", label: "color" },
        { value: "text-color", label: "text-color" },
        { value: "font-color", label: "font-color" },
        { value: "text-style", label: "text-style" },
      ],
      correctAnswer: "color",
    },
    {
      question: "Which of the following is not a valid JavaScript data type?",
      options: [
        { value: "string", label: "string" },
        { value: "boolean", label: "boolean" },
        { value: "number", label: "number" },
        { value: "array", label: "array" },
      ],
      correctAnswer: "array",
    },
    {
      question: "What is the correct way to create a function in JavaScript?",
      options: [
        { value: "function = myFunction()", label: "function = myFunction()" },
        { value: "function myFunction()", label: "function myFunction()" },
        { value: "function:myFunction()", label: "function:myFunction()" },
        {
          value: "function => myFunction()",
          label: "function => myFunction()",
        },
      ],
      correctAnswer: "function myFunction()",
    },

    // Add more questions here...
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

export default Easy;
