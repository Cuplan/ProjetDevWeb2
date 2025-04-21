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
    const modele = new NinjasService();
    modele.getNinjasAsync()
      .then(lesNinjas => { setNinjas(lesNinjas) })
      .catch(err => console.error(err));
  }, []);

  return (
    <NinjasContext.Provider value={ninjas}>
      {children}
    </NinjasContext.Provider>
  );
}
