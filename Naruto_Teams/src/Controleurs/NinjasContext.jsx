// src/Controleurs/NinjasContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import NinjasService from "../Modeles/NinjasService";

// 1. Création du contexte (vide par défaut)
export const NinjasContext = createContext([]);

// 2. Hook personnalisé pour consommer le contexte
export function useNinjas() {
  return useContext(NinjasContext);
}

// 3. Provider qui fetch l'API et expose le tableau complet
export function NinjasProvider({ children }) {
  const [ninjas, setNinjas] = useState([]);  // on part de [] vide

  useEffect(() => {
    const service = new NinjasService();
    service.getNinjasAsync()
      .then(data => setNinjas(data))
      .catch(err => console.error("API ninjas error:", err));
  }, []);

  return (
    <NinjasContext.Provider value={ninjas}>
      {children}
    </NinjasContext.Provider>
  );
}
