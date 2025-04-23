import React from 'react';
import { Link } from 'react-router-dom';
import { useNinjas } from '../Controleurs/NinjasContext';


export default function NinjasPage() {
  const ninjas = useNinjas();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-light">Liste des Ninjas</h1>
      <div className="row justify-content-center">
        {ninjas.map((ninja) => (
          <div
            key={ninja.id}
            className="card col-sm-10 col-md-6 col-lg-4 col-xl-3 m-3 p-0 shadow border-0 ninja-card" >
            <div className="card-header bg-warning text-dark fw-bold text-center">
              {ninja.name}
            </div>
            <img
              className="card-img-top"
              src={ninja.images[0]}
              alt={ninja.name}/>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-success"
                  onClick={() => console.log(`Ajout à la team: ${ninja.id}`)}>
                  Ajouter à la Team
                </button>
                <Link to={`/ninja/${ninja.id}`} className="btn btn-outline-light">
                  Détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
