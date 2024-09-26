import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Import CSS file

const Admin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setimage] = useState('');
  const [category, setcat] = useState('');
  const [price, setprice] = useState('');
  const [link,setlink]= useState('');

  const handleAddBook = async () => {
    try {
      const response = await fetch('http://localhost:8091/addbookhandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author,image ,category,price,link}),
      });
      if (response.ok) {
        setTitle('');
        setAuthor('');
        setimage('')
        setcat('')
        setprice('')
        setlink('')
        alert('Book added successfully!');
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Book deleted successfully!');
      } else {
        throw new Error('Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book. Please try again.');
    }
  };

  return (
    <div className='admin'>
    <div className='mn' style={{padding:'20px'}}>
    <div className='hero1'>
      <h2 className='admin-title'>Admin Page</h2>
      <div className='admin-form'>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
          <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
         <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setcat(e.target.value)}
        />
         <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
         <input
          type="text"
          placeholder="link"
          value={link}
          onChange={(e) => setlink(e.target.value)}
        />

        <button className='add-button' onClick={handleAddBook}>Add Book</button>
      </div>
      <div className='book-list'>
        {/* Display list of books from database */}
        {/* Each book should have a delete button that calls handleDeleteBook */}
      </div>
      <div className='nav-buttons'>
        <Link to="/users">
          <button className='nav-button'>All BOOKS</button>
        </Link>
        <Link to="/userinfo">
          <button className='nav-button'>Users Information</button>
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Admin;
