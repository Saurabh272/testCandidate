import React, { useState } from 'react';
import axios from 'axios';

function TestCreation() {
  const [testName, setTestName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tests', { name: testName });
      setMessage(`Test created successfully with ID: ${response.data.id}`);
      setTestName('');
    } catch (error) {
      setMessage('Error creating test');
      console.error('Error creating test:', error);
    }
  };

  return (
    <div>
      <h1>Create New Test</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={testName} 
          onChange={(e) => setTestName(e.target.value)} 
          placeholder="Enter test name" 
          required 
        />
        <button type="submit">Create Test</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default TestCreation;