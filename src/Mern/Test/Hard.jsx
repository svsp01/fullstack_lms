import React, { useState } from 'react';

const Hard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    const isAnswerCorrect = selectedValue === '66612';

    setSelectedAnswer(selectedValue);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  return (
    <div>
      
      <div>
        <h3> What is the result of the expression 6 + + "6" + + 6  + 6 ++"6"?</h3>
        <div>
          <label>
            <input
              type="radio"
              value="6666"
              checked={selectedAnswer === '6666'}
              onChange={handleRadioChange}
            />
            6666
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="12666"
              checked={selectedAnswer === '12666'}
              onChange={handleRadioChange}
            />
            12666
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="66612"
              checked={selectedAnswer === '66612'}
              onChange={handleRadioChange}
            />
            66612
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="NaN"
              checked={selectedAnswer === 'NaN'}
              onChange={handleRadioChange}
            />
            NaN
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

export default Hard;