import React from 'react'

    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import myLogo from './hn_logo.png'
    
    function Header() {
      return (
        <Navbar className="color-nav" collapseOnSelect expand="lg" bg="#C0DEFF" variant="light">
          <Container>            
            <Navbar.Brand className= "brand-nav" href="#home">
            <img src={myLogo} style={{width:65, marginTop: 2, marginRight: 20}}/>
                Hacker News
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Settings</Nav.Link>
                <NavDropdown title="Categories" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">TOP News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Latest News
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link className="nav-link" href="#deets">Log In</Nav.Link>
                <Nav.Link className="nav-link" eventKey={2} href="#memes">
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
export default Header