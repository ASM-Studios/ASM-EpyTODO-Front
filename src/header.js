import React from "react"
import { useLocation } from "react-router-dom"
import "./styleSheet/header.css"

const Header = () => {
    const location = useLocation()

    const showHeader = ["/dashboard"].includes(location.pathname)

    const ProfileButton = () => {
        return (
            <button className={"pixelBlueButton"}>Profile</button>
        )
    }

    return showHeader ? (
        <header className={"header"}>
            <h1 className={"pixelDark"}>ASM - Epytodo</h1>
            <ProfileButton />
        </header>
    ) : null
}

export default Header
