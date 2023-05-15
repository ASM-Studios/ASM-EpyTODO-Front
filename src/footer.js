import { useLocation } from "react-router-dom"
import React from "react";

const Footer = () => {
    const location = useLocation()
    const showFooter = ["/dashboard", "/login", "/register", "/"].includes(location.pathname)

    return showFooter ? (
        <footer>
            <p>&emsp;Check out more content on <a href={"https://github.com/orgs/ASM-Studios/repositories"}>ASM Studio
                Repositories</a>.
            </p>
        </footer>
    ) : null
}

export default Footer