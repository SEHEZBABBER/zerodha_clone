import { Link } from 'react-router-dom'
import { useUserContext } from '../../UserContext';
function Login() {
    const {CurrPath,setCurrPath} = useUserContext();
    return ( 
        <div className="login d-flex justify-content-center align-item-center mt-5">
            <div className="container d-flex flex-row justify-content-center">
                <div className="col-6 d-flex">
                    <img src="/media/images/account_open.svg" alt="Login Illustration"></img>
                </div>
                <form action="/" className="d-flex flex-column justify-content-center align-items-center text-center col-6 text-center p-5" style={{height:"100%", width:"30vw"}}>
                    <input type="text" name="username" id="username" placeholder="UserName" className="p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}} />
                    <input type="password" name="password" id="password" placeholder="Password" className="p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}} />
                    <Link to="/Signup" className="mb-3" style={{textDecoration:"none"}} onClick={()=>setCurrPath('/Signup')}>Don't have an account? Sign up</Link>
                    <button type="submit" className="btn btn-primary p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
