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
  return (
    <>
      <div className="container">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: "-1",
          }}
        >
          <LightRays
            raysOrigin="bottom-center"
            raysColor="white"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="content">
          <header>
            <div className="name">
              <h1>Ghaleb shhab</h1>
            </div>
            <div className="pages">
              <button>
                {" "}
                <h2>Home</h2>
              </button>
              <button>
                {" "}
                <h2>About</h2>
              </button>
              <button>
                <h2>Portfolio</h2>
              </button>
              <button>
                {" "}
                <h2>Contact</h2>
              </button>
            </div>
          </header>

          <main>
            <h1>ghghgh</h1>

            <div className="about"></div>
            <div className="portfolio"></div>
            <div className="contact"></div>
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
}
