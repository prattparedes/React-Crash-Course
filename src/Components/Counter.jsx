import React, { useState } from 'react';

function Counter() {
    const [cart, setCart] = useState({ 
        item:'apple', 
        quantity: 0,
    })

    function addApple() {
        // 1. Use a callback to get the previous value
        // 2. Spread out all the properties of the prev state
        // 3. Only change the property that you need to change
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    function deductApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    function resetApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: 0
        }))
    }
    // const [counter, setCounter] = useState(0)

    // function incrementCounter() {
    //     console.log('incremented')
    //     setCounter((prevCounter) => prevCounter + 1)
    // }

    // function decrementCounter() {
    //     console.log('decremented')
    //     setCounter((prevCounter) => prevCounter - 1)
    // }

    // function resetCounter() {
    //     console.log('reseted')
    //     setCounter(0)
    // }

    return (
        <>
            <button onClick={deductApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple}>+</button>
            <br />
            <button onClick={resetApple}>Reset Counter</button>
        </>
    )
}

export default Counter;