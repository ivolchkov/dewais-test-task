import React, { useState } from 'react';
import './App.css';
import { API_PATH } from './constants';

function App() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState({});

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(API_PATH, {
      method: 'POST',
      body: JSON.stringify({ text: inputText }),
    });
    const data = await response.json();

    setResults(data);
  };

  return (
    <div className="App">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
        rows={6}
        cols={50}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div className="result">
        <p>Results:</p>
        <pre>{JSON.stringify(results, null, 2).slice(1, -1)}</pre>
      </div>
    </div>
  );
}

export default App;
