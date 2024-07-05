import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNav.css"; // Ensure this CSS file has the necessary styles

const CustomNav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleHome = () => {
    navigate(`/`);
  };

  const handleAbout = () => {
    navigate(`/about`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand onClick={handleHome}>
          <img
            src="https://res.cloudinary.com/dzmn9lnk5/image/upload/v1720114070/agile/agileCarousel/agliesmall-removebg-preview_jkk6kp.png"
            className="d-inline-block align-top aglielogo"
            alt="Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleAbout}>About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex search-box">
            <FormControl
              type="search"
              placeholder="search for service"
              className="me-2 search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-success" className="search-button">
              Search
            </Button>
          </Form>
          <Nav className="ml-auto social-icons">
            <Nav.Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
