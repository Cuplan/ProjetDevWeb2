import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import NinjasService from '../Modeles/NinjasService';

// Création du contexte pour partager les data d'UN ninja (1 seul, UNO) 
const NinjaDetailContext = createContext({});

// Hook ! Garre à toi Peter Pan 
export function useNinjaDetail() {
  return useContext(NinjaDetailContext);
}

// Provider 
export function NinjaDetailProvider({ children }) {
  // Récupère l'ID du ninja depuis l'URL 
  const { id } = useParams();

  // Stocker le ninja récupéré
  const [ninja, setNinja] = useState(null); // Null au début, car il y a pas de ninja avant qu'il y en ait un :p 

  // Fonction async pour appeler l'API et charger les détails du ninja
  const fetchNinja = async () => {
    const modele = new NinjasService();
    try {
      // Récupère le ninja par son ID
      const leNinja = await modele.getNinjaById(id);
      // Met à jour l'état avec les données reçues
      setNinja(leNinja);
    } catch (err) {
      // En cas d'erreur, affiche-la dans la console pour le debug
      console.error("Erreur lors du fetch du ninja :", err);
    }
  };

  // useEffect déclenché à chaque changement de l'ID
  // Permet de relancer la requête quand on navigue vers un autre ninja
  useEffect(() => { 
    fetchNinja();
  }, [id]);

  // Le provider 
  return (
    <NinjaDetailContext.Provider value={{ ninja, fetchNinja }}>
      {children}
    </NinjaDetailContext.Provider>
  );
}