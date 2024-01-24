import React from "react";
import "../styles/navbar.css";

function NavBar() {
    return (
        <div className="navbar">
            <div className="user-Name">
                <img src="/logo192.png" alt="logo" />
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}
