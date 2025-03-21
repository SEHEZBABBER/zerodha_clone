import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralContext from "./GeneralContext";
import { useContext, useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(GeneralContext);
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const [error, seterror] = useState(null);
  const { setuser_info } = useContext(GeneralContext);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3002/login", user, { withCredentials: true })
      .then((res) => {
        axios
          .get("http://localhost:3002/userdata", { withCredentials: true })
          .then((res) => {
            setuser_info(res.data);
          });
        navigate('/');
      })
      .catch((err) => seterror(err.response.data.message));
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "400px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
            />
          </div>

          {/* Email */}

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </div>
          {error ? (
            <div className="mb-3">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          ) : (
            <div></div>
          )}
          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ borderRadius: "20px" }}
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
          {/* Already have an account? */}
          <div className="text-center">
            <p>
              Dont have an account?{" "}
              <Link
                to="/Signup"
                className="text-primary fw-bold"
                onClick={() => setSelectedMenu(0)}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
