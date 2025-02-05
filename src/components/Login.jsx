import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { toast } from 'react-toastify';

const Login = () => {
 
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password) 
      console.log(userCredential)
      navigate('/register');
      setEmail('');
      setPassword('');
      setErrorMessage('');
      toast.success("login successfully!")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("error during login")
    }
    }

  return (
    <div className='form-container'>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
