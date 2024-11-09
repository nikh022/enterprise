import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";

function App() {
  return <div className="bg-gray-800">
      <Navbar/>
      <Home/>
  </div>;
}

export default App;
