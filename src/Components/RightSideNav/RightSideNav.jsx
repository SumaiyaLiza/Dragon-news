import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl">Login With</h1>
                <button className="btn btn-outline border-blue-500 w-full text-blue-500 mb-4"> <FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn btn-outline w-full"> <FaGithub></FaGithub>Login with Github</button>
            </div>
            <div className="space-y-5 border border-gray-500 p-5">
                <a className="flex items-center space-x-2">
                    <FaFacebookF />
                    <span>Facebook</span>
                </a>
                <p className="flex items-center space-x-2">
                    <FaTwitter />
                    <span>Twitter</span>
                </p>
                <p className="flex items-center space-x-2">
                    <FaInstagram />
                    <span>Instagram</span>
                </p>
            </div>
           
           <div>
            <div>
                <h1>Q zone</h1>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
             
            </div>
           </div>
        </div>
    );
};

export default RightSideNav;