import Particles from "./Animation/Particles";
import "./Home.css";
import ElectricBorder from "./Animation/ElectricBorder";
import SplitText from "./Animation/SplitText";
import StarBorder from "./Animation/StarBorder";
export default function Home() {
  document.addEventListener("DOMContentLoaded", function () {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random properties
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 15;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}vw`;
      particle.style.top = `${posY}vh`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      particlesContainer.appendChild(particle);
    }

    // Add interactive animation to page links
    const pageLinks = document.querySelectorAll(".pages h2");
    pageLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove active class from all links
        pageLinks.forEach((l) => l.classList.remove("active"));
        // Add active class to clicked link
        this.classList.add("active");
      });
    });
  });
  return (
    <>
      <div class="particles" id="particles"></div>

      <div class="container">
        <header>
          <div class="name">
            <h1 class="animated-text">Ghaleb</h1>
          </div>
          <div class="pages">
            <h2 class="animated-text">Home</h2>
            <h2 class="animated-text">About</h2>
            <h2 class="animated-text">Portfolio</h2>
            <h2 class="animated-text">Contact</h2>
          </div>
        </header>

        <main>
          <div class="cardp">
            <div class="card animated-text">
              <h2>Front End Developer</h2>
              <div class="lang">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React JS</div>
              </div>
            </div>

            <div class="photo animated-text">
              <div
                Style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: " center",
                  background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                }}
              >
                <i
                  class="fas fa-code"
                  style={{ fontSize: "5rem", color: " white" }}
                ></i>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <h1>© 2023 Ghaleb - Frontend Developer</h1>
        </footer>
      </div>
    </>
  );
}
