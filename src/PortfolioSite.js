import React, { useState, useEffect } from "react";
import "./port.css";
export default function PortfolioSite() {
  const sections = ["Home", "About", "Portfolio", "Contact"];
  const [active, setActive] = useState("Home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPos >= offsetTop - windowHeight / 2) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="container">
      {/* Header */}
      <header>
        <nav className="nav">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={active === section ? "active" : ""}
            >
              {section}
              {active === section && <hr />}
            </a>
          ))}
        </nav>
      </header>

      {/* Pages */}
      <main>
        <section id="home" className="page home">
          <h1>Home</h1>
        </section>
        <section id="about" className="page about">
          <h1>About</h1>
        </section>
        <section id="portfolio" className="page portfolio">
          <h1>Portfolio</h1>
        </section>
        <section id="contact" className="page contact">
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
}
