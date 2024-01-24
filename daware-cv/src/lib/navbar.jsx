import React from "react";
import "../styles/navbar.css";

function NavBar() {
    return (
        <div className="navbar ">
            <div className="user-name">P.DAWARE</div>
            {["Projects", "Technologies", "About me", "Contact"].map((link) => (
                <NavBarLink key={link} link={link} />
            ))}
        </div>
    );
}

function NavBarLink(props) {
    return <div className="navbar-link">{props.link}</div>;
}

export default NavBar;
