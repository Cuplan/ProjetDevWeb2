import React from 'react';
import { useTeam } from '../Controleurs/TeamContext';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  const { team } = useTeam();

  if (team.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Ta team est vide</h3>
        <Link to="/ninjas" className="btn btn-primary mt-3">Voir les ninjas</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Ma Team</h2>
      <div className="row">
        {team.map(ninja => (
          <div key={ninja.id} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img 
                src={ninja.images[0]} 
                alt={ninja.name} 
                className="card-img-top" 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{ninja.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
