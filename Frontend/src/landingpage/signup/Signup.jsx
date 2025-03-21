import { Link } from 'react-router-dom'
import { useUserContext } from '../../UserContext';
function Signup() {
    console.log(useUserContext());
    const {CurrPath,setCurrPath} = useUserContext();
    console.log(CurrPath);
    return ( 
        <div className="signup d-flex flex-row jutify-content-center align-items-center mt-5">
            <div className="container d-flex flex-row justify-content-center align-items-center">
                <div className="col-6 d-flex">
                    <img src="/media/images/account_open.svg" alt="Login Illustration"></img>
                </div>
                <form action="/" className="d-flex flex-column justify-content-center align-items-center text-center col-6 text-center p-5" style={{height:"100%", width:"30vw"}}>
                    <input type="text" name="username" id="username" placeholder="UserName" className="p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}} />
                    <input type="text" name="email" id="email" placeholder="email" className="p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}} />
                    <input type="password" name="password" id="password" placeholder="Password" className="p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}} />
                    <Link to="/Login" className="mb-3" style={{textDecoration:"none"}} onClick={()=>setCurrPath('/Login')}>Already Have a account ? Login</Link>
                    <button type="submit" className="btn btn-primary p-2 ps-4 w-75 mb-3" style={{borderRadius:"20px"}}>Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
