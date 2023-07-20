import React, { useState } from 'react';

const Medium = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    const isAnswerCorrect = selectedValue === 'all';

    setSelectedAnswer(selectedValue);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  return (
    <div>
      <h3>What do you understand by HTML?</h3>
      <div>
        <label>
          <input
            type="radio"
            value="structure"
            checked={selectedAnswer === 'structure'}
            onChange={handleRadioChange}
          />
          HTML describes the structure of a webpage
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="markup"
            checked={selectedAnswer === 'markup'}
            onChange={handleRadioChange}
          />
          HTML is the standard markup language mainly used to create web pages
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="elements"
            checked={selectedAnswer === 'elements'}
            onChange={handleRadioChange}
          />
          HTML consists of a set of elements that helps the browser how to view the content
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedAnswer === 'all'}
            onChange={handleRadioChange}
          />
          All of the above
        </label>
      </div>
      {showFeedback && (
        <div>
          {isCorrect ? <p>Correct answer!</p> : <p>Wrong answer!</p>}
        </div>
      )}
    </div>
  );
};

export default Medium;