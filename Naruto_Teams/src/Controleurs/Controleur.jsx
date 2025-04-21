import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NinjasProvider } from './NinjasContext';
import App from '../App';

// Contrôleur principal qui enveloppe l'application avec les providers
export default function Controleur() {
  return (
    <BrowserRouter>
      <NinjasProvider>
        <App />
      </NinjasProvider>
    </BrowserRouter>
  );
}
