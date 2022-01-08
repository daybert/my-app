import React, { PureComponent } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">GateWays App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/devices">Devices</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;