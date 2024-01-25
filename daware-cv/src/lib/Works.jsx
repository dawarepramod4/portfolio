import React from "react";
import "../styles/works.css";
import profileimage from "../assets/profile.jpeg";

function WorkExperience() {
    return (
        <>
            <div className="section-title">Work Experience</div>
            <div className="item-list">
                <WorkItem
                    description={
                        "Developing Flutter Cross platform application for developers to communicate, collaborate and develop better solutions"
                    }
                    title={"Tenfins Consultancy"}
                    designation={"Futter Developer"}
                    technologies={"Flutter, Node.js, MongoDB"}
                    imageUrl={profileimage}
                    isRemote={true}
                    

                />
                <WorkItem />
                <WorkItem />
            </div>
        </>
    );
}

function WorkItem({ title, designation, description, technologies, imageUrl, isRemote }) {
    return (
        <>
            <div className="work-container">
                <div className="work-inner-container">
                    <div className="work-item col">
                        <div className="work-image-container">
                            <img src={imageUrl} className="work-image" alt="" />
                            img
                        </div>
                        <div className="work-item-title">{title}</div>
                        <div className="work-designation">
                            {designation} | {isRemote ? "Remote" : "OnSite"}
                        </div>
                        <div className="work-item-description">{description}</div>
                        <div className="work-item-technologies">{technologies}</div>
                        <div className="row">
                            <button className="active-btn gradient-container link-btn">link</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
