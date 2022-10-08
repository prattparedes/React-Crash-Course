import React, { useState } from 'react'

function Array() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, '+'])
    }

    function addMinus() {
        setArr((prevarr) => [...prevarr, '-'])
    }

    function resetArr() {
        setArr((prevarr) => [])
    }
    
    return (
        <>
        <button onClick={addMinus}>-</button>
        <button onClick={addPlus}>+</button>
        <button onClick={resetArr}>Reset</button>
        <br />
        {arr.toString()}
        </>
    )
}

export default Array