import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alldata from "../ContexApi/Contextdata";
import "./Navbar.css";
const Navbars = () => {
  const [mobileicon, SetMobileicon] = useState(true);
  const { SignOutHandle, users } = Alldata();

  return (
    <div>
      <nav className="navbar-style">
        <div className="nav-title">Designe</div>

        <ul
          onClick={() => {
            SetMobileicon(true);
          }}
          className={mobileicon ? "navbar-ul" : "navbar-mobile "}
        >
          <Link to="/home" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <Link to="/dasboard" className="dasboard">
            <li>Dashboard</li>
          </Link>
          {users?.email ? (
            <button onClick={SignOutHandle} className="logOut">
              <li>LogOut</li>
            </button>
          ) : (
            <Link to="/login" className="login">
              <li>Login</li>
            </Link>
          )}
        </ul>

        {mobileicon ? (
          <i
            className="fas fa-bars fa-icon-style"
            onClick={() => {
              SetMobileicon(!mobileicon);
            }}
          ></i>
        ) : (
          <i
            className="fas fa-times fa-icon-style"
            onClick={() => {
              SetMobileicon(!mobileicon);
            }}
          ></i>
        )}
      </nav>
    </div>
  );
};

export default Navbars;
