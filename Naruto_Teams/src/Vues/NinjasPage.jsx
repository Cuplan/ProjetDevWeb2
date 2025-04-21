import React from 'react';
import { Link } from 'react-router-dom';
import { useNinjas } from '../Controleurs/NinjasContext';

export default function NinjasPage() {
  const ninjas = useNinjas();

  return (
    <div className="container container-fluid">
      <h1 className="my-3">Liste des Ninjas</h1>
      <div className="row" id="divNinjas">
        {ninjas.map((ninja) => {
          return (
            <div
              key={ninja.id}
              className="card col-sm-12 col-md-6 col-lg-3 p-0 m-2"
            >
              <div className="card-header">
                {ninja.name}
              </div>
              <img
                className="card-img-top rounded-0"
                src={ninja.images[0]}
                alt={ninja.name}
              />

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success"
                    onClick={() => console.log(`Ajout à la team: ${ninja.id}`)} >
                    Ajouter à ma team
                  </button>
                  <Link to={`/ninja/${ninja.id}`} className="btn btn-primary">
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
