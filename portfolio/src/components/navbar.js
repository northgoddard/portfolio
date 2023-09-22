import React from "react";

function Navbar({ currentPage, handlePageChange}){
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#about" onClick={() => handlePageChange("About")}>About</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => handlePageChange("Projects")}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;