// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Import your Firestore configuration
import { collection, onSnapshot } from 'firebase/firestore';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollection = collection(db, 'posts');

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
      const newPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(newPosts); // Update state with new posts
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{post.createdAt?.toDate().toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
