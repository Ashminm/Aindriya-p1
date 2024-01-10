import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavDropdown, NavbarCollapse } from 'react-bootstrap';




function Header() {
    return (
       
        <Navbar style={{ background: '#13118c' }} expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <i class="fa-solid fa-crown fa-2x me-3" style={{ color: 'white' }}></i>
                <div className='border border-white me-3'>
                    <Navbar.Brand href="#home">
                        <span style={{ color: 'white' }} className='fw-bold  ms-3'> BIDD WINNER</span></Navbar.Brand>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <h6 ><Nav.Link className='mx-4 text-white mt-2' href="#Dashboard">Dashboard</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Jobs">Jobs</Nav.Link></h6>
                        <h6> <Nav.Link className='mx-4 text-white mt-2' href="#calender">calender</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Catalog">Cost Catalog</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Database">Database</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Tutorial">Tutorials</Nav.Link></h6>

                        <Dropdown className='mx-5 mt-2'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ background: '#13118c' }} >
                                Ashmin
                            </Dropdown.Toggle>
                            
                        </Dropdown>

                        <i class="fa-regular fa-bell fa-2x mx-3 mt-2" style={{ color: '#fff' }}></i>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header