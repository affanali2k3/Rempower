import React from "react";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-secondary">
        <div className="col-1">
          <img src="/logo.png" />
          <p className="address">Location, Somewhere, 4356 road</p>
          <div
            className="contact-us-button"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <p>CONTACT US</p>
          </div>
        </div>

        <ul>
          <li>
            <a href="continuing-education">Continuing Education</a>
          </li>
          <li>
            <a href="pre-licensing">Pre Licensing</a>
          </li>
        </ul>

        <ul>
          <li>Send Us A Message</li>

          <li>support@rempower.com</li>
          <li>+1 (123) 456 789 </li>
        </ul>
      </div>
      <div className="copyright">
        <p>@2024. Rempower All Rights Reserved</p>
      </div>
    </footer>
  );
};
