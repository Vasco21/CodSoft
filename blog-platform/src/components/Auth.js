import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('User signed up!');
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('User signed in!');
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };

  return (
    <div>
      <h2>Auth</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
