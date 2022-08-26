import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children,...props}) => {     //var parts = ['shoulders', 'knees']; //Spread syntax//
                                                //var lyrics = ['head', ...parts, 'and', 'toes'];
                                                // ["head", "shoulders", "knees", "and", "toes"]
    return (
        <button {...props} className={classes.myBtn}> 
            {children}
        </button>
    );
}; 

export default MyButton;