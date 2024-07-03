import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {

  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div
          className={`mobile-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" alt="Logo" />

          <ul>
            <li>
              <a
                  onClick={() => handleScroll("hero")}
                  className="menu-item"
                  href="#"

              >
                Home
              </a>
            </li>

            <li>
              <a
                  onClick={() => handleScroll("skills")}
                  className="menu-item"
                  href="#"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                  onClick={() => handleScroll("work-exp")}
                  className="menu-item"
                  href="#"

              >
                Work Experience
              </a>
            </li>

            <li>
              <a
                  onClick={() => handleScroll("contact")}
                  className="menu-item"
                  href="#"

              >
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
  );
};

export default MobileNav;
