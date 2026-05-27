import { useState } from "react";
import NavBar from "./Components/NavBar";
import { useEffect } from "react";
import { client } from "./lib/sanityClient";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
    </div>
  )
}

export default App;