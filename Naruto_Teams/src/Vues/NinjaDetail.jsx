import React from "react";
import { Link } from "react-router-dom";
import { useNinjaDetail } from "../Controleurs/DetailContext";
import { useTeam } from "../Controleurs/TeamContext";

export default function NinjaDetail() {
  const { ninja } = useNinjaDetail();
  const { ajouterTeam } = useTeam(); // hook pour ajouter


  if (!ninja)
    return <div className="container my-5 text-center">Ninja introuvable...</div>;

{/*AJouter le son du sharingan si c'est un uchiha!!! etc */}
  if(ninja?.personal.clan === 'Uchiha'){
    console.log('Ce Ninja est un uchiha')
  }


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
            src={ninja?.images?.[0] || "Aucun"}
            alt={ninja?.name || "Ninja inconnu"}
            className="bingo-photo"
          />
          <h4 className="text-center fw-bold">{ninja?.name || "Nom inconnu"}</h4>

          <div className="bingo-stats w-100 mt-3">
            <p><strong>Clan :</strong> {ninja?.personal.clan + " " || "Inconnu"}</p>
            <p><strong>Rang :</strong> { ninja?.rank?.ninjaRank ? Object.values(ninja.rank.ninjaRank) + " ": "Aucun"}</p>
            <p><strong>Affiliations :</strong> {ninja?.personal?.affiliation + " " || "Inconnu"}</p>
            <p><strong>Team:</strong> {ninja?.personal ?.team + " " || "Inconnue"}</p>
            <p><strong>Classement :</strong> {ninja?.personal?.classification + " " || "Non classé"}</p>
            <p><strong>Kekkei Genkai :</strong> {ninja?.personal?.kekkeiGenkai + " "|| "Aucun"}</p>
          </div>

          <button
            className="btn btn-danger mt-3"
            onClick={() => 
              ajouterTeam(ninja)
            }>
            Ajouter à la team
          </button>
        </div>
      </div>
    </div>
  );
}
