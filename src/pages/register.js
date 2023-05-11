import React from "react"
import { useState } from "react"
import {Link} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import axios from "axios";
import '../App.css'

const Login = () => {
    const [name, setName] = useState("")

    return (
        <div className="App-header">
            <h2>Register page</h2>
        </div>
    )
}
export default Login;