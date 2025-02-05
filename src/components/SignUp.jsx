import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { toast } from 'react-toastify';

const Signup = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Email and password are required!');
      return;
    }
   try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    navigate('/register');
    console.log('User signed up: ', userCredential.user);
    toast.success("registered successfully")
   } catch (error) {
    setErrorMessage(error.message);
    toast.error("error during registration")
      console.error('Error during login:', error.message);
   }
  };

  return (
    <div className='form-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
