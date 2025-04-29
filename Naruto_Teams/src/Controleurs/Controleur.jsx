import React from "react";
import { NinjasProvider } from "./NinjasContext";
import { HomePageProvider } from "./HomePageContext";
import App from "../App";
import { TeamProvider } from "./TeamContext";

// controleur 8) 
export default function Controleur() {
  return (
    <NinjasProvider>
      <HomePageProvider>
        <TeamProvider>
        <App /> 
        </TeamProvider>
      </HomePageProvider>
    </NinjasProvider>
  );
}

