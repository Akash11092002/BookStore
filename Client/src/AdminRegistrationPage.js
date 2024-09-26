import React, { useState } from 'react';
import './AdminRegistrationPage.css';

const AdminRegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8091/registeradminHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Registration successful!");
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        alert('error ',errorData)
        
      }
    } catch (error) {
     alert('error in registration')
    }
  }

  return (
    <div className='total'>
    <div className="container12">
      <h1 className="heading">Admin Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Register</button>
      </form>
    
    </div>
    </div>
  );
};

export default AdminRegistrationPage;
