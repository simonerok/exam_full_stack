import axios from "axios";

const apiClient = axios.create({
  // since i am in development, i will use the localhost url
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
});

export default apiClient;
