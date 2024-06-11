import React from "react"
import Logo from "../assets/logo.png"

function Header() {
    return (
        <>
            {/* <img src={Logo} className="logo" alt="Logo"></img> */}
            <i className="logo fa-solid fa-mountain-sun"></i>
            <h1 className="header-title">Travel Wishboard</h1>
        </>
    )
}

export default Header
