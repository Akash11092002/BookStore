import React from 'react'

const Book = (props) => {
  return (
    <div>

      
        <table border='2' width='400'  style={{backgroundColor:'aqua' }} align='center'  >
            <tr><td> {props.title}</td> <td>{props.image}</td></tr>
            <tr><td> area</td> <td>{props.area}</td></tr>
            <tr><td> author</td> <td>{props.author}</td></tr>
            <tr><td> price</td> <td>{props.price}</td></tr>
        </table>
        <div align='center'>
        <button> Buy this book</button>
        <button> Read this book</button>
        </div>
    

    </div>
  )
}

export default Book