import "./App.css";
import Title from "./Components/Title.jsx";
import Todo from "./Components/Todo.jsx";
import Modal from "./Components/Modal.jsx";
import React, { useState } from 'react';
import Counter from "./Components/Counter.jsx"
import Array from "./Components/Array.jsx"


function App() {
  return <Array />
  
  return <Counter />

  const [showModal, setShowModal] = useState(false)

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
          title="Finish Frontend Simplified"
        />
        <Todo 
          title="Finish Interview Section"
         />
        <Todo 
          title="Land a $100k Job" 
        />
      </div>
      {showModal ? <Modal title="Confirm delete?" /> : <></>}
    </div>
  );
}

export default App;
