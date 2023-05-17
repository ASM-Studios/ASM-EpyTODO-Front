import React, { useState } from "react"
import Modal from "react-modal"
import "../styleSheet/modal.css"

const UpdateTodoModal = ( {id} ) => {
    const [showUpdate, setShowUpdate] = useState(false)
    const updateTodoURL = "/updateTodo/"

    const handleOpenModal = () => {
        setShowUpdate(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setShowUpdate(false)
        document.body.style.overflow = "auto"
    }

    const modalStyle = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
            backgroundColor: "#92c0e3",
            border: "none",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }

    return (
        <div>
            <button className={"pixelBlueButton"} onClick={handleOpenModal}>
                <h1 className={"modal-title"}>Update</h1>
            </button>
            <Modal
                isOpen={showUpdate}
                onRequestClose={handleCloseModal}
                style={modalStyle}
            >
                <iframe title={"profileIframe"} src={updateTodoURL + id} width="100%" height="100%"></iframe>
            </Modal>
        </div>
    )
}

export default UpdateTodoModal