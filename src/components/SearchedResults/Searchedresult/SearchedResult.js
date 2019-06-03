import React from 'react';
import classes from './SearchedResult.css';
const searchedResult = (props) => (<li className={classes.SearchedResult}>{props.data}</li>);

export default searchedResult;