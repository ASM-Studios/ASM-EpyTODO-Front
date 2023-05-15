import { checkToken } from "../utils/checks"
import DeleteModal from "../utils/DeleteModal"
import UpdateUserModal from "../utils/updateUserModal"
const  Cookie = require("js-cookie")

const Profile = () => {
    checkToken()

    const DeleteUser = ({ id }) => {
        return (
            <DeleteModal id={id}/>
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