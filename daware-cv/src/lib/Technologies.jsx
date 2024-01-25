import React from "react";
import "../styles/technology.css";

function Technologies() {
    return (
        <>
            <div className="section-title">Technologies</div>
            <div className="col">
                <TechnologyItem percentage={50} title={"Flutter"} />
                <TechnologyItem percentage={50} title={"React"} />
                <TechnologyItem percentage={50} title={"Node.js"} />
            </div>
        </>
    );
}

function TechnologyItem({percentage, title}) {
    return (
        <div className="technology-item">
            <div className="technology-title">{title}</div>
            <div  className="progress-bar">
            
            <div style={{width:`${percentage}%`}} className="progress gradient-container"></div>
            </div>
        </div>
    );
}

export default Technologies;
