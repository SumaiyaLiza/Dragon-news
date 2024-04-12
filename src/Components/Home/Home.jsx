import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navber from "../Navber/Navber";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>

            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h1 >This Home Section</h1>
            <div className="grid md:grid-cols-3">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border border-red-400">
                    <h1>News are comming</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;