// src/Controleurs/NinjasContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import NinjasService from "../Modeles/NinjasService";

export const NinjasContext = createContext([]);

export function useNinjas() {
  return useContext(NinjasContext);
}

export function NinjasProvider({ children }) {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    const service = new NinjasService();
    service.getNinjasAsync()
      .then(data => {
        console.log("API renvoie :", data);
        // Choisit soit data (si c'est un Array), soit data.characters
        const list = Array.isArray(data) ? data : data.characters;
        if (!Array.isArray(list)) {
          console.error("Forme inattendue des données ninjas :", list);
          return;
        }
        setNinjas(list);
      })
      .catch(err => console.error("API ninjas error:", err));
  }, []);

  return (
    <NinjasContext.Provider value={ninjas}>
      {children}
    </NinjasContext.Provider>
  );
}
