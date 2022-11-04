import axios from "axios"

const instance = axios.create({
    baseURL: 'https://chat-api-tuzw.onrender.com'
}) 

export default instance