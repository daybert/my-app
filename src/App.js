import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Devices from './Components/Devices';
import Home from './Components/Home';
import GateWays from './Components/GateWays';
import NavBar from './Components/NavBar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/gateways" element={<GateWays/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
