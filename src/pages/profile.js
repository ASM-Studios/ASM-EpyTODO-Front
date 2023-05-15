import { checkToken } from "../utils/checks"
import UpdateUserModal from "../modals/updateUserModal"
const  Cookie = require("js-cookie")

const Profile = () => {
    checkToken()

    const DeleteUser = ({ id }) => {
        const deleteHandler = () => {
            console.log("Delete user: " + id)
        }
        return (
            <button className={"pixelBlueButton"} onClick={deleteHandler}>Delete</button>
        )
    }

    const UpdateUser = ({ id }) => {
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