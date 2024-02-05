import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-lxn7.onrender.com/api/'
})

export default instance