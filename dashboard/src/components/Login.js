import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
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
        <form>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ borderRadius: "20px" }}
          >
            Sign Up
          </button>

          {/* Already have an account? */}
          <div className="text-center">
            <p>
              Dont have an account?{" "}
              <Link to="/Signup" className="text-primary fw-bold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
