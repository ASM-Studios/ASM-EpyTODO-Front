import React, { useState } from "react"
import Modal from "react-modal"

const NewTodoModal = () => {
    const [showNewTodo, setShowNewTodo] = useState(false)
    const newTodoURL = "/createTodo"

    const handleOpenModal = () => {
        setShowNewTodo(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setShowNewTodo(false)
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
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }

    return (
        <div>
            <button className={"pixelBlueButton"} onClick={handleOpenModal}>
                <h1 className={"entity-title"}>+ task</h1>
            </button>
            <Modal
                isOpen={showNewTodo}
                onRequestClose={handleCloseModal}
                style={modalStyle}
            >
                <iframe title={"profileIframe"} src={newTodoURL} width="100%" height="100%"></iframe>
            </Modal>
        </div>
    )
}

export default NewTodoModal