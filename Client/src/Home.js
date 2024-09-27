import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the updated CSS
import bann from './Images/bann.jpg'
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState([]);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://bookstore-backend-boit.onrender.com/books/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('An error occurred while fetching categories');
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('https://bookstore-backend-boit.onrender.com/books/authors'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAuthor(data);
      } catch (err) {
        console.error('Error fetching authors:', err);
        setError('An error occurred while fetching authors');
      }
    };
    fetchAuthors();
  }, []);

  const handleAuthorClick = (authorName) => {
    navigate(`/books/${authorName}`);
  };
  const handleCategoryClick=(cat)=>{
    navigate (`/books/${cat}`);
  }

  return (
    
    <div className="container">
   
      {/* Left side: Image */}
      <div className="left-image">

        <img src={bann} alt="Bookstore" height={600} width={700} />
      </div>

      {/* Right side: Text Content */}
      <div className="right-content">
      <h3> "Discover Your Next Favorite Read!"</h3>
      <div className="categories">
  <h2>Book Categories</h2>
  {error && <p className="error">{error}</p>}
  <ol className="category-list">
    {categories.map((category, index) => (
      <li key={index} className="category-item">
        <button className="category-button" onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      </li>
    ))}
  </ol>
</div>


<div className="author">
  <h2>Authors Categories</h2>
  {error && <p className="error">{error}</p>}
  <ol className="author-list">
    {author.map((authorName, index) => (
      <li key={index} className="author-item">
        <button className="author-button" onClick={() => handleAuthorClick(authorName)}>
          {authorName}
        </button>
      </li>
    ))}
  </ol>
</div>
      </div>
    </div>
  );
};

export default Home;
