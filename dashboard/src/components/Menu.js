import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
import axios from "axios";

const Menu = () => {
  // ✅ Correct context destructuring
  const { selectedMenu, setSelectedMenu, user_info, setuser_info } =
    useContext(GeneralContext);
  function handleLogout() {
    axios.get("http://localhost:3002/logout",{withCredentials:true})
    setuser_info(null);
    setSelectedMenu(null);
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo_image" />
      <div className="menus">
        <ul>
          <li>
            {user_info ? (
              <button onClick={handleLogout}>LogOut</button>
            ) : selectedMenu === 7 ? (
              <Link
                style={{ textDecoration: "none" }}
                to="/Login"
                onClick={() => setSelectedMenu(7)}
              >
                <p
                  style={
                    selectedMenu === 7 ? { color: "blue" } : { color: "black" }
                  }
                >
                  Login
                </p>
              </Link>
            ) : (
              <Link
                style={{ textDecoration: "none" }}
                to="/Signup"
                onClick={() => setSelectedMenu(0)}
              >
                <p
                  style={
                    selectedMenu === 0 ? { color: "blue" } : { color: "black" }
                  }
                >
                  Signup
                </p>
              </Link>
            )}
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setSelectedMenu(1)}
            >
              <p
                style={
                  selectedMenu === 1 ? { color: "blue" } : { color: "black" }
                }
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => setSelectedMenu(2)}
            >
              <p
                style={
                  selectedMenu === 2 ? { color: "blue" } : { color: "black" }
                }
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => setSelectedMenu(3)}
            >
              <p
                style={
                  selectedMenu === 3 ? { color: "blue" } : { color: "black" }
                }
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => setSelectedMenu(4)}
            >
              <p
                style={
                  selectedMenu === 4 ? { color: "blue" } : { color: "black" }
                }
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => setSelectedMenu(5)}
            >
              <p
                style={
                  selectedMenu === 5 ? { color: "blue" } : { color: "black" }
                }
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => setSelectedMenu(6)}
            >
              <p
                style={
                  selectedMenu === 6 ? { color: "blue" } : { color: "black" }
                }
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">
            {user_info ? `${user_info.username}` : "USER_ID"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
