// src/App.js
import './App.css'; // Add this line at the top of your App.js
import React, { useState } from 'react';
import Home from './Home';
import MoodTracker from './MoodTracker';
import AIChat from './AIChat';
import Navbar from './Navbar';
import Blog from './Blog'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderComponent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'moodTracker':
        return <MoodTracker />;
      case 'aiChat':
        return <AIChat />;
      case 'blog': // Add case for blog
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderComponent()}
    </div>
  );
}
