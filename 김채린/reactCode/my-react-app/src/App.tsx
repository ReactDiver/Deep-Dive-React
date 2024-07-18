import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import './css/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ch1">Chapter 1</Link>
            </li>
            <li>
              <Link to="/ch2">Chapter 2</Link>
            </li>
            <li>
              <Link to="/ch3">Chapter 3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/ch1" element={<Chapter1 />} />
          <Route path="/ch2" element={<Chapter2 />} />
          <Route path="/ch3" element={<Chapter3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
