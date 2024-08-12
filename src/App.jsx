import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPage from './components/sub-components/Blog'; // Import the BlogPage component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/blog" element={<BlogPage />} /> {/* Blog page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
