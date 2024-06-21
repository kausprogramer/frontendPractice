import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    function dec() {
        setCount(count - 1);
    }

    function inc() {
        setCount(count + 1);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className='buttonDiv'>
                <button onClick={dec}>
                    -
                </button>
                <button onClick={inc}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
