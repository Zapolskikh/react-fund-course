import React from 'react';
import classes from './MyInput.module.css';


const MyInputForwardRef = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props}/>

    );
});


export default MyInputForwardRef;