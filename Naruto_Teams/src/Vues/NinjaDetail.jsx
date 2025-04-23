import React from "react";
import { Link } from "react-router-dom";
import { useNinjaDetail } from "../Controleurs/DetailContext";

export default function NinjaDetail() {
  const { ninja, refetchNinja } = useNinjaDetail();

  if (!ninja)
    return <div className="container my-5 text-center">Ninja introuvable...</div>;

  const ajouterAuPanier = (id) => {
    console.log("Ajout au Bingo Book :", id);
    // Ajout logique plus tard
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/ninjas" className="btn btn-outline-secondary">
           Retour à la liste
        </Link>
      </div>

      <div className="bingo-card shadow">
        <div className="card-body d-flex flex-column align-items-center">
          <img
            src={ninja.images[0]}
            alt={ninja.name.common}
            className="bingo-photo"
          />
          <h4 className="text-center fw-bold">{ninja.name.common}</h4>

          <div className="bingo-stats w-100 mt-3">
            <p><strong>Clan :</strong> {ninja.clan || 'Inconnu'}</p>
            <p><strong>Rang :</strong> {Object.values(ninja.rank.ninjaRank)}</p>
            <p><strong>Affiliations :</strong> {ninja.personal.affiliation}</p>
            <p><strong>Équipe :</strong> {ninja.personal.team}</p>
            <p><strong>Classement :</strong> {ninja.personal.classification}</p>
            <p><strong>Kekkei Genkai :</strong> {ninja.personal.kekkeiGenkai}</p>
            <p><strong>Outils :</strong> {ninja.tools}</p>
          </div>

          <button
            className="btn btn-danger mt-3"
            onClick={() => ajouterAuPanier(ninja.id)}
          >
            Ajouter à la team
          </button>
        </div>
      </div>
    </div>
  );
}
