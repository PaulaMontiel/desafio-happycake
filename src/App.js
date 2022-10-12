import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contacto";
import NotFound from "./views/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="desafio-happycake">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/planes" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
