import React from "react";
import NavBar from "./navbar";
import "../styles/home.css";
import HeroContent from "./HeroContent";
function HomePage() {
    return (
        <div className="home">
           <div className="col">
           <NavBar />
            <HeroContent/>
           </div>
        </div>
    );
}

export default HomePage;
