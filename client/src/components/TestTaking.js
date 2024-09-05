import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestTaking() {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tests');
        setTests(response.data);
      } catch (error) {
        console.error('Error fetching tests:', error);
      }
    };

    fetchTests();
  }, []);

  const handleTestSelect = async (e) => {
    const testId = e.target.value;
    setSelectedTest(testId);
    try {
      const response = await axios.get(`http://localhost:5000/api/questions?testId=${testId}`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/answers', {
        testId: selectedTest,
        answers: answers
      });
      setMessage('Test submitted successfully');
    } catch (error) {
      setMessage('Error submitting test');
      console.error('Error submitting test:', error);
    }
  };

  return (
    <div>
      <h1>Take a Test</h1>
      <select value={selectedTest} onChange={handleTestSelect}>
        <option value="">Select a test</option>
        {tests.map(test => (
          <option key={test.id} value={test.id}>{test.name}</option>
        ))}
      </select>
      {selectedTest && (
        <form onSubmit={handleSubmit}>
          {questions.map(question => (
            <div key={question.id}>
              <p>{question.question}</p>
              <input 
                type="text" 
                onChange={(e) => handleAnswerChange(question.id, e.target.value)} 
                required 
              />
            </div>
          ))}
          <button type="submit">Submit Test</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default TestTaking;