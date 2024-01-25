import React from "react";
import NavBar from "./navbar";
import "../styles/home.css";
import HeroContent from "./HeroContent";
import WorkExperience from "./Works";
import Technologies from "./Technologies";
import AdditionalSkills from "./AdditionalSkills";
function HomePage() {
    return (
        <div className="home">
            <div className="col">
                <NavBar />
                <HeroContent />
                <WorkExperience />
                <Technologies />
                <AdditionalSkills/>
            </div>
        </div>
    );
}

export default HomePage;
