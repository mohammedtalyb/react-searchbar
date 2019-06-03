import React from 'react';
import SearchedResults from '../SearchedResults/SearchedResults';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let inputClass = "";
    if(props.alignIcon.toLowerCase() === "right") inputClass += " " +classes.right;
    if(props.showIcon.toLowerCase() === 'false') inputClass += " " + classes.hideIcon;
    return (
        <div className={classes.Cockpit}>
            <input  
            onChange={props.searchState} 
            className={inputClass} 
            placeholder={props.placeholder}/>
            <ul>
                <SearchedResults searchedResults={props.searchedResult} searchOnKey={props.searchOnKey} />
            </ul>
        </div>
    );
}

export default cockpit;