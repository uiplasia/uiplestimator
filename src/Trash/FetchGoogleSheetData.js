import React, { useState } from 'react';

function FetchGoogleSheetData() {
  const [userInput, setUserInput] = useState('');
  const [estimate, setEstimate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx0-7y16UyIO1JFB4cvOQNop3Esi1vSDgPxUQ1UaiirTakgOXJ8xPn3paU06t5fgYYOeg/exec?quantity=10&multiplier=5&rate=2&userInput=' + userInput
    );
    const data = await response.json();
    setEstimate(data.estimate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Estimate: {estimate}</p>
    </div>
  );
}

export default FetchGoogleSheetData;
