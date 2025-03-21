import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralContext from "./GeneralContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const { setSelectedMenu } = useContext(GeneralContext);
  const [user,setuser] = useState({
    username:"",
    email:"",
    password:"",
  });
  const navigate = useNavigate();
  const [error,seterror] = useState(null);
  const {setuser_info} = useContext(GeneralContext);
  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:3002/register",user,{withCredentials:true})
    .then((res)=>{
      axios.get("http://localhost:3002/userdata",{withCredentials:true})
      .then((res)=>{
        setuser_info(res.data);
      })
      navigate('/');
    })
    .catch((err)=>seterror(err.response.data.message));
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
        <form onSubmit={handleSubmit}>
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
              onChange={(e)=>setuser({...user,username:e.target.value})}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email Address
            </label>
            <input
              name='email'
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e)=>setuser({...user,email:e.target.value})}
            />
          </div>

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
              onChange={(e)=>setuser({...user,password:e.target.value})}
            />
          </div>

          {/* Sign Up Button */}
          {error ? ( 
          <div className="mb-3">
            <p style={{color:"red"}}>{error}</p>
          </div>
          ):(<div></div>)}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ borderRadius: "20px" }}
            onClick={(e)=>handleSubmit(e)}
          >
            Signup
          </button>

          {/* Already have an account? */}
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/Login" className="text-primary fw-bold" onClick={()=>setSelectedMenu(7)}>
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
