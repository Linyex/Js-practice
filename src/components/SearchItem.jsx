import React from "react";
import { useState } from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";
import '../styles/SearchItem.css'

const SearchItem = ({searchFunction, categList, getCategory, sortList, getSort}) =>{
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    setInterval(()=>{
        setWindowWidth(window.screen.width)
    }, 10)
    console.log(windowWidth)
    return(
        <div className="con">
            <div className="backimg"/>
            <p class="searchbook" style={{padding: '10px',color: 'black', marginBottom: '10px', width: '100%', textAlign:'center', letterSpacing: '2px', fontSize: '35px'}}>Поиск книг</p>
            <div className='MainContent' style={windowWidth> 800 ?{width: '800px'}:{width: windowWidth}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px'}}><Input searchFunction={searchFunction}/></div>
                <div className="selects">
                    <div className="select">
                        <p style={{color: 'black', paddingBottom: '5px', fontSize: '25px'}}>Категории</p>
                        <Select list={categList} getItem={getCategory}/>
                    </div>
                    <div className="select">
                        <p style={{color: 'black', paddingBottom: '5px', fontSize: '25px'}}>Сортировать</p>
                        <Select list={sortList} getItem={getSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;