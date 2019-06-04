import React from 'react';
import SearchedResults from '../SearchedResults/SearchedResults';
import classes from './Cockpit.css'

// cockpit.defaultProps = {
//     border: '1px solid #ddd' 
// }
const cockpit = (props) => {
    let inputClass = "";
    let ulClass = "";

    if (props.alignIcon.toLowerCase() === "left") {
        inputClass += " " + classes.left;
        ulClass += classes.left;
    }

    if (props.showIcon.toLowerCase() === 'false') {
        inputClass += " " + classes.hideIcon;
        ulClass += classes.hideIcon;
    }

    var assignedClass = '';
const focusHandler = () => {
    console.log("dd");
    assignedClass = classes.focus;
}

    // const blurHandler = () => {
    //     assignedClass = "";
    //     assignedClass = classes.blur;
    // }
 


    // let style = {
    //     border: '1px solid #ddd'
    // }

    return (
        <div className={classes.Cockpit}>
            <div className={assignedClass} >
                <input
                    onChange={props.search}
                    className={inputClass}
                    placeholder={props.placeholder}
                    onFocus={focusHandler}
                />
                <ul className={ulClass}>
                    <SearchedResults searchedResults={props.searchedResult} searchOnKey={props.searchOnKey} />
                </ul>
            </div>
        </div>
    );
}

export default cockpit;