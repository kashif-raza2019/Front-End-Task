// Header Component using react bootstrap
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './header.css';

const GITHUB_URL = "https://www.github.com/kashif-raza2019/";
const README_FILE_URL = "https://github.com/kashif-raza2019/Front-End-Task/blob/main/README.md";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/kashif-raza-994232189/";

function Header(){
    return (
        <>
        {/* Collapsable Navbar Responsive */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">&nbsp; Kashif Raza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={README_FILE_URL}>README.md</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href={GITHUB_URL} 
                        title="Github Profile"
                    >
                        <i className="fa fa-github app-icon"></i>
                    </Nav.Link>
                    <Nav.Link href={LINKEDIN_PROFILE_URL}
                        title="LinkedIn Profile"
                    >
                        <i className="fa fa-linkedin app-icon"></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    );
}

export default Header;