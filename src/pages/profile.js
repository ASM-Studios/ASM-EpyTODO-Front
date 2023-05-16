import { checkToken } from "../utils/checks"
import UpdateUserModal from "../modals/updateUserModal"
import axios from "axios";
import Cookies from "js-cookie";
const  Cookie = require("js-cookie")

const Profile = () => {
    checkToken()
    const id = Cookie.get("id")
    const deleteURL = "http://localhost:8080/users/"

    const DeleteUser = () => {
        const deleteHandler = () => {
            axios.delete(deleteURL + id, {
                headers: {
                    "Content-Type": `application/json`,
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            }).then(response => {
                console.log(response)
                Cookies.remove("token")
                Cookies.remove("id")
            }).catch(error => {
                console.error(error)
            })
        }
        return (
            <button className={"pixelBlueButton"} onClick={deleteHandler}>Delete</button>
        )
    }

    const UpdateUser = () => {
        return (
            <UpdateUserModal id={id}></UpdateUserModal>
        )
    }

    return (
        <div className={"App-header"}>
            <h1 className={"pixel"}>Profile</h1>
            <div className={"buttonContainer"}>
                <DeleteUser />
                <UpdateUser />
            </div>
        </div>
    )
}

export default Profile