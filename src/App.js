import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contacto";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/planes" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
