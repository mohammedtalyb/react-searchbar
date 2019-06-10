import React, { useEffect, useRef } from 'react';
import Results from '../Results/Results';
import classes from './Cockpit.css'

// cockpit.defaultProps = {
//     border: '1px solid #ddd' 
// }
const Cockpit = (props) => {
    let inputClass = "";
    let ulClass = "";
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    if (props.alignIcon.toLowerCase() === "left") {
        inputClass += " " + classes.left;
        ulClass += classes.left;
    }

    if (props.showIcon.toLowerCase() === 'false') {
        inputClass += " " + classes.hideIcon;
        ulClass += classes.hideIcon;
    }

    // var assignedClass = '';


    // const blurHandler = () => {
    //     assignedClass = "";
    //     assignedClass = classes.blur;
    // }
 


    // let style = {
    //     border: '1px solid #ddd'
    // }

    return (
        <div className={classes.Cockpit}>
            <div>
                <span>
                  <input
                      onChange={props.search}
                      className={inputClass}
                      placeholder={props.placeholder}
                      ref={inputRef}
                  />
                </span>
                <ul className={ulClass}>
                    <Results 
                    result={props.result} 
                    searchOnKey={props.searchOnKey}
                    selectedItemFunc={props.selectedItemFunc}
                    selectedItem={props.selectedItem} />
                </ul>
            </div>
        </div>
    );
}

export default Cockpit;