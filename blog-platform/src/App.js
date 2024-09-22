// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Auth from './components/Auth';
import { getPreference } from './utils/cookieUtils'; // Import the cookie utility

function App() {
  useEffect(() => {
    // Check for theme preference in cookies and apply it
    const theme = getPreference('theme');
    if (theme) {
      document.body.className = theme; // Apply the theme class to the body
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
