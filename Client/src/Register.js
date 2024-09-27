import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,Link } from 'react-router-dom';
import React, { useState } from "react";
import './Register.css';
import Cookies from 'js-cookie';



const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
 

  
  async function handleSubmit(e) {
    e.preventDefault();
    
      const response = await fetch('https://bookstore-backend-boit.onrender.com/registrationHandler', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
          email,
          password,
          mobile
        })
      });
      if (response.ok) {
       
      alert('Registeration successful');
        

     
      } else {
        alert("Wrong credentials");
      }
}
    


  return (
    <div>
      <div className="register-box">
      <div className="register-container">
        <h2>Register</h2>
      <form  onSubmit={handleSubmit}><br />
        <div className="form-group">
    
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
           type="text"
           className="form-control"
           id="exampleInputName"
           aria-describedby="nameHelp"
           placeholder="Enter name"
           onChange={(e) => setName(e.target.value)}
            /> <br />

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div><br />
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>


      </form>
      <p>Already Registered?  <Link to="/login">Login</Link></p>
    </div>
    </div>
    </div>
  );
};

export default Register;
