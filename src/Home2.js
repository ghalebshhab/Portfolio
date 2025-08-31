import Particles from "./Animation/Particles";
import "./Home2.css";
import ElectricBorder from "./Animation/ElectricBorder";
import SplitText from "./Animation/SplitText";
import StarBorder from "./Animation/StarBorder";
import webVedio from "./WebDesign.mp4";
import GradientText from "./Animation/GradientText";
import AnimatedContent from "./Animation/AnimatedContent";
import { useState, useEffect } from "react";
export default function Home2() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200 + 500); // duration + delay in ms
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="Container">
        {/* <div>
          {show && (
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.5}
              onAnimationEnd={() => setShow(false)} // Hide when animation ends
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <h1>Welcome To Ghaleb Portfolio</h1>
              </div>
            </AnimatedContent>
          )}
        </div> */}
        {/* {await delay(3000)} */}
        {/* Background Particles */}

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // puts it under all content
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <header>
          <div className="name">
            <h1>Ghaleb</h1>
          </div>
          <div className="Pages">
            <h2>
              <GradientText
                colors={["#ffffff", "#cccccc", "#888888", "#444444", "#000000"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Home
              </GradientText>
            </h2>
            <h2>
              <GradientText
                colors={["#ffffff", "#cccccc", "#888888", "#444444", "#000000"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                About
              </GradientText>
            </h2>
            <h2>
              <GradientText
                colors={["#ffffff", "#cccccc", "#888888", "#444444", "#000000"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Portfolio
              </GradientText>
            </h2>
            <h2>
              <GradientText
                colors={["#ffffff", "#cccccc", "#888888", "#444444", "#000000"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Contact
              </GradientText>
            </h2>
          </div>
        </header>
        <main>
          <div className="cardp">
            <div className="card">
              {" "}
              <ElectricBorder
                color="rgb(250,250,250)"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{
                  borderRadius: 16,
                  width: "60%",
                  marginLeft: "4%",
                  height: "50vh",
                }}
              >
                <h2>
                  <SplitText
                    text="Front End Developer"
                    className="text-2xl font-semibold text-center"
                    delay={70}
                    duration={2}
                    ease="bounce.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                    style={{ margin: "0" }}
                  />
                </h2>
                <div className="lang">
                  <StarBorder
                    as="div"
                    className="custom-class"
                    color="white"
                    speed="5s"
                  >
                    HTML
                  </StarBorder>
                  <StarBorder
                    as="div"
                    className="custom-class"
                    color="white"
                    speed="5s"
                  >
                    CSS
                  </StarBorder>
                  <StarBorder
                    as="div"
                    className="custom-class"
                    color="white"
                    speed="5s"
                  >
                    Java Script
                  </StarBorder>
                  <StarBorder
                    as="div"
                    className="custom-class"
                    color="white"
                    speed="5s"
                  >
                    React Js
                  </StarBorder>
                </div>
              </ElectricBorder>
            </div>
            <div className="photo">
              <video autoPlay loop muted playsInline>
                <source src={webVedio} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    </>
  );
}
