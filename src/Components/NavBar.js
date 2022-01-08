import React, { PureComponent } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">GateWays App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/devices">Devices</Nav.Link>
                    <Nav.Link as={Link} to="/gateways">GateWays</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;