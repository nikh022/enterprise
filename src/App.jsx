import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
        <Home />
      </div>
      <div className="bg-gray-950">
        <Footer />
      </div>
    </>
  );
}

export default App;
