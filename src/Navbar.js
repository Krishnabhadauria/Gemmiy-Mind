import React from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('moodTracker')}>Mood Tracker</li>
        <li onClick={() => setCurrentPage('aiChat')}>AI Chat</li>
        <li onClick={() => setCurrentPage('blog')}>Blogs</li>
      </ul>
    </nav>
  );
}

export default Navbar;
