import React from 'react'
import Book from './Book';

const BookDisplay = () => {
    const book1 ={title:" react book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"1" ,author :"jones", price:"129"};
    const book2 ={title:" react1 book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"2" ,author :"jone", price:"1290"}
    const book3 ={title:" react2 book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"3" ,author :"jondoe", price:"1295"}
    const book4 ={title:" react3 book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"4" ,author :"jo", price:"1299"}
    const book5 ={title:" react4 book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"5" ,author :"jonathan", price:"1291"}
    const book6 ={title:" react5 book", image:<img src="https://th.bing.com/th/id/OIP.U219i8rgV11T8SHpAbvVjQHaE8?rs=1&pid=ImgDetMain" height='100'></img>, area:"6" ,author :"jon", price:"12945"}
     const books= [book1,book2,book3,book4,book5,book6];
    return (
    <>
       { books.map((book, index) => (
            <Book
              key={index}
              title={book.title}
              image={book.image}
              area={book.area}
              author={book.author}
              price={book.price}
            />
          ))}
    </>
      
    );
}

export default BookDisplay