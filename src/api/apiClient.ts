import axios from "axios";

const token = import.meta.env.API_ACCESS_TOKEN;

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default apiClient;
