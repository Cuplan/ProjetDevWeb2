import React from 'react';
import { Link } from 'react-router-dom';
import { useNinjas } from '../Controleurs/NinjasContext';
import { useTeam } from '../Controleurs/TeamContext';

export default function NinjasPage() {
  const { ninjas, filterNinjas } = useNinjas();
  const { ajouterTeam } = useTeam();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-light">Liste des Ninjas</h1>
      
      {/* Barre de recherche */}
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Rechercher un ninja…"
          onChange={e => filterNinjas(e.target.value)} // Le filter 
        />
      </div>

      <div className="row justify-content-center">
        {ninjas.length > 0 ? ( // Le ptit ? car on veut savoir si y'a des ninjas ! 
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
               // Ajouter Fallbackimage quand je l'aurai 
                onError={e => { e.currentTarget.onerror = null;
                 e.currentTarget.src = fallbackImage; }}/>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success"
                    onClick={() => ajouterTeam(ninja) }>
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
          <p className="text-center">Aucun ninja trouvé</p> // Le cas où y'a aucun ninja de trouvé 
        )}
      </div>
    </div>
  );
}
