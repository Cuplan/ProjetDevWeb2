import React from "react";
import { NinjasProvider } from "./NinjasContext";
import { HomePageProvider } from "./HomePageControleur";
import App from "../App";

export default function Controleur() {
  return (
    <NinjasProvider>
      <HomePageProvider>
        <App />
      </HomePageProvider>
    </NinjasProvider>
  );
}
