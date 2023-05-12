import React from "react"
import {Link} from "react-router-dom"
import "../styleSheet/button.css"
import "../styleSheet/background.css"

const LoginButton = () => {
    return (
        <Link to={"/login"}>
            <button className={"pixelBlueButton"}>Login</button>
        </Link>
)}

const RegisterButton = () => {
    return (
        <Link to={"/register"}>
            <button className={"pixelBlueButton"}>Register</button>
        </Link>
)}

const HomePage = () => {
    return (
        <div className={"Home-page-background"}>
            <div className={"buttonContainer"}>
                <RegisterButton />
                <LoginButton />
            </div>
        </div>
)}

export default HomePage