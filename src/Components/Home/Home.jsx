import { useEffect, useState } from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navber from "../Navber/Navber";
import RightSideNav from "../RightSideNav/RightSideNav";
import News from "../News/News";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   
    const allnews = useLoaderData(); 

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h1>Dragon News</h1>
                    {
                        allnews.map(news => <News key={news._id} news={news} ></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div> 
    );
};

export default Home;