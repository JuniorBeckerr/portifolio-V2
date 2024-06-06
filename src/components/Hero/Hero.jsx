import React, { useState } from "react";
import Typewriter from "./Typewriter";
import "./Hero.css";

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);

  const handleComplete = () => {
    setShowTitle(true);
  };

  return (
      <section id="hero" className="hero-container">
        <div className="hero-content">
          <span> Olá, eu sou</span>
          <h2>
            {showTitle ? "Arnaldo Becker" : (
                <Typewriter text="Arnaldo Becker" typingSpeed={150} onComplete={handleComplete}/>
            )}
          </h2>
          <h3>Desenvolvedor Web</h3>
          <p>Construindo experiências digitais incríveis.
            Construindo experiências digitais incríveis.
            Construindo experiências digitais incríveis.
            Construindo experiências digitais incríveis.
            Construindo experiências digitais incríveis.</p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img className="icon" src="./assets/images/img01.png" alt=""/>
            </div>
            <img className="avatar" src="./assets/images/img11.webp" alt=""/>
          </div>

          <div>
            <div className="tech-icon">
              <img className="php-icon icon" src="./assets/images/php.png" alt=""/>
            </div>
            <div className="tech-icon">
              <img className="icon" src="./assets/images/node.png" alt=""/>
            </div>
            <div className="tech-icon">
              <img className="icon" src="./assets/images/img04.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
