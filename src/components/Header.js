import React from "react";
import './Header.css'

const Header = ({user}) => {
    const {name, status, profile_pic} = user;

    return (
        <header className="Header">
            <img src={profile_pic} alt={name} className="User__pic"/>
            <h1 className="Header__name">{name}</h1>
            <h1 className="Header__status">{status}</h1>
        </header>
    )
};

export default Header;