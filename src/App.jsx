import "./App.css";
import Title from "./Components/Title.jsx";
import Todo from "./Components/Todo.jsx";
import Modal from "./Components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo 
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks." 
         />
        <Todo 
          title="Land a $100k Job" 
          paragraph="Apply to 100 jobs"
        />
      </div>
      {/* <Modal title="Are you sure you want to delete?"/> */}
    </div>
  );
}

export default App;
