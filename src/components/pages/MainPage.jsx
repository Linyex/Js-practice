import React, { useState, useMemo } from "react";
import BookList from "../BookList";
import SearchItem from "../SearchItem";
import axios from "axios";
import BookMoreInf from "../BookMoreInf";
const MainPage = () =>{
    const [searchQuery, setSearch] = useState('')
    const [openBook, setOpenBook] = useState(false)
    const [books,setBooks] = useState([])
    const [toMoreInf, setToMoreInf] = useState()
    const [chooseCateg, setChooseCateg] = useState('')
    const [chooseSort, setChooseSort] = useState('relevance')
    const categList = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortList = ['relevance', 'newest']
    const paginationStep = 9
    const [paginationRes, setPagination] = useState(9)
    console.log(chooseCateg)
    useMemo(()=>{
        if(searchQuery !== ''){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+searchQuery+'+subject:'+chooseCateg+'+orderBy:'+chooseSort+'&key=AIzaSyCbchQ4B-QN4WzoKXCZEGCOSNtvN3HDY78&maxResults=39')
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err))
        }setBooks([])
        setPagination(paginationStep)
      }, [searchQuery, chooseCateg, chooseSort])
    
    const getSearchQuery = (searchValue)=>{
        setSearch(searchValue)
        setOpenBook(false)
    }
    const forOpenBook =(book)=>{
        setOpenBook(!openBook)
        setToMoreInf(book)
    }
    const closeBook = () =>{
        setOpenBook(false)
    }
    const getCategory = (category)=>{
        if(category === 'all'){
            setChooseCateg('')
        }else setChooseCateg(category)
        setOpenBook(false)
    } 
    const getSort = (sort)=>{
        setChooseSort(sort)
    }
    const getPagination = (paginationStep) =>{
        if(typeof(books) !== 'undefined'){
            if(paginationRes + paginationStep <= books.length){
                setPagination(paginationRes + paginationStep)
            }else setPagination(books.length)
        }
    }
    const pagbooks = ()=>{
        let copyBooks = []
        copyBooks = [...books]
        return copyBooks.splice(0, paginationRes)
    }

    console.log(books)
    return(
        <div style={{width:'100%'}}>
            <SearchItem searchFunction = {getSearchQuery} categList={categList} getCategory={getCategory} sortList={sortList} getSort={getSort}/>
            <p style={{textAlign:'center', marginBottom: '25px'}}>{(typeof(books) !== 'undefined')?books.length:0} Колличество</p>
            {openBook === false
                ? <>{(searchQuery !== '' && typeof(books) !== 'undefined')
                    ?<BookList books={pagbooks()} forOpenBook={forOpenBook}/>
                    :<h1 style={{fontSize:'20px', textAlign: 'center', marginTop: '30vh', color : 'black'}}>Книги не найдены</h1>}
                    </>
                : <BookMoreInf book={toMoreInf} closeBook={closeBook}/>
            } 
            {openBook === false && typeof(books) !== 'undefined' 
                ?<>{books.length !== 0 
                    ?<div style={{width: '100%', display:'flex', justifyContent: 'center', marginBottom:'50px'}}><button onClick={()=>getPagination(paginationStep)} className="loadmoreBtn">Смотреть дальше</button></div>
                    :<></>}</>
                :<></>
            }
        </div>
    )
}
export default MainPage;