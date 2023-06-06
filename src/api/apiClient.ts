import axios from "axios";

const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODYzYWU0OTlhNTZhYWI1OTllZmZjMmIzMThlNjhkZCIsInN1YiI6IjY0N2YzOWJjMTc0OTczMDBkZTY4MTI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjWfdfnyJ-cQb_UELn3s_Lym5VhopsjP3bz0pE-UJko";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default apiClient;
