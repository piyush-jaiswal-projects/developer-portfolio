
import './App.css';

// import Navbar from "./Components/Navbar/navbar.js";
// import Background from "./Components/Landing/background.js";
import Home from "./Components/Landing/home.js";
import Projects from "./Components/Projects/projects.js";
import Sliding from "./Components/Sliding/sliding.js";

function App() {
  return (
    <div className="App">
    <Home />
    <Projects />
    <Sliding />
    </div>
  );
}

export default App;
