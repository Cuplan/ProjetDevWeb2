import React, { createContext, useContext, useState, useEffect } from "react";
import NinjasService from "../Modeles/NinjasService";

// On crée un contexte React pour partager la liste de ninjas et la fonction de filtre
export const NinjasContext = createContext({
  ninjas: [],          // liste des ninjas à afficher (éventuellement filtrée)
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
  }, []); // [] -> ne s'exécute qu'une fois

 
  function filterNinjas(term) {
    const lower = term.toLowerCase().trim();
    // On met à jour la liste affichée en ne gardant que les correspondances
    setNinjas(
      allNinjas.filter(ninja =>
        ninja.name.toLowerCase().includes(lower)
      )
    );
  }

  return (
    // On fournit aux enfants : la liste filtrée + la fonction de filtre
    <NinjasContext.Provider value={{ ninjas, filterNinjas }}>
      {children}
    </NinjasContext.Provider>
  );
}
