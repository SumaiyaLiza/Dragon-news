import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Navber/Navber";
import { useContext } from 'react';
import { AuthContext } from './../Provider/AuthProvider';


const Login = () => {
     
    const {signIn} = useContext(AuthContext); 
    const location = useLocation(); 
    console.log(location)

    const navigate = useNavigate(); 

   const handleLogin = e => {
    e.preventDefault(); 
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget); 
    console.log(form); 
    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
    .then(result => {
     console.log(result.user)

     navigate(location?.state ?location.state : '/' )
    })

    .catch(error => {
     console.log(error)
    })

    e.target.reset (); 
   }
    return (
        <div>
            <Navber></Navber>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login your account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" name ="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered" name="password" required />
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-gray-800 w-full text-white">Login</button>

                            </div>
                            <p>Dont’t Have An Account ? <Link className="text-red-500" to='/register'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;