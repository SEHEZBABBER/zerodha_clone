import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const { setuser_info } = useUserContext(); // ✅ Set user info after successful signup
  const { setCurrPath } = useUserContext(); // ✅ Update current path

  const [error, seterror] = useState(null);

  // ✅ State for form data
  const [obj, setobj] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Registration request
      const res = await axios.post("http://localhost:3002/register", obj, {
        withCredentials: true,
      });

      if (res.status === 201 || res.status === 200) {
        // ✅ Fetch user data after successful signup
        const userRes = await axios.get("http://localhost:3002/userdata", {
          withCredentials: true,
        });
        setuser_info(userRes.data);
        navigate("/"); // ✅ Redirect to home page after signup
      }
    } catch (err) {
      console.error("Signup error:", err);
      seterror(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup d-flex flex-row justify-content-center align-items-center mt-5">
      <div className="container d-flex flex-row justify-content-center align-items-center">
        {/* ✅ Left side image */}
        <div className="col-6 d-flex">
          <img
            src="/media/images/account_open.svg"
            alt="Signup Illustration"
            className="img-fluid"
          />
        </div>

        {/* ✅ Form Section */}
        <form
          className="d-flex flex-column justify-content-center align-items-center text-center col-6 text-center p-5"
          style={{ height: "100%", width: "30vw" }}
          onSubmit={handleSubmit}
          noValidate
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
            required
          />

          {/* ✅ Email Input */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.email}
            onChange={(e) => setobj({ ...obj, email: e.target.value })}
            required
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
            required
          />

          {/* ✅ Error Message */}
          {error && (
            <div>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}

          {/* ✅ Login Link */}
          <Link
            to="/Login"
            className="mb-3"
            style={{ textDecoration: "none" }}
            onClick={() => setCurrPath("/Login")}
          >
            Already have an account? Login
          </Link>

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="btn btn-primary p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
