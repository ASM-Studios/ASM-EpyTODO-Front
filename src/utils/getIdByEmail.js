const axios = require("axios")
const Cookies = require("js-cookie")

const getIdByEmail = (email, token) => {
    const getIdURL = "http://localhost:8080/users/"

    return axios.get(getIdURL + email, {
        headers: {
            "Content-Type": `application/json`,
            "Authorization": `Bearer ${token}`
        }
    }).then(response => {
        Cookies.set("id", response.data.id)
    }).catch(error => {
        console.error(error)
    })
}

module.exports = { getIdByEmail }