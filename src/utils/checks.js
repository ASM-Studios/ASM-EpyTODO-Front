const Cookies = require("js-cookie")

const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const checkToken = (defaultURL = "http://localhost:3000") => {
    const token = Cookies.get("token");

    if (!token) {
        window.location.href = defaultURL;
    }
}

module.exports = { isEmail, checkToken }