import React from "react";
import '../styles/BookMoreInf.css'
const BookMoreInf = ({book, closeBook}) =>{

    let img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
    return(
        <div className="moreInfcontainer">
            <div className="BookImgContainer">
                <div className="BookImg">
                    <img className="imgStyle" src={img} alt="bookImage"/>
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="description">
                    <div style={{height: '80%'}}>
                    <p className="descInf">Title: {book.volumeInfo.title}</p>
                    <p className="descInf">Categories: {(book.volumeInfo.categories)? book.volumeInfo.categories.join(', '): '...'}</p>
                    <p className="descInf">Authors: {(book.volumeInfo.authors)? book.volumeInfo.authors.join(', '): '...'}</p>
                    <p className="descInf">Published Date: {book.volumeInfo.publishedDate}</p>
                    <textarea  className="textArea" readonly defaultValue={book.volumeInfo.description}></textarea>
                    </div>
                    <div style={{display: 'flex'}}><button style={{color:"black"}} className="BtnBack" onClick={()=>closeBook()}>Назад </button></div>
                </div>
            </div>
        </div>
    )
}
export default BookMoreInf;