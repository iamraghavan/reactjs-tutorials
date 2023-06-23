import React from "react";
import "./Footer.css"

const Footer = () => {

  const date = new Date();
  let dispDate = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {dispDate} Pradeep Raghavan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
