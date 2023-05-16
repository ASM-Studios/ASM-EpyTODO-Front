import { checkToken } from "../utils/checks"
import React, {useState} from "react"
import Cookies from "js-cookie"
import axios from "axios"

const CreateTodo = () => {
    checkToken()
    const [errorMessage, setErrorMessage] = useState("")
    const id = Cookies.get("id")
    const createURL = "http://localhost:8080/todos"
    const [selectedOption, setSelectedOption] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        due_time: "",
        due_date: ""
    })

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            due_time: "",
            due_date: ""
        })
        setSelectedOption("")
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const CreateButton = () => {
        const createHandler = () => {
            //check if any field from the form is empty
            if (formData.title === "" || formData.description === "" || formData.due_date === "" || formData.due_time === "" || selectedOption === "") {
                setErrorMessage("Please fill all the fields")
                return null
            }
            const date = formData.due_date + " " + formData.due_time + ":00"
            const payload = {
                title: formData.title,
                description: formData.description,
                due_time: date,
                status: selectedOption,
                user_id: id
            }
            axios.post(createURL, payload, {
                headers: {
                    "Content-Type": `application/json`,
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            }).then(response => {
                console.log(response)
                resetForm()
            }).catch(error => {
                console.error(error)
                setErrorMessage("Something went wrong")
            })
        }
        return (
            <button className={"pixelBlueButton"} onClick={createHandler}>Create</button>
        )
    }

    return (
        <div className={"App-header"}>
            <h1 className={"pixel"}>Create a task</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className={"App-center"}>
                <form>
                    <label className={"label"}>Title:
                        <input className={"input"} name="title" type="text" value={formData.title} onChange={handleInputChange} />
                    </label><br/>
                    <label className={"label"}>Description:
                        <input className={"input"} name="description" type="text" value={formData.description} onChange={handleInputChange} />
                    </label><br/>
                    <label className={"label"}>Due date:
                        <input className={"input"} name="due_date" type="date" value={formData.due_date} onChange={handleInputChange} />
                    </label><br/>
                    <label className={"label"}>Due time:
                        <input className={"input"} name="due_time" type="time" value={formData.due_time} onChange={handleInputChange} />
                    </label><br/>
                    <label className={"pixel"}>Status:</label>
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="">-- Select a status --</option>
                        <option value="not started">not started</option>
                        <option value="todo">todo</option>
                        <option value="in progress">in progress</option>
                        <option value="done">done</option>
                    </select><br/>
                </form>
                <p></p>
                <div>
                    <CreateButton />
                </div>
            </div>
        </div>
    )
}

export default CreateTodo