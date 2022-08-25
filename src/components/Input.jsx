import React, {useState} from 'react';

const Input = () => {
    const initialValue = 'text';
    const [value, setValue] = useState(initialValue);
    return (

        <div className="App">
            <h1>{value}</h1>
            <input type='text' value={value} onChange={event => setValue(event.target.value)} />
        </div>

    );
};

export default Input;