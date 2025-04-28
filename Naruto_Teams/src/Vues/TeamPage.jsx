import React from 'react';
import { useTeam } from '../Controleurs/TeamContext';
import { Link } from 'react-router-dom';
import '../styles/naruto-theme.css';  

export default function TeamPage() {
  const { team, oterTeam, resetTeam } = useTeam();

  if (team.length === 0) {
    return (
      <div className="team-page container my-5 text-center">
        <h3>Ta team est vide</h3>
        <Link to="/ninjas" className="btn btn-primary mt-3">Voir les ninjas</Link>
      </div>
    );
  }

  return (
    <div className="team-page container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/ninjas" className="btn btn-outline-secondary">
          Retour à la liste
        </Link>
      </div>

      <h2 className=" team-page mb-4 text-center">Ma Team</h2>
      <div className="row">
        {team.map(ninja => (
          <div key={ninja.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={ninja.images[0]}
                alt={ninja.name}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{ninja.name}</h5>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => oterTeam(ninja.id)}>
                  Enlever de la team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton de réinitialisation */}
      <div className="text-center mt-4">
        <button className="btn btn-warning" onClick={resetTeam}>
          Réinitialiser la team
        </button>
      </div>
    </div>
  );
}
