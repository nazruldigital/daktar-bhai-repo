import { signOut } from "firebase/auth";
import React from "react";
import logo from "../../Images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firabase.init";

const HeaderNav = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <>
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="registration">
                  Registration
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
