import React from "react";
import { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Alldata from "./../ContexApi/Contextdata";
import "./Login.css";

const Login = () => {
  const { Googlehandle, existedLogHandle, error, setError } = Alldata();
  const [user, serUser] = useState({ email: "", password: "" });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const LoginFormHandle = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      existedLogHandle(user);
      setError("");
    }
  };

  return (
    <div className="main-login-body">
      <div className="login-body mt-5">
        <div className="row">
          <div className="col-12">
            <h4 className=" text-center text-primary mt-3 p-3 login-title">
              Welcome To Login Page
            </h4>
            <p className="form-title">Login To Continue</p>
            <div className=" text-danger">{error}</div>
            <form onClick={LoginFormHandle} className="login-form">
              <input
                onChange={(e) => serUser({ ...user, email: e.target.value })}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <br />
              <input
                onChange={(e) => serUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Enter Your Password"
                required
              />
              <br />
              <input type="submit" value="LOGIN NOW" />
            </form>
            <div className="fle">
              <h3 className="or-style ">......or......</h3>
            </div>
          </div>
        </div>

        <div className=" row">
          <div className="col-12">
            <button
              onClick={() => Googlehandle()}
              className="google-sign-btn btn btn-outline-primary"
            >
              Google Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="footer mt-3">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
