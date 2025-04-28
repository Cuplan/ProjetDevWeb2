import React from 'react';
import { Link } from 'react-router-dom';
import { usePanierList } from '../Controleurs/PanierContext';

export default function NinjasPage() {
  const { ninjas} = usePanierList() 

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-light">Ninjas dans ta team</h1>
      <div className="row justify-content-center">
        {ninjas.length > 0 ? (
          ninjas.map(ninja => (
            <div
              key={ninja.id}
              className="card col-sm-10 col-md-6 col-lg-4 col-xl-3 m-3 p-0 shadow border-0 ninja-card">
              <div className="card-header bg-warning text-dark fw-bold text-center">
                {ninja.name}
              </div>
              <img
                className="card-img-top"
                src={ninja.images[0]}
                alt={ninja.name}
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage; }}/>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success"
                    onClick={() => console.log(`Ajout à la team: ${ninja.id}`)
                    
                    
                    }>
                    Ajouter à la Team
                  </button>
                  <Link to={`/ninja/${ninja.id}`} className="btn btn-outline-light">
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Aucun ninja dans la team</p> )}
      </div>
    </div>
  );
}
