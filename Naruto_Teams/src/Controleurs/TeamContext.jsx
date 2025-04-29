import React, { createContext, useContext, useState, useEffect } from "react";
import TeamService from '../Modeles/TeamService';

// Création du contexte Team avec valeur par défaut
// Cela permet à n'importe quel composant enfant d'accéder à la team et aux méthodes associées
const TeamContext = createContext({
  team: [],
  ajouterTeam: () => {}, // Mettre des fonctions vides comme ça permet d'éviter des erreurs ! 
  oterTeam: () => {},
  resetTeam: () => {}
});

// Hook ! 
export function useTeam() {
  return useContext(TeamContext); 
}

export function TeamProvider({ children }) {
  const [team, setTeam] = useState([]); // state local pour stocker la team

// Chargement initial : lecteur le contenu sauvegardé dans localStorage   
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  useEffect(() => {
    const saved = TeamService.getTeam();
    setTeam(saved);
  }, []);

  // Update la save quand on ajoute un NINJA
  function ajouterTeam(ninja) {
    const updated = TeamService.ajouterMembre(ninja);
    setTeam(updated);
  }

  // Update la save quand on enlève un NINJA
  function oterTeam(id) {
    const updated = TeamService.retirerMembre(id);
    setTeam(updated);
  }

  // Update la save quand on RESET TOUT! 
  function resetTeam() {
    const updated = TeamService.viderTeam();
    setTeam(updated);
  }


  // Le provider 
  return (
    <TeamContext.Provider value={{ team, ajouterTeam, oterTeam, resetTeam }}>
      {children}
    </TeamContext.Provider>
  );
}
