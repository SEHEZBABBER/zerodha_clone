import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
  const { CurrPath, setCurrPath } = useUserContext();
  const {setuser_info} = useUserContext();

  const [obj, setobj] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3002/login", obj,{withCredentials:true})
    .then(()=>{
        axios.get("http://localhost:3002/userdata",{withCredentials:true})
        .then((res) => {
            setuser_info(res.data);
            navigate('/');
          });
    })
    .catch((err)=>console.log(err));
  }
  return (
    <div className="login d-flex justify-content-center align-item-center mt-5">
      <div className="container d-flex flex-row justify-content-center">
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
            onChange={(e)=>setobj({...obj,username:e.target.value})}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            value = {obj.password}
            onChange={(e)=>setobj({...obj,password:e.target.value})}
          />
          <Link
            to="/Signup"
            className="mb-3"
            style={{ textDecoration: "none" }}
            onClick={() => setCurrPath("/Signup")}
          >
            Don't have an account? Sign up
          </Link>
          <button
            type="submit"
            className="btn btn-primary p-2 ps-4 w-75 mb-3"
            style={{ borderRadius: "20px" }}
            onClick={(e)=>handleSubmit(e)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
