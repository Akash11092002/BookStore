import React from "react";
import { Link, Outlet } from 'react-router-dom';
import book from './Images/pagelayout.jpg';
import './PageLayout.css'; // Assuming you'll create a CSS file for styles

const PageLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">BookStore</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/registration' className="nav-link">Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="position-relative">
        <img src={book} alt="Book Library" height='100vh' className="img-fluid" />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="welcome-heading" style={{backgroundColor:'black'}}>Welcome to BookStore</h1>
          <p className="explore-text"style={{backgroundColor:'aqua'}}>Explore our vast collection of books and resources.</p>
          <div className="button-container">
            <Link to="/home" className="btn explore-btn"style={{backgroundColor:'black'}}>EXPLORE</Link>
            <Link to="/adminlogin" className="btn admin-btn"style={{backgroundColor:'black'}}>Login as Admin</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default PageLayout;
