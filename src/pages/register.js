import React, { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { isEmail } from "../utils/checks"
import { useNavigate } from "react-router-dom"
import "../styleSheet/App.css"
import "../styleSheet/background.css"
import "../styleSheet/button.css"
import "../styleSheet/form.css"
import "../styleSheet/register.css"
import "../styleSheet/text.css"




const Register = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const registerURL = "http://localhost:8080/register"
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        firstname: ""
    })

    const resetForm = () => {
        setFormData({
            email: "",
            password: "",
            passwordConfirm: "",
            name: "",
            firstname: ""
        })
    }

    const setIdByEmail = (email, token) => {
        Cookies.set("nothing", "nothing")
        const getIdURL = "http://localhost:8080/users/"

        return axios.get(getIdURL + email, {
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            Cookies.set("id", response.data.id)
        }).catch(error => {
            console.error(error)
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const RegisterButton = () => {

        const navigate = useNavigate()

        const createUser = () => {
            if (!formData.email || !formData.password || !formData.passwordConfirm || !formData.name || ! formData.firstname) {
                setErrorMessage("All field must be complete.")
                return null
            } else if (formData.password !== formData.passwordConfirm) {
                setErrorMessage("Password do not match.")
                return null
            } else if (!isEmail(formData.email)) {
                setErrorMessage("Please enter a valid email address.")
                return null
            } else {
                const payload = {
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    firstname: formData.firstname
                }
                axios.post(registerURL, payload).then(response => {
                    const token = response.data.token
                    if (!token) {
                    setErrorMessage("Scrap, token wasn't provided")
                    return null
                } else {
                        Cookies.set("token", token)
                        setIdByEmail(formData.email, token)
                        navigate("/dashboard")
                    }
                }).catch(error => {
                    try {
                        setErrorMessage("Scrap, something went wrong: " + error.response.data.msg)
                    } catch (error) {
                        setErrorMessage("Scrap, something went wrong")
                    }
                    console.error(error)
                })
                setErrorMessage("")
                resetForm()
            }
        }
        return (
            <button className={"registerButton"} onClick={createUser}>Register</button>
        )
    }
    return (
        <div className="Register-page-background">
            <h1> </h1>
            <h3> </h3>
            <h3> </h3>
            <br/><br/>
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
                <label className={"label"}>Name:
                    <input className={"input"} name="name" type="text" value={formData.name} onChange={handleInputChange} />
                </label><br/>
                <label className={"label"}>Firstname:
                    <input className={"input"} name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} />
                </label>
            </form>
            <RegisterButton />
        </div>
    )
}
export default Register