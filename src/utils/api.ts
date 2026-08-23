import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchDataFromApi = async (url: string) => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error: any) {
    return error.response?.data || { error: true, message: error.message };
  }
};

export default api;