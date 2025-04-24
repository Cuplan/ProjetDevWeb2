// src/Controleurs/Controleur.jsx
import React from "react";
import { NinjasProvider } from "./NinjasContext";
import { HomePageProvider } from "./HomePageControleur";
import { NinjaDetailProvider } from "./DetailContext";    // ← on l’importe
import App from "../App";

export default function Controleur() {
  return (
    <NinjasProvider>
      <HomePageProvider>
        <NinjaDetailProvider>   
          <App />
        </NinjaDetailProvider>
      </HomePageProvider>
    </NinjasProvider>
  );
}
