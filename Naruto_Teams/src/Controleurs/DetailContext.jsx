import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NinjasService from '../Modeles/NinjasService';

const NinjaDetailContext = createContext(null);

export function useNinjaDetail() {
  return useContext(NinjaDetailContext);
}

export function NinjaDetailProvider({ children }) {
  const { id } = useParams();
  const [ninja, setNinja] = useState(null);

  const fetchNinja = async () => {
    const service = new NinjasService();
    try {
      const leNinja = await service.getNinjaById(id);
      setNinja(leNinja);
    } catch (err) {
      console.error("Erreur lors du fetch du ninja :", err);
    }
  };

  useEffect(() => {fetchNinja();}, [id]);

  return (
    <NinjaDetailContext.Provider value={{ ninja, refetchNinja: fetchNinja }}>
      {children}
    </NinjaDetailContext.Provider>
  );
}
