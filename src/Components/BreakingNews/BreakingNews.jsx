import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex font-poppins border  bg-[#F3F3F3]">
           <button className="btn" style={{ backgroundColor: "#D72050", color: "white" }}>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;