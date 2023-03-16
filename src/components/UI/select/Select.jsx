import React from "react";
import classes from './Select.module.css';
const Select = ({list, getItem}) =>{
    return(
        <select className={classes.Select} onChange={(e)=> getItem(e.target.value)}>
            {list.map(opt=>
                <option key={opt}>{opt}</option>
            )}
        </select> 
    )
}
export default Select;
