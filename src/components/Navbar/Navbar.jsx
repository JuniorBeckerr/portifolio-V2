import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="../../../logo.svg" alt="" />

          <ul>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>

            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
