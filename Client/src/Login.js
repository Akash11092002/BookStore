import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file for additional styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('https://bookstore-backend-boit.onrender.com/loginHandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            console.log(response)
            if (response.ok) {
               // Log the response from the server
                // Redirect or handle success accordingly
                alert("login successfully")
                navigate('/dashboard');
            } else {
                alert('Login failed',response.message);
                // Handle error appropriately, e.g., show error message to user
            }
        } catch (error) {
            console.error('Error logging in:', error);
            if(error.response.status ===  401){
                alert(error.response.message)
            }
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
                <button type="submit" className="btn btn-primary" style={{marginTop:'19px', backgroundColor:'black'}}>
                    Submit
                </button>
            </form>
            <p style={{padding:'32px',marginLeft:'62px'}}> New User? <Link to="/registration">Signup</Link></p>
        </div>
        </div>
    );
}

export default Login;
