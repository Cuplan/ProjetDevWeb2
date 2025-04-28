import React, { createContext, useContext, useState, useEffect } from "react";
import NinjasService from "../Modeles/NinjasService";


export const NinjasContext = createContext({
  ninjas: [],          // liste des ninjas à afficher filtrés
  filterNinjas: () => {} // fonction pour filtrer la liste
});

// Hook personnalisé pour accéder facilement au contexte dans les composants
export function useNinjas() {
  return useContext(NinjasContext);
}

// Provider qui englobe les composants nécessitant l'accès aux ninjas
export function NinjasProvider({ children }) {
  // allNinjas : la liste complète récupérée depuis l'API
  const [allNinjas, setAllNinjas] = useState([]);
  // ninjas : la liste affichée, modifiable par le filtre
  const [ninjas, setNinjas] = useState([]);

  // Au montage du composant, on fetch les données via le service
  useEffect(() => {
    const modele = new NinjasService();
    modele.getNinjasAsync()
      .then(lesNinjas => {
        setAllNinjas(lesNinjas); // on stocke la totalité
        setNinjas(lesNinjas);    // on initialise la liste affichée
      })
      .catch(err => console.error(err)); // gestion basique des erreurs
  }, []); // [] =  ne s'exécute qu'une fois

 
  function filterNinjas(term) {
    const lower = term.toLowerCase().trim();
    // On met à jour la liste affichée dynamiquement
    setNinjas(
      allNinjas.filter(ninja =>
        ninja.name.toLowerCase().includes(lower)
      )
    );
  }

  return (
    // eat my children
    <NinjasContext.Provider value={{ ninjas, filterNinjas }}>
      {children}
    </NinjasContext.Provider>
  );
}
