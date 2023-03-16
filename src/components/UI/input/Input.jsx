import React from "react";
import classes from './Input.module.css';
const Input = ({searchFunction}) =>{

    return(
        <input placeholder="Поиск" className={classes.Input} onChange={(e)=> searchFunction(e.target.value)}>
        </input>
    )
}
export default Input;