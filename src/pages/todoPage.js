import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import UpdateTodoModal from "../modals/updateTodoModal"
import "../styleSheet/App.css"
import "../styleSheet/background.css"
import "../styleSheet/button.css"
import "../styleSheet/form.css"
import "../styleSheet/text.css"
import "../styleSheet/dashboard.css"

const Todo = () => {

    const id = window.location.pathname.split("/").pop()
    const [data, setData] = useState(null)

    useEffect(() => {
        const getTodoById = async () => {
            const getTodoURL = "http://localhost:8080/todos/"
            const token = Cookies.get("token")

            try {
                const response = await axios.get(getTodoURL + id, {
                    headers: {
                        "Content-Type": `application/json`,
                        "Authorization": `Bearer ${token}`
                    }
                })
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getTodoById().then(r => null)
    }, [id])

    return (
        <div className={"App-header"}>
            <h1 className={"pixelDark"}>Todo {id}</h1>
            {data &&
                <>
                    <p className={"pixel"}>title: {data.title}</p>
                    <p className={"pixel"}>description: {data.description}</p>
                    <p className={"pixel"}>From: {data.created_at}</p>
                    <p className={"pixel"}>To: {data.due_time}</p>
                    <p className={"pixel"}>status: {data.status}</p>
                    <p className={"pixel"}>user id: {data.user_id}</p>
                </>
            }
            <div>
                <UpdateTodoModal id={id}/>
            </div>
        </div>
    )
}

export default Todo