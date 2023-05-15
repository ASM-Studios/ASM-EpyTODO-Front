import React, { useState } from "react"
import Modal from "react-modal"

const DeleteModal = ( {id}) => {
    const [showDelete, setShowDelete] = useState(false)
    const deleteURL = "/delete/"

    const handleOpenModal = () => {
        setShowDelete(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setShowDelete(false)
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
            width: "90%",
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
                <h1 className={"entity-title"}>Delete</h1>
            </button>
            <Modal
                isOpen={showDelete}
                onRequestClose={handleCloseModal}
                style={modalStyle}
            >
                <iframe title={"profileIframe"} src={deleteURL + id} width="100%" height="100%"></iframe>
            </Modal>
        </div>
    )
}

export default DeleteModal