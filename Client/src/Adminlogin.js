import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8091/adminHandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (response.ok) {
              alert("Login successfully")
                navigate('/admin');
            } else {
                alert('Login failed:', response.statusText);
                // Handle error appropriately, e.g., show error message to user
            }
        } catch (error) {
            alert('Error logging in:', error);
            // Handle error appropriately, e.g., show error message to user
        }
    }

    return (
      <div className="login-box">
        <div className="login-container">
            <form onSubmit={handleSubmit} style={{marginTop:'19px'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop:'19px'}}>
                    Submit
                </button>
            </form>
            <p style={{padding:'32px',marginLeft:'62px'}}> Register As Admin?<a href='/adregister'> Register</a></p>

        </div>
        </div>
    );
}

export default  Adminlogin;
