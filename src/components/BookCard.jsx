import React from "react";
import '../styles/MyBookCard.css'
const MyBookCard = ({book, forOpenBook, index}) =>{
    const img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
    const bookName = book.volumeInfo.title
    const getName = (bookName)=>{
        if(bookName.split('').length > 25){
           let newName = bookName.split('').splice(0,25)
           return  newName.join('') + '...'
        }
        return bookName
    }
    return(
        <div className="sizeBook" onClick={()=> forOpenBook(book)}>
            <p data-title={bookName} style={{padding: '5px', fontSize: '12px'}}>{getName(bookName)}</p>
            <div className="BookPhoto">
              <img className="imgStyle" src={img} alt="bookImage"/>
            </div>
            <p style={{fontSize: '10px', color:'GrayText', padding:'5px'}}>Категории: {(book.volumeInfo.categories)? book.volumeInfo.categories.join(', '): '...'}</p>
            <p style={{fontSize: '10px', color:'GrayText', padding:'5px'}}>Authors: {(book.volumeInfo.authors)? book.volumeInfo.authors[0]: '...'}</p>
            <p style={{padding: '5px', fontSize: '10px', position:'absolute', bottom:'0', right:'0'}}>{index + 1}</p>
        </div>
    )
}

export default MyBookCard;