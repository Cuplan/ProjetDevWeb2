import React, { createContext, useContext, useState, useEffect } from "react";
import TeamService from '../Modeles/TeamService';

const TeamContext = createContext({
  team: [],
  addToTeam: () => {},
  removeFromTeam: () => {},
  clearTeam: () => {}
});

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const [team, setTeam] = useState([]);

  // 1) Au montage, on charge la team depuis localStorage
  useEffect(() => {
    const saved = TeamService.getTeam();
    setTeam(saved);
  }, []);

  // 2) À chaque ajout, on utilise TeamService pour persister puis on met à jour le state
  function ajouterTeam(ninja) {
    const updated = TeamService.ajouterMembre(ninja);
    setTeam(updated);
  }

  function oterTeam(id) {
    const updated = TeamService.retirerMembre(id);
    setTeam(updated);
  }

  function resetTeam() {
    const updated = TeamService.viderTeam();
    setTeam(updated);
  }


  return (
    <TeamContext.Provider value={{ team, ajouterTeam, oterTeam, resetTeam }}>
      {children}
    </TeamContext.Provider>
  );
}
