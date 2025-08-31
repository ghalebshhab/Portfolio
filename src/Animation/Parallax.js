import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"; // use framer-motion instead of motion/react

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const pages = ["Home", "About", "Portfolio", "Contact"];
function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref} style={{ width: "80%" }}></div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y, textAlign: "end", color: "black" }}
      >
        {pages[id]}
      </motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      {[0, 1, 2, 3].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
      html {
        scroll-snap-type: y mandatory;
      }

      .img-container {
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .img-container > div {
        width: 300px;
        height: 400px;
        margin: 20px;
        background: #f5f5f5;
        overflow: hidden;
      }

      .img-container img {
        width: 300px;
        height: 400px;
      }

      @media (max-width: 500px) {
        .img-container > div {
          width: 150px;
          height: 200px;
        }

        .img-container img {
          width: 150px;
          height: 200px;
        }
      }

      .img-container h2 {
        color: white;
        margin: 0;
        font-family: "Azeret Mono", monospace;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
        position: absolute;
        display: inline-block;
        top: calc(50% - 25px);
        left: calc(50% + 20%);
      }

      .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: white;
        bottom: 50px;
        transform: scaleX(0);
      }
    `}</style>
  );
}
