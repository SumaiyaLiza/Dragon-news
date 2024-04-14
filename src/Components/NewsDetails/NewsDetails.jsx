import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import Navber from "../Navber/Navber";

const NewsDetails = () => { 

    const {id} = useParams(); 
    return (
        
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid grid-cols-4"> 
                <div className="col-span-3">
                <p>Dragon News</p>
                  <p>{id}</p>
                </div>
                <div>
            <RightSideNav></RightSideNav>
            </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;