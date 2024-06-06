import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHexagon, setShowHexagon] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleHexagon = () => {
    setShowHexagon(!showHexagon);
  };

  return (
      <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
          <div className="nav-content">
            <img className="logo" src="./assets/images/logo.png" alt="" />

            <ul>
              <li>
                <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Home</Link>
              </li>

              <li>
                <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Skills</Link>
              </li>

              <li>
                <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Works</Link>
              </li>

              <li>
                <Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Contact Me</Link>
              </li>

              <button className="contact-btn" onClick={toggleHexagon}>
                More
                <div className={`hexagon ${showHexagon ? 'show' : 'hide'}`}>
                  <button className="socialButton" id="button1"><span>LK</span></button>
                  <button className="socialButton" id="button2"><span>GH</span></button>
                  <button className="socialButton" id="button3"><span>CV</span></button>
                  <button className="socialButton" id="button4"><span>IG</span></button>
                </div>
              </button>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{fontSize: "1.8rem"}}>
              {openMenu ? "close" : "menu"}
            </span>
            </button>
          </div>


        </nav>
      </>
  );
}

export default NavBar;
