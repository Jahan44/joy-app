import React from "react";
import Particles from "react-tsparticles";
import Typical from "react-typical";
import Footer from "../Footer/Footer";
import "./About.css";
import myimage from "./image/My project_ccexpress.png";
const About = () => {
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
              width: "50px",
            },
          },
          detectRetina: true,
        }}
      />
      <div className="about-main">
        <div className="about-body">
          <div className="about-left">
            <img src={myimage} alt="my-image" className=" img-fluid" />
            <div className="about-right">
              <p className="typical-text">
                <Typical
                  steps={[
                    `Hi 🖐`,
                    1000,
                    "My Name Is Joysen Kumar Roy 🤵",
                    1500,
                    "I Am MERN Stack Developer 👨‍🎓",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-3">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
