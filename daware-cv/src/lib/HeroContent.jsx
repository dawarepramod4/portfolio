import React from "react";
import "../styles/heroCOntent.css";
import profielImage from "../assets/profile.jpeg";
function HeroContent() {
    let radius = 500;
    return (
        <div className="hero-content ">
            <div className="hero-content-text">
                <div className="hero-content-title gradient-text">Hello, I'm Pramod,</div>
                <div className="hero-content-subtitle">Software developer</div>
            </div>
            <div className="hero-content-description">
                Developing Applications in Flutter, Node.js, React, .NET. Working in Industry from
                2nd year of My College. Worked as primary developer for 2 Projects from start to
                end.
            </div>
            <button className="download-cv-btn active-btn gradient-container">Download CV</button>
            <div className="hero-content-image">
              <GradientBorderCircle Key="ProfileImage" radius={radius} />
               <div className="profile-img-container">
               <GradientBorderCircle
                    Key="ProfileImage"
                    image={profielImage}
                    radius={300}
                />
               </div>
            </div>
        </div>
    );
}

const GradientBorderCircle = function ({ image, radius }) {
    let borderwidth = 24;
    const innerStyle = {
        width: radius,
        height: radius,
        top: -borderwidth / 2,
        left: -borderwidth / 2,
    };
    const outerStyle = {
        width: radius - borderwidth,
        height: radius - borderwidth,
        backgroundImage:`url(${image})`,
    };
    return (
        <>
            <div style={outerStyle} className="circle circle-out">
                <div style={innerStyle} className="circle circle-in"></div>
            </div>
        </>
    );
};

export default HeroContent;
