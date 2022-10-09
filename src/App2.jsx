import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./Components/Nav.jsx"
import Users from "./pages/Users"

function App2() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />}/>
        </Routes>
      </Router>
  );
}

export default App2;
