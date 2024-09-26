// BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from './Cards';

const BookDetails = () => {
  const { authorName } = useParams(); // Get the author's name from the URL
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8091/books/author/${encodeURIComponent(authorName)}`); // Fetch books by author

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data); // Set the fetched books
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('An error occurred while fetching books');
      }
    };

    fetchBooks();
  }, [authorName]);

  return (
    <div>
      <h2>Books by {authorName}</h2>
      {error && <p>{error}</p>}
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <Cards key={book.id} item={book} />
          ))}
        </ul>
      ) : (
        <p>No books found for this author.</p>
      )}
    </div>
  );
};

export default BookDetails;
