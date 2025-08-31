import "./Test.css";
import LightRays from "./Animation/LightRays";
import ReactFullpage from "@fullpage/react-fullpage";
import * as motion from "motion/react-client";
import ElectricBorder from "./Animation/ElectricBorder";
import SplitText from "./Animation/SplitText";
import StarBorder from "./Animation/StarBorder";
import webVedio from "./WebDesign.mp4";
import GradientText from "./Animation/GradientText";
import AnimatedContent from "./Animation/AnimatedContent";
import { useState, useEffect } from "react";
export default function Test() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <>
      <div id="container">
        <div class="light-rays"></div>

        <header>
          <div class="name">
            <h1>G7lb</h1>
          </div>
          <div class="pages">
            <a href="#Home">
              <button>
                <h2>Home</h2>
              </button>
            </a>
            <a href="#About">
              <button>
                <h2>About</h2>
              </button>
            </a>
            <a href="#Portfolio">
              <button>
                <h2>Portfolio</h2>
              </button>
            </a>
            <a href="#Contact">
              <button>
                <h2>Contact</h2>
              </button>
            </a>
          </div>
        </header>

        <main>
          <section id="Home">
            <h1 class="welcome-text">Welcome To Ghaleb Portfolio</h1>
          </section>

          <section id="About">
            <div class="card-container">
              <div class="about-content">
                <div class="profile-section">
                  <div class="profile-photo"></div>
                  <div class="profile-info">
                    <h2>Ghaleb Shhab</h2>
                    <hr />
                    <p>
                      I'm Ghaleb, <b>Software Engineer</b> Student In Hashimite
                      University. I'm a <b>Front End</b> Developer, <b>Java</b>{" "}
                      Developer, Deal With: <b>Spring</b> Boot, <b>Node</b> Js,
                      Mongo DB, <b>Python</b>, <b>Linux</b> (Information Gather
                      and Scanner)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Portfolio">
            <div class="skills-section">
              <div class="skill-card">
                <h3>Front End Developer</h3>
                <hr />
                <div class="skills-grid">
                  <div class="skill-item">HTML</div>
                  <div class="skill-item">CSS</div>
                  <div class="skill-item">JavaScript</div>
                  <div class="skill-item">React JS</div>
                  <div class="skill-item">Material UI</div>
                  <div class="skill-item">React Bits</div>
                </div>
              </div>
              <div class="media-container">
                <div id="Divv">Video Placeholder</div>
              </div>
            </div>

            <h1 class="welcome-text">Projects</h1>

            <div class="projects-grid">
              <div class="project-card">
                <div class="project-image">To Do List</div>
                <div class="project-content">
                  <h3>To Do-List</h3>
                  <p>
                    To Do-List App: Allow you to put your tasks in it, Done
                    them, Edit, and Delete.
                  </p>
                </div>
                <div class="project-actions">
                  <button class="btn">View It</button>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">Weather App</div>
                <div class="project-content">
                  <h3>Weather-App</h3>
                  <p>
                    Weather App: Allow you to get the Weather in specific city
                    by its name: Arabic Or English.
                  </p>
                </div>
                <div class="project-actions">
                  <button class="btn">View It</button>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">Softians</div>
                <div class="project-content">
                  <h3>Softians Website</h3>
                  <p>
                    Softians App: Academic Website To help students to find the
                    materials of software major in Hashemite University.
                  </p>
                </div>
                <div class="project-actions">
                  <button class="btn">View It</button>
                </div>
              </div>
            </div>
          </section>

          <section id="Contact">
            <h3>Contact Me:</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <span class="material-icons">facebook</span>
              </a>
              <a href="#" class="social-link">
                <span class="material-icons">linkedin</span>
              </a>
              <a href="#" class="social-link">
                <span class="material-icons">whatsapp</span>
              </a>
              <a href="#" class="social-link">
                <span class="material-icons">instagram</span>
              </a>
            </div>
          </section>
        </main>

        <footer>
          <h3>© 2025 Ghaleb Shhab. All rights reserved.</h3>
        </footer>
      </div>
    </>
  );
}
