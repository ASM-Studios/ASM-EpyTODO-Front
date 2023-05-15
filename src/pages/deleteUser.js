import React from "react";

const DeleteUser = ({ id }) => {
    const ConfirmButton = () => {
        return (
            <button className={"entity-rectangle"}>
                <p className={"entity-title"}>Confirm</p>
            </button>
        )
    }

    const CancelButton = () => {
        return (
            <button className={"entity-rectangle"}>
                <p className={"entity-title"}>Cancel</p>
            </button>
        )
    }

    return (
        <div className={"App-header"}>
            <h1 className={"pixel"}>Confirm user deletion</h1>
            <div className={"buttonContainer"}>
                <ConfirmButton/>
                <CancelButton/>
            </div>
        </div>
    )
}

export default DeleteUser