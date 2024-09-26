import React, { useState, useEffect } from 'react';
import './Userdata.css'; // Import CSS file

function Userdata() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://bookstore-backend-xj98.onrender.com/books');
      if (!response.ok) {
        console.log("error in fetching");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="userdata-container">
      <h2 className="userdata-title">Books</h2>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <span className="book-info">Title: {book.title}, Author: {book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Userdata;
