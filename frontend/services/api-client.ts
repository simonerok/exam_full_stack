import axios from "axios";

const apiClient = axios.create({
  //baseURL: "import.meta.env.VITE_BASE_URL",
  //baseURL: "http://localhost:5000/",
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
