//rsc = создаст компонент автоматически 
import React, {useState} from 'react';

const Counter = () => {
const initialState = 0;
const [count, setCount] = useState(initialState);
function increment() {
    setCount(count + 1);
}
function decrement() {
    setCount(count - 1);
}

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;
