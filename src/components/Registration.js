import { Link } from "react-router-dom";
import mail from "./images/email.png";
import lock from "./images/lock.png";
import profile from "./images/profile.png";
import Address from "./images/address.png";
import Phone from "./images/phone.png";

function Registration({ info, setinfo, register }) {
  return (
    <form onSubmit={register}>
      <div className="main">
        <div className="sub-main">
          <div>
            <div>
              <h1>Registration</h1>
              <div>
                <img src={profile} alt="emial" className="email" />
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="fill"
                  value={info.name}
                  onChange={(e) => setinfo({ ...info, name: e.target.value })}
                />
              </div>
              <div className="mail-id">
                <img src={mail} alt="emial" className="email" />
                <input
                  type="email"
                  placeholder="Enter Email-id"
                  className="fill"
                  value={info.email}
                  onChange={(e) => setinfo({ ...info, email: e.target.value })}
                />
              </div>
              <div className="mail-id">
                <img src={lock} alt="emial" className="email" />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="fill"
                  value={info.password}
                  onChange={(e) =>
                    setinfo({ ...info, password: e.target.value })
                  }
                />
              </div>
              <div className="mail-id">
                <img src={lock} alt="emial" className="email" />
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="fill"
                  value={info.password}
                  onChange={(e) =>
                    setinfo({ ...info, password: e.target.value })
                  }
                />
              </div>
              <div className="mail-id">
                <img src={Address} alt="emial" className="email" />
                <input
                  type="address"
                  placeholder="Enter your address"
                  className="fill"
                  value={info.address}
                  onChange={(e) =>
                    setinfo({ ...info, address: e.target.value })
                  }
                />
              </div>
              <div className="mail-id">
                <img src={Phone} alt="emial" className="email" />
                <input
                  type="phoneNumber"
                  placeholder="Enter your phone number"
                  className="fill"
                  value={info.phoneNumber}
                  onChange={(e) =>
                    setinfo({ ...info, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div className="mail-id">
                <input
                  type="role"
                  placeholder="Enter Admin or guest"
                  className="fill"
                  value={info.role}
                  onChange={(e) => setinfo({ ...info, role: e.target.value })}
                />
              </div>
              <div className="login-btn">
                <Link to="/login">
                  <button type="submit">Register</button>
                </Link>
              </div>
              <div className="reg-link">
                <p>If Account exist then</p>
                <Link className="link" to="/login">
                  <li>Login!!!</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
