import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // URL del tuo backend
});

// services/api.ts
export const fetchConversations = async () => {
  try {
    const response = await api.get("/conversations");  // Modifica questo URL se necessario
    return response.data;
  } catch (error) {
    console.error("Errore durante il recupero delle conversazioni:", error);
    return [];
  }
};

