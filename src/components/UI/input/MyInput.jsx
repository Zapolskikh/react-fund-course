

/*
const MyInput = (props) => {
    return (
        <input {...props} className={classes.MyInput} >
            
        </input>
    );
};
*/

import React from 'react';
import classes from './MyInput.module.css';


const MyInput = (props) => {
    return (
        <input className={classes.MyInput} {...props}/>

    );
};

export default MyInput;
