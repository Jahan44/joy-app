import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer-body">
      <h3 className="footer-main-title">
        This is Simple <span> Footer</span>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <p>My Personal Information</p>
          <ul className="footer-ul">
            <Link to="https://www.facebook.com/joysen.joysenroy">
              {" "}
              <li>Facebook</li>
            </Link>
            <Link to="https://github.com/Jahan44">
              {" "}
              <li>GitHub</li>
            </Link>
            <Link to="https://www.youtube.com/watch?v=Af-b-M7guxQ&list=RDMM&start_radio=1&rv=jw4OV-4qX8k">
              {" "}
              <li>Youtube</li>
            </Link>
          </ul>
        </div>

        <div className="col-md-6">
          <h2> The Footer Simple Title</h2>
          <p className="footer-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            similique explicabo enim nam. Facere omnis pariatur similique
            repellat fugit, alias neque quia, consequuntur illo quasi dolore
            corporis. Esse, ex excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
