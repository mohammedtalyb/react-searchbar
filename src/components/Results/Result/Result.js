import React from 'react';
import classes from './Result.css';
const result = (props) =>{
    let assignedClasses = classes.SearchedResult;
    if(props.selectedItem[props.searchOnKey] === props.itemValue) assignedClasses += "   " +classes.active;
    return (<li 
        className={assignedClasses} 
        onClick={props.selectedItemFunc}
        >{props.itemValue}</li>);
} 

export default result;