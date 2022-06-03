import React, { useState } from "react";
import { Link } from "react-router-dom";
import email from "./images/email.png";
import lock from "./images/lock.png";
import profile from "./images/profile.png";

function Login() {
  const [setEmail] = useState("");
  const [setPassword] = useState("");
  return (
    <form>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 className="LHeader">Login</h1>
              <div>
                <img src={email} alt="emial" className="email" />
                <input
                  type="email"
                  placeholder="Enter Email-id"
                  className="fill"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="second-input">
                <img src={lock} alt="password" className="email" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fill"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
              <div className="login-btn">
                <Link to="/users">
                  <button type="button">Login</button>
                </Link>
              </div>
              <div className="reg-link">
                <Link className="link" to="/Registration">
                  <li>Register Now</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
