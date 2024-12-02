import React from "react";
import "../styles/works.css";
import profileimage from "../assets/profile.jpeg";
import ifxLogo from "../assets/infineon.png"
import tenfinsLogo from "../assets/tenfis_logo.svg";
import boundlessLogo from "../assets/boundless.png";

function WorkExperience() {
    return (
        <>
            <div className="section-title">Work Experience</div>
            <div className="item-list">
                <WorkItem
                    description={[
                        "Developed a plugin using C# and .NET with a modular architecture.",
                        "Designed and launched UIs using Syncfusion and C# Blazor in 3 months.",
                        "Built and deployed a chatbot using Microsoft Bot Framework and containerization tools.",
                    ]}
                    title={"Infineon Technologies EE"}
                    designation={"Software Developer"}
                    technologies={"C#, .Net, WPF, Blazor, Docker, Jenkins"}
                    imageUrl={ifxLogo}
                    isRemote={false}
                    location={"Bangalore, India"}
                />
                <WorkItem
                    description={[
                        "Developed a plugin using C# and .NET with a modular architecture.",
                    ]}
                    title={"Infineon Technologies Intern"}
                    designation={"Software Developer Apprentice"}
                    technologies={"C#, .Net, WPF, Blazor, Docker, Jenkins"}
                    imageUrl={ifxLogo}
                    isRemote={false}
                    location={"Bangalore, India"}
                />
                <WorkItem
                    description={[
                        'Leverage Flutter\'s capability of Cross Platform Development of "Portal" Mobile Application',
                        "Use Bloc Architecture for State Manganement",
                    ]}
                    title={"Tenfins Consultancy"}
                    designation={"Futter Developer"}
                    technologies={"Flutter, Bloc Architecture"}
                    imageUrl={tenfinsLogo}
                    isRemote={true}
                    location={"Boulder, Colorado, United States"}
                />
                <WorkItem
                    description={["Worked solely on Social Media Application \Boundless\".","Used Node.js for Backend for Boundless with optimizations for Saving data such as ffmpeg.","Used Firebase for Messaging, Notifications, Monitoring application. ", "Release Application on Play Store."]}
                    title={"Oasis.io"}
                    designation={"Futter Developer"}
                    technologies={"Flutter, Node.js, MongoDB"}
                    imageUrl={boundlessLogo}
                    isRemote={true}
                    location={""}
                />
            </div>
        </>
    );
}

function WorkItem({ title, designation, description, technologies, imageUrl, isRemote, location }) {
    const desc = (
        <ul>
            {description.map((e, index) => (
                <li>
                    {e}
                    <br></br>
                </li>
            ))}
        </ul>
    );
    return (
        <>
            <div className="work-container">
                <div className="work-inner-container">
                    <div className="work-item">
                        <div className="work-image-container">
                            <img src={imageUrl} className="work-image" alt="" />
                        </div>
                        <div className="work-item-title">{title}</div>
                        <div className="work-designation">
                            {designation} | {isRemote ? "Remote" : "OnSite"} | {location}
                        </div>
                        <div className="work-item-description">{desc}</div>
                        <div className="work-item-technologies">{technologies}</div>
                        <div className="bottom">
                            <button className="active-btn gradient-container link-btn">link</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
