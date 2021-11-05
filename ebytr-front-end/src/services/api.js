import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/tasks",
});

export default api;