import React, { useEffect } from "react";
import "./Navbar.scss";
export const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("navbar");

      if (window.scrollY > 0) {
        nav?.classList.add("nav-colored");
      } else {
        nav?.classList.remove("nav-colored");
      }
    });
  });

  const handleMenuClick = () => {
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu?.style.display == "block") {
      mobileMenu?.setAttribute("style", "display: none;");
    } else {
      mobileMenu?.setAttribute("style", "display: block;");
    }
  };

  return (
    <nav id="navbar" className="nav-main">
      <img
        className="brand"
        src="/logo.png"
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <div className="nav-menu">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li className="ce-courses-nav">
            <p>CE COURSES</p>
            <div className="ce-courses">
              <a href="real-estate-continuing-education">CE Fiverr Pass</a>
              <a href="real-estate-continuing-education-courses">Purchase Individual Courses</a>
            </div>
          </li>
          <li>
            <a href="real-estate-license-course">RE LICENSE COURSE</a>
          </li>
          {/* <li>
            <a href="pre-licensing">PRE LICENSING</a>
          </li> */}
          <li>
            <a href="about">ABOUT US</a>
          </li>
          <li>
            <a href="contact">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-parent">
        <img id="menu" className="menu" src="/hamburger.png" onClick={handleMenuClick} />
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                onClick={() => {
                  document.getElementById("ce-courses-mobile")?.classList.toggle("ce-courses-nav-mobile");
                }}
              >
                CE COURSES
              </a>
              <div className="ce-courses" id="ce-courses-mobile">
                <a href="real-estate-continuing-education">CE Fiverr Pass</a>
                <a href="real-estate-continuing-education-courses">Purchas Individual Courses</a>
              </div>
            </li>
            <li>
              <a href="real-estate-license-course">RE LICENSE COURSE</a>
            </li>
            {/* <li>
              <a href="pre-licensing">Pre Licensing</a>
            </li> */}
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
