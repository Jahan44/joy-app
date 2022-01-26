import React from "react";
import "./Style/Home.css";
import { Carousel } from "react-bootstrap";
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="home-body-style">
      <div className="row">
        <div className="col-12">
          <div className="carousel-body">
            <Carousel>
              <Carousel.Item>
                <div className="carousel-imag">
                  <img
                    className="border-radius-five d-block w-100 img-thumbnail img-fluid"
                    src={image1}
                    alt="First slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3 className=" text-color">Bipasha Rani Roy</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-imag">
                  <img
                    className="border-radius-five d-block w-100  img-thumbnail img-fluid"
                    src={image2}
                    alt="Second slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3 className="text-color">Dipali Rani Roy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-imag">
                  <img
                    className="border-radius-five d-block w-100  img-thumbnail img-fluid"
                    src={image3}
                    alt="Third slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3 className="text-color">Sonali Rani Roy</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="marque-body">
            <marquee
              behavior=""
              direction="left"
              scrollamount="7"
              hspace="10%"
              vspace="15"
            >
              {" "}
              <span className="marquee-text-style">
                {" "}
                My Name Is Joysen Kumar Roy.I Am MERN Stack Developer.{" "}
                <a href="https://www.facebook.com/joysen.joysenroy">
                  Facebook Link...
                </a>{" "}
                ***<a href="https://github.com/Jahan44">Github Link...</a>***
              </span>
            </marquee>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
