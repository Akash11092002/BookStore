import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const Registration = () => {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      password: password
    });

    
  };


  return (
    <div>
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
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
