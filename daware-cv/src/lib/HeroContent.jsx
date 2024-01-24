import React from "react";
import "../styles/heroCOntent.css";
function HeroContent() {
    return (
            <div className="hero-content row">
                <div className="hero-content-text">
                    <div className="hero-content-title">Hello, I'm P.Daware,</div>
                    <div className="hero-content-subtitle">I'm a Software developer</div>
                </div>
                <div className="hero-content-image">
                    <img
                        src="https://avatars.githubusercontent.com/u/59896297?v=4"
                        alt="P.Daware"
                    />
                </div>
            </div>

    );
}

export default HeroContent;
