import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import "./Navbar.css";

function CustomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect runs when the component mounts and whenever the URL changes,
    // keeping the navbar in sync with the login state.
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate(user ? "/dashboard" : "/");
  };

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          onClick={handleHomeClick}
          className="d-flex align-items-center brand-section"
          style={{ cursor: "pointer" }}
        >
          <FaCompass className="logo-icon" />
          <span className="brand-text">Career Pathfinder</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center nav-buttons">
            <Button variant="outline-light" onClick={handleHomeClick}>
              Home
            </Button>
            <Button variant="outline-light" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button variant="outline-light" onClick={() => navigate("/contact")}>
              Contact
            </Button>
            {user ? (
              <>
                <Button
                  variant="outline-light"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline-light" onClick={() => navigate("/register")}>
                Register
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
