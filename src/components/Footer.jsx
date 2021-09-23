import React from "react";

const Footer = () => {
  return (
    <footer id="layout-footer">
      <p>© Wolt, {new Date().getFullYear()}</p>
      <p>
        Build by{" "}
        <a href="https://www.instagram.com/evans.webworks">Evan Kapantais</a>
      </p>
    </footer>
  );
};

export default Footer;
