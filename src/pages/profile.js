import { checkToken } from "../utils/checks"

const Profile = () => {
    checkToken()

    return (
        <div>
            <h1 className={"pixelDark"}>Profile</h1>
        </div>
    )
}

export default Profile