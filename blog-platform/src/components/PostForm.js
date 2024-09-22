// src/components/PostForm.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { setPreference } from '../utils/cookieUtils'; // Import the function

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error

    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        createdAt: new Date(),
      });
      console.log('Post added successfully!');
      setPreference('theme', 'dark'); // Set a user preference
      navigate('/');
    } catch (error) {
      console.error('Error adding post: ', error);
      setError('Failed to add post. Please try again.'); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
