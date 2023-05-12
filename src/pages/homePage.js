import React from "react"
import {Link} from "react-router-dom"
import '../styleSheet/button.css'
import "../styleSheet/background.css"
import "../styleSheet/homePage.css"

function LoginButton() {
    return (
        <Link to={"/login"}>
            <button className={"homeButton"}>Login</button>
        </Link>
)}

function RegisterButton() {
    return (
        <Link to={"/register"}>
            <button className={"homeButton"}>Register</button>
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

export default HomePage;