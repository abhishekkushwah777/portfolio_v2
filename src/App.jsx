import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Skills from "./Pages/Skills";
import CustomCursor from "./Components/cursor";

function App() {
  return (
    <>
    <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  )
}

export default App;