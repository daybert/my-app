import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Devices from './Components/Devices';
import Home from './Components/Home';
import GateWays from './Components/GateWays';


const App = () => {

  

  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">GateWays App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/devices">Devices</Nav.Link>
              <Nav.Link href="/gateways">GateWays</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
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
