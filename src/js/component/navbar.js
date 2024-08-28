import { Link } from "react-router-dom";
import React from "react";
import "../../styles/home.css";

export const Navbar = () => {
    return (
        <nav className="container-fluid navbar mb-3 p-2">
            <Link to="/">
                <img
                    className="navbar-logo"
                    src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                    alt="Star Wars Logo"
                />
            </Link>
            
        </nav>
    );
};
