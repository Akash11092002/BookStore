import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import './Dashboard.css'; // Import your custom CSS file for styling

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://bookstore-backend-boit.onrender.com/books'); // Replace with your API endpoint
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
            <Link to="#">Profile</Link> {/* If this link doesn't navigate anywhere, consider using a button instead */}
            <Link to="/login">Logout</Link>
            <Link to="/home">Categories</Link> {/* Replace empty string with the appropriate route */}
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
