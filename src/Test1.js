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
import Particles from "./Animation/Particles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./Test1.css";
import ShinyText from "./Animation/ShinyText";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import BlurText from "./Animation/BlurText";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Magnet from "./Animation/Magnet";
export default function Test1() {
  return (
    <>
      <div id="container">
        <div className="light-rays">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <header>
          <div className="name">
            <h1>G7lb </h1>
          </div>
          <div className="pages">
            <a href="#Home">
              {" "}
              <button>
                {" "}
                <h2>Home</h2>
              </button>
            </a>
            <a href="#About">
              {" "}
              <button>
                {" "}
                <h2>About</h2>
              </button>
            </a>
            <a href="#Portfolio">
              {" "}
              <button>
                <h2>Portfolio</h2>
              </button>
            </a>
            <a href="#Contact">
              {" "}
              <button>
                {" "}
                <h2>Contact</h2>
              </button>
            </a>
          </div>
        </header>

        <main>
          <div id="Home" style={{ height: "100vh" }}>
            <h1 className="welcome-text">
              <ShinyText
                text="Welcome To Ghaleb Portfolio"
                disabled={false}
                speed={5}
                className="custom-className"
              />
            </h1>
          </div>
          <div className="about" id="About">
            <div className="card">
              {" "}
              <Card
                sx={{
                  width: "50%",
                  backgroundColor: "rgba(21,21,21,0.8)",
                  color: "white",
                  backdropFilter: "blur(3px)",
                  minHeight: "40vh",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ marginBottom: "2%" }}
                    >
                      <h1
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginBottom: "2%",
                        }}
                      >
                        <SplitText
                          text="Ghaleb Shhab"
                          className="text-2xl font-semibold text-center"
                          delay={70}
                          duration={2}
                          ease="bounce.out"
                          splitType="chars"
                          from={{ opacity: 0, y: 40 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          textAlign="center"
                          style={{ width: "100%" }}
                        />
                      </h1>
                    </Typography>
                    <hr style={{ marginBottom: "3%" }} />
                    <Typography variant="body1">
                      I'm Ghaleb ,<b> Software Engineer </b>Student In Hashimite
                      Uneversity . I'm A <b>Front End </b>Developer ,{" "}
                      <b>Java</b> Developer , Deal With :<b> Spring</b> Boot ,
                      <b> Node </b>Js , Mongo DB ,<b>Python</b>,<b> Linux</b>
                      (Information Gather and Scanner)
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div className="Photo"> </div>
            </div>
          </div>

          <div className="portfo" id="Portfolio">
            <div className="portfolio">
              {" "}
              <Card
                sx={{
                  width: "70%",
                  backgroundColor: "rgba(21,21,21,0.8)",
                  color: "white",
                  backdropFilter: "blur(3px)",
                  minHeight: "90%",
                  borderRadius: "12px",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ marginBottom: "5%" }}
                    >
                      <h3
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginBottom: "3%",
                        }}
                      >
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
                          style={{ width: "100%" }}
                        />
                      </h3>
                      <hr />
                    </Typography>
                    <Typography variant="body1">
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
                        <StarBorder
                          as="div"
                          className="custom-class"
                          color="white"
                          speed="5s"
                        >
                          Material UI
                        </StarBorder>{" "}
                        <StarBorder
                          as="div"
                          className="custom-class"
                          color="white"
                          speed="5s"
                        >
                          React Bits
                        </StarBorder>
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div className="photo">
                <video autoPlay loop muted playsInline>
                  <source src={webVedio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="Projects">
              <h1 className="welcome-text">
                <ShinyText
                  text="Projects"
                  disabled={false}
                  speed={3}
                  className="custom-className"
                />
              </h1>
              <div className="Project">
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "rgba(21,21,21,0.8)",
                    color: "white",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <CardContent>
                    <Typography
                      component="div"
                      className="proj"
                      style={{ height: "40vh", width: "100%" }}
                    >
                      {/* <div className="proj"></div> */}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      To Do-List
                    </Typography>
                    <Typography variant="body2">
                      To Do-List App : Allow you to put your tasks in it ,
                      Donning it , Edit , and Delete.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://reactapp-seven-mu-71.vercel.app/"
                      target="blank"
                    >
                      {" "}
                      <Button size="small">
                        {" "}
                        <h3
                          style={{
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          View It
                        </h3>
                      </Button>
                    </a>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "rgba(21,21,21,0.8)",
                    color: "white",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <CardContent>
                    <Typography
                      component="div"
                      className="proj1"
                      style={{ height: "40vh", width: "100%" }}
                    >
                      {/* <div className="proj"></div> */}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Weather-App
                    </Typography>
                    <Typography variant="body2">
                      Weather App : Allow you to get the Weather in specific
                      city by its name :Arabic Or English .
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href="https://weather-app-chi-lilac-65.vercel.app/"
                      target="blank"
                    >
                      {" "}
                      <Button size="small">
                        <h3 style={{ width: "100%", textAlign: "center" }}>
                          View It
                        </h3>
                      </Button>
                    </a>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "rgba(21,21,21,0.8)",
                    color: "white",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <CardContent>
                    <Typography
                      component="div"
                      className="proj2"
                      style={{ height: "40vh", width: "100%" }}
                    >
                      {/* <div className="proj"></div> */}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Softians Website
                    </Typography>
                    <Typography variant="body2">
                      Softians App : Academic Website To help students to find
                      the materilas of software major in Hashemite Unevirsity.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href="https://softians-app.vercel.app/" target="blank">
                      {" "}
                      <Button size="small">
                        {" "}
                        <h3 style={{ width: "100%", textAlign: "center" }}>
                          View It
                        </h3>
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <br />
        <footer>
          <div id="Contact">
            <h3 style={{ width: "100%", textAlign: "Center" }}>Contact Me :</h3>
            <div className="Links">
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.facebook.com/ghaleb.m.shhab"
                    target="blank"
                    title="My Facebook"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <FacebookRoundedIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.linkedin.com/in/ghaleb-shhab-99518b2b2/"
                    target="blank"
                    title="My LinkedIn"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <LinkedInIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://wa.me/962791852089"
                    target="blank"
                    title="My Whatsapp"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <WhatsAppIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.instagram.com/ghm_shh/"
                    target="blank"
                    title="My Instagram"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <InstagramIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
            </div>
            <h3
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <BlurText
                text="© 2025 Ghaleb Shhab. All rights reserved."
                delay={150}
                animateBy="letters"
                direction="top"
                className="text-2xl mb-8"
                style={{ marginLeft: "20%" }}
              />
            </h3>
          </div>
        </footer>
      </div>
    </>
  );
}
