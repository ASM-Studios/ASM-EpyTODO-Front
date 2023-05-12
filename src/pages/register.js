import React, { useState } from 'react'
// import {Link} from "react-router-dom"
// import ReactDOM from 'react-dom/client'
// import axios from "axios";
import '../styleSheet/App.css'
import '../styleSheet/background.css'
import '../styleSheet/button.css'
import '../styleSheet/form.css'
import '../styleSheet/register.css'



function Register() {
    let error = "None"
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        firstname: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    };

    const RegisterButton = () => {
        const createUser = () => {
            console.table(formData.email, formData.password, formData.name, formData.firstname)
            if (formData.password !== formData.passwordConfirm) {
                error = "password"
                return null
            }
        }
        return (
            <button className={"registerButton"} onClick={createUser}>Register</button>
        )}

    return (
        <div className="Register-page-background">
            <h1>Register Now</h1>
            <h3>Get a free hug</h3>
            <br/><br/>
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
    );
}
export default Register;