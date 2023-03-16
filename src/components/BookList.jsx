import React from "react";
import { useState } from "react";
import BookCard from "./BookCard";
import '../styles/BookList.css'

const BookList = ({books, forOpenBook}) =>{
    const [windowWidth, setWindowWidth] = useState(window.screen.width)

    setInterval(()=>{
        setWindowWidth(window.screen.width)
    }, 10)
 
    return(
        <div className="BookList" style={windowWidth > 800 ? {width: '800px'}:{width: windowWidth}}>
           {books.map((book, index)=>
                <BookCard key={index} book={book} forOpenBook={forOpenBook} index={index}/>
           )}
        </div>
    )
}
export default BookList;