import React, { useState } from 'react';

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState('');

  const handleInputChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleGenerateResume = async () => {
    // Send the job description to the backend to customize the resume
    const response = await fetch('/generate-resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobDescription }),
    });
    const data = await response.json();
    setResume(data.customizedResume);
  };

  return (
    <div className="App">
      <h1>Automated Resume Generator</h1>
      <textarea
        placeholder="Enter job description here..."
        value={jobDescription}
        onChange={handleInputChange}
        rows="10"
        cols="50"
      />
      <button onClick={handleGenerateResume}>Generate Resume</button>
      <div>
        <h3>Customized Resume:</h3>
        <pre>{resume}</pre>
      </div>
    </div>
  );
}

export default App;
