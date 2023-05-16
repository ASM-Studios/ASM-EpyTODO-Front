import { checkToken } from "../utils/checks"
import Cookies from "js-cookie"
import axios from "axios"
import { useEffect, useState } from "react"
import TodoModal from "../modals/todoModals"
import CreateTodoModal from "../modals/newTodoModal"
import "../styleSheet/App.css"
import "../styleSheet/background.css"
import "../styleSheet/button.css"
import "../styleSheet/form.css"
import "../styleSheet/text.css"
import "../styleSheet/dashboard.css"

const MyButton = ({ id, title }) => {
    return (
        <TodoModal id={id} title={title}/>
    )
}

const getAllTodo = () => {
    const getTodoURL = "http://localhost:8080/todos"
    const token = Cookies.get("token")

    return axios.get(getTodoURL, {
        headers: {
            "Content-Type": `application/json`,
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error)
        })
}

const Dashboard = () => {
    checkToken()
    const [values, setValues] = useState([])

    useEffect(() => {
        getAllTodo().then((data) => {
            setValues(data)
        }).catch((error) => {
            console.error(error)
            setValues([{id: "-1", title: "Error"}])
        })
    }, [])

    return (
        <div className={"Dashboard-page-background"}>
            <h1 className={"pixelDark"}>Dashboard</h1>
            <CreateTodoModal />
            {values && values.length > 0 ? (
                <div className="dashboard-container">
                    {values.map((entity, index) => (
                        <MyButton key={index} id={entity.id} title={entity.title}/>
                    ))}
                </div>
            ) :
            <div>
                <h1 className={"pixelDark"}>Be happy, you have nothing to do</h1>
                <p className={"pixelDark"}>(or you are not link to the db, in that case, stop being happy)</p>
            </div>
            }
            { null }
        </div>
    )
}

export default Dashboard
