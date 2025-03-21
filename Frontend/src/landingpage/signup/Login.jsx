import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { useState } from "react";
import axios from "axios";

function Login() {
  const { CurrPath, setCurrPath } = useUserContext(); // ✅ Set path correctly
  const { setuser_info } = useUserContext(); // ✅ Set user info after login

  const [obj, setobj] = useState({
    username: "",
    password: "",
  });
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Login request
      const res = await axios.post("http://localhost:3002/login", obj, {
        withCredentials: true,
      });

      if (res.status === 200) {
        // ✅ Fetch user data after successful login
        const userRes = await axios.get("http://localhost:3002/userdata", {
          withCredentials: true,
        });
        setuser_info(userRes.data);
        navigate("/"); // ✅ Redirect to home page after login
      }
    } catch (err) {
      console.error("Login error:", err);
      seterror(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login d-flex justify-content-center align-item-center mt-5">
      <div className="container d-flex flex-row justify-content-center">
        {/* ✅ Left side image */}
        <div className="col-6 d-flex">
          <img
            src="/media/images/account_open.svg"
            alt="Login Illustration"
            className="img-fluid"
          />
        </div>

        {/* ✅ Form Section */}
        <form
          className="d-flex flex-column justify-content-center align-items-center text-center col-6 text-center p-5"
          style={{ height: "100%", width: "30vw" }}
          onSubmit={handleSubmit}
        >
          {/* ✅ Username Input */}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.username}
            onChange={(e) => setobj({ ...obj, username: e.target.value })}
          />

          {/* ✅ Password Input */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.password}
            onChange={(e) => setobj({ ...obj, password: e.target.value })}
          />

          {/* ✅ Error Message */}
          {error && (
            <div>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}

          {/* ✅ Signup Link */}
          <Link
            to="/Signup"
            className="mb-3"
            style={{ textDecoration: "none" }}
            onClick={() => setCurrPath("/Signup")}
          >
            Don't have an account? Sign up
          </Link>

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="btn btn-primary p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
