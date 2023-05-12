import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import "./styleSheet/header.css"
import Modal from "react-modal"

const Header = () => {
    const profileURL = "http://localhost:3000/profile"
    const location = useLocation()
    const showHeader = ["/dashboard"].includes(location.pathname)

    const ProfileButton = () => {
        const [showProfile, setShowProfile] = useState(false)

        const handleOpenModal = () => {
            setShowProfile(true)
            document.body.style.overflow = "hidden"
        }

        const handleCloseModal = () => {
            setShowProfile(false)
            document.body.style.overflow = "auto"
        }

        const modalStyle = {
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            },
            content: {
                backgroundColor: "white",
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
                <button className="pixelBlueButton" onClick={handleOpenModal}>
                    Profile
                </button>
                <Modal
                    isOpen={showProfile}
                    onRequestClose={handleCloseModal}
                    style={modalStyle}
                >
                    <iframe src={profileURL} width="100%" height="100%"></iframe>
                </Modal>
            </div>
        )
    }

    return showHeader ? (
        <header className="header">
            <h1 className="pixelDark">ASM - Epytodo</h1>
            <ProfileButton />
        </header>
    ) : null
}

export default Header
