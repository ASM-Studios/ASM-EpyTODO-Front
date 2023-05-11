import React from "react"
import '../button.css'
import {Link} from "react-router-dom"

function LoginButton() {
    return (
        <Link to={"/login"}>
            <button className={"buttonGreen"}>Login</button>
        </Link>
)}

function RegisterButton() {
    return (
        <Link to={"/register"}>
            <button className={"buttonGreen"}>Register</button>
        </Link>
)}

const HomePage = () => {
    return (
        <div className="App-header">
            <h2>Home Page</h2>
            <br />
            <br />
            <LoginButton />
            <RegisterButton />
        </div>
)}

export default HomePage;