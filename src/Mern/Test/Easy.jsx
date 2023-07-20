import React, { useState } from 'react';

const Easy = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    const isAnswerCorrect = selectedValue === 'cascadingStyleSheets';

    setSelectedAnswer(selectedValue);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  return (
    <div>
      <div>
        <h3> CSS stands for __</h3>
        <div>
          <label>
            <input
              type="radio"
              value="colorStyleSheets"
              checked={selectedAnswer === 'colorStyleSheets'}
              onChange={handleRadioChange}
            />
            Color Style Sheets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="cascadeSheetsStyle"
              checked={selectedAnswer === 'cascadeSheetsStyle'}
              onChange={handleRadioChange}
            />
            Cascade Sheets Style
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="cascadeStyleSheet"
              checked={selectedAnswer === 'cascadeStyleSheet'}
              onChange={handleRadioChange}
            />
            Cascade Style Sheet
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="cascadingStyleSheets"
              checked={selectedAnswer === 'cascadingStyleSheets'}
              onChange={handleRadioChange}
            />
            Cascading Style Sheets
          </label>
        </div>
        {showFeedback && (
          <div>
            {isCorrect ? <p>Correct answer!</p> : <p>Wrong answer!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Easy;