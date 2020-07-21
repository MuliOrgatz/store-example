import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer py-2">
    <div className="my-3 my-lg-0 text-right phone">
      Copyright © Muli Orgatz 2020
      <a
        className="btn btn-dark btn-social mx-2"
        href="https://www.linkedin.com/in/muli-orgatz/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ verticalAlign: "unset" }}
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
