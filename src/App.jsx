import "./App.css";
import Title from "./Components/Title.jsx";
import Todo from "./Components/Todo.jsx";
import Modal from "./Components/Modal.jsx";
import React, { useState, useEffect } from 'react';
import Counter from "./Components/Counter.jsx"
import Array from "./Components/Array.jsx"


function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }

  function cancelModal() {
    setShowModal(false)
  }

  function confirmModal() {
    setShowModal(false)
  }

  useEffect(() => {
    console.log('on mount')
  }, [])

  useEffect(() => {
    console.log(`on mount and on ${showModal} change`)
  }, [showModal])

  useEffect(() => {
    console.log('every time it renders')
  })

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
        />
        <Todo
          onTodoDelete={onTodoDelete} 
          title="Finish Interview Section"
         />
        <Todo
          onTodoDelete={onTodoDelete}  
          title="Land a $100k Job" 
        />
      </div>
      {showModal ? <Modal confirmModal={confirmModal} cancelModal={cancelModal} title="Confirm delete?" /> : <></>}
    </div>
  );
}

export default App;
