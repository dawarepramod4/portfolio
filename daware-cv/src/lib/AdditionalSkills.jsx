import React from "react";
import "../styles/additionSkills.css";

function AdditionalSkills() {
    return (
        <>
            <div className="section-title">Additional Skills</div>
            <div className="skills-list">
                <SkillItem title={"Flutter"} />
                <SkillItem title={"React"} />
                <SkillItem title={"Node.js"} />
            </div>
        </>
    );
}

function SkillItem({title}){
return (
  <>
  <div className="skill-item">
    <div className="bullet gradient-container"></div>
    <div className="skill-title">title</div>
</div>
  </>
)
}

export default AdditionalSkills;