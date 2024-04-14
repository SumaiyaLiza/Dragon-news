import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl mb-6">Login With</h1>
                <button className="btn btn-outline border-blue-500 w-full text-blue-500 mb-4"> <FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn btn-outline w-full"> <FaGithub></FaGithub>Login with Github</button>
            </div>
            <div className="mt-8">
            <h1 className="text-xl mb-6">Find Us On</h1>
            <p className="flex items-center space-x-2 rounded-t-md border-t border-l p-5 border-r border-gray-300">
                <FaFacebookF />
                <span>Facebook</span>
            </p>
            <p className="flex items-center space-x-2 border-t border-l border-r p-5 border-gray-300">
                <FaTwitter />
                <span>Twitter</span>
            </p>
            <p className="flex items-center space-x-2 rounded-b-md border p-5 border-gray-300">
                <FaInstagram />
                <span>Instagram</span>
            </p>
            </div>
           
           <div>
            <div className="mt-8">
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