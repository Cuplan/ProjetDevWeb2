import React, { createContext, useContext, useState, useEffect } from 'react';
import PanierService from '../Modeles/PanierService';

export const PanierContext = createContext({
    ninja: []
})

// Hook personnalisé pour accéder facilement au contexte dans les composants
export function usePanierList() {
  return useContext(PanierContext);
}


    
