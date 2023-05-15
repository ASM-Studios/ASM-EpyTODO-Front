import React, { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { isEmail } from "../utils/checks"
import "../styleSheet/App.css"
import "../styleSheet/background.css"
import "../styleSheet/button.css"
import "../styleSheet/form.css"
import "../styleSheet/register.css"
import "../styleSheet/text.css"

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const loginURL = "http://localhost:8080/login"
    const dashboardURL = "http://localhost:3000/dashboard"
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const resetForm = () => {
        setFormData({
            email: "",
            password: "",
            passwordConfirm: ""
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const LoginButton = () => {
        const createUser = () => {
            if (!formData.email || !formData.password || !formData.passwordConfirm) {
                setErrorMessage("All field must be complete.")
                return null
            } else if (formData.password !== formData.passwordConfirm) {
                setErrorMessage("Password do not match.")
                return null
            } else {
                if (!isEmail(formData.email)) {
                    setErrorMessage("Please enter a valid email address.")
                    return null
                } else {
                    const payload = {
                        email: formData.email,
                        password: formData.password
                    }
                    axios.post(loginURL, payload).then(response => {
                        const token = response.data.token
                        if (!token) {
                            setErrorMessage("Scrap, token wasn't provided")
                            return null
                        } else {
                            Cookies.set("token", token)
                            window.location.href = "/dashboard"
                        }
                    }).catch(error => {
                        setErrorMessage("Scrap, something went wrong: " + error.response.data.msg)
                        console.error(error)
                    })
                    setErrorMessage("")
                    resetForm()
                }
            }
        }
        return (
            <button className={"registerButton"} onClick={createUser}>Register</button>
        )
    }
    return (
        <div className="Register-page-background">
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form className={"form"}>
                <label className={"label"}>Email:
                    <input className={"input"} name="email" type="email" value={formData.email} onChange={handleInputChange} />
                </label><br/>
                <label className={"label"}>Password:
                    <input className={"input"} name="password" type="password" value={formData.password} onChange={handleInputChange} />
                </label><br/>
                <label className={"label"}>Confirm password:
                    <input className={"input"} name="passwordConfirm" type="password" value={formData.passwordConfirm} onChange={handleInputChange} />
                </label><br/>
            </form>
            <LoginButton />
        </div>
    )
}
export default Login