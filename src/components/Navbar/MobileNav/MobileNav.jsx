import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {

  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
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
              <button
                  onClick={() => handleScroll("hero")}
                  className="menu-item"
              >
                Home
              </button>
            </li>

            <li>
              <button
                  onClick={() => handleScroll("skills")}
                  className="menu-item"
              >
                Skills
              </button>
            </li>

            <li>
              <button
                  onClick={() => handleScroll("work-exp")}
                  className="menu-item"
              >
                Work Experience
              </button>
            </li>

            <li>
              <button
                  onClick={() => handleScroll("contact")}
                  className="menu-item"
              >
                Contact Me
              </button>
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
