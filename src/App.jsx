import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Contacts from "./components/contacts";

function App() {
  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
        <Home />
        <Contacts/>
      </div>
      <div className="bg-gray-950">
        
      <Footer />
    
  </div>
    </>
  );
}

export default App;
