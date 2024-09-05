import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import TestCreation from './components/TestCreation';
import TestTaking from './components/TestTaking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Profiles</Link></li>
            <li><Link to="/create-test">Create Test</Link></li>
            <li><Link to="/take-test">Take Test</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/create-test" element={<TestCreation />} />
          <Route path="/take-test" element={<TestTaking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;