import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";
import axios from "axios";
function Navbar() {
  const { CurrPath, setCurrPath } = useUserContext();
  const { user_info , setuser_info} = useUserContext();
  function handleLogout(){
    axios.get("http://localhost:3002/logout",{withCredentials:true}).then(()=>setuser_info(null));
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow-sm"
      style={{ position: "fixed", width: "100vw" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={() => setCurrPath("/")}>
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "120px" }}
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              {user_info ? (
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="nav-link"
                  to={CurrPath === "/Signup" ? "/Login" : "/Signup"}
                  style={
                    CurrPath === (CurrPath === "/Signup" ? "/Login" : "/Signup")
                      ? { color: "blue" }
                      : {}
                  }
                  onClick={() =>
                    setCurrPath(CurrPath === "/Signup" ? "/Login" : "/Signup")
                  }
                >
                  {CurrPath === "/Signup" ? "Login" : "Signup"}
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/About"
                style={CurrPath === "/About" ? { color: "blue" } : {}}
                onClick={() => setCurrPath("/About")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Products"
                style={CurrPath === "/Products" ? { color: "blue" } : {}}
                onClick={() => setCurrPath("/Products")}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Pricing"
                style={CurrPath === "/Pricing" ? { color: "blue" } : {}}
                onClick={() => setCurrPath("/Pricing")}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Support"
                style={CurrPath === "/Support" ? { color: "blue" } : {}}
                onClick={() => setCurrPath("/Support")}
              >
                Support
              </Link>
            </li>
            {user_info ? (
              <li className="nav-item">{user_info.username}</li>
            ) : (
              <p></p>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
