import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className="color-nav" variant="dark">
                <LinkContainer to="/">
                <Navbar.Brand className="home"><b>Rectangle CRUD</b></Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                <LinkContainer to="/">
                <Nav.Link className="text-nav">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/addpage">
                <Nav.Link className="text-nav">Add</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header
