import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import axios from "axios";
import { useState } from "react";
function Signup() {
  const { CurrPath, setCurrPath } = useUserContext();
  let [obj, setobj] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    console.log("q");
    e.preventDefault();
    axios.post("http://localhost:3002/register", obj ,{withCredentials:true})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }
  return (
    <div className="signup d-flex flex-row jutify-content-center align-items-center mt-5">
      <div className="container d-flex flex-row justify-content-center align-items-center">
        <div className="col-6 d-flex">
          <img
            src="/media/images/account_open.svg"
            alt="Login Illustration"
          ></img>
        </div>
        <form
          action="/"
          className="d-flex flex-column justify-content-center align-items-center text-center col-6 text-center p-5"
          style={{ height: "100%", width: "30vw" }}
          onSubmit={(e)=>handleSubmit(e)}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.username}
            onChange={(e) => setobj({...obj,username:e.target.value})}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.email}
            onChange={(e)=>setobj({...obj,email:e.target.value})}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value={obj.password}
            onChange={(e)=>setobj({...obj,password:e.target.value})}
          />
          <Link
            to="/Login"
            className="mb-3"
            style={{ textDecoration: "none" }}
            onClick={() => setCurrPath("/Login")}
          >
            Already Have a account ? Login
          </Link>
          <button
            type="submit"
            className="btn btn-primary p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            onClick={(e)=>handleSubmit(e)}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
