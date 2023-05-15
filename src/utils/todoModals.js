import React, { useState } from "react"
import Modal from "react-modal"

const TodoModal = ( {id, title}) => {

    const [showTodo, setShowTodo] = useState(false)
    const todoURL = "/todos/"

    const handleOpenModal = () => {
        setShowTodo(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setShowTodo(false)
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
            width: "50%",
            height: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }

    return (
        <div>
            <button className="entity-rectangle" onClick={handleOpenModal}>
                <p className={"entity-title"}>{title}</p>
            </button>
            <Modal
                isOpen={showTodo}
                onRequestClose={handleCloseModal}
                style={modalStyle}
            >
                <iframe title={"profileIframe"} src={todoURL + id} width="100%" height="100%"></iframe>
            </Modal>
        </div>
    )
}

export default TodoModal
