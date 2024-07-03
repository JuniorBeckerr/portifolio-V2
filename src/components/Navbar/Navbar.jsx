import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";
import { FaSquareGithub } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHexagon, setShowHexagon] = useState(false);
  const moreButtonRef = useRef(null);
  const hexagonRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleHexagon = () => {
    setShowHexagon(!showHexagon);
    if (moreButtonRef.current) {
      moreButtonRef.current.style.opacity = showHexagon ? "1" : "0";
    }
  };

  // Função para lidar com cliques fora do hexágono
  const handleClickOutside = (event) => {
    if (hexagonRef.current && !hexagonRef.current.contains(event.target)) {
      setShowHexagon(false);

    }
  };

  // Adiciona o event listener quando o componente monta
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Remove o event listener quando o componente desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <div className="more-wrapper">
                <button ref={moreButtonRef} className={`contact-btn ${showHexagon ? 'hidden' : 'visible'}`} onClick={toggleHexagon}>
                  More
                </button>
                <div ref={hexagonRef} className={`hexagon ${showHexagon ? 'show' : 'hide'}`}>
                  <button className="socialButton" id="button1">
                   <span> <a href="https://www.linkedin.com/in/arnaldo-becker-758095249" target="_blank"
                       rel="noopener noreferrer">
                      <SlSocialLinkedin/>
                    </a></span>
                  </button>
                  <button className="socialButton" id="button2">
                    <span> <a href="https://github.com/JuniorBeckerr" target="_blank"
                        rel="noopener noreferrer">
                      <FaSquareGithub/></a></span>
                  </button>
                  <button className="socialButton" id="button3">
                    <span><a href="https://www.linkedin.com/in/arnaldo-becker-758095249" target="_blank"
                        rel="noopener noreferrer">
                      <ImProfile/></a></span>
                  </button>
                  <button className="socialButton" id="button4">
                    <span><a href="https://www.instagram.com/junior_beckerrr/" target="_blank"
                       rel="noopener noreferrer">
                      <GrInstagram/></a></span>
                  </button>
                </div>
              </div>
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
