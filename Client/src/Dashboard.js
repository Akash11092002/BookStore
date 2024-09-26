import React, { useState, useEffect } from 'react';

import Cards from './Cards';
import './Dashboard.css'; // Import your custom CSS file for styling

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8091/books'); // Replace with your API endpoint
      if (!response.ok) {
        console.error('Error in fetching books');
        return;
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">Dashboard</div>
        <div className="navbar-links">
          <a href="#">Profile</a>
          <a href="/home">Logout</a>
          <a href="">Categories</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <h1 className="books-header">Books for you:</h1>
          <div className="books-line">
            {books.length > 0 ? (
              books.map((item) => (
                <Cards key={item.id} item={item} />
              ))
            ) : (
              <p className="loading-message">Loading books...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
