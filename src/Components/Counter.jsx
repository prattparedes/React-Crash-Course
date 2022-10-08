import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br />
            <button onClick={() => setCounter(0)}>Reset Counter</button>
        </>
    )
}

export default Counter;