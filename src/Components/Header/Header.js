import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="logoTextNav">Todo List with Raghavan</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
