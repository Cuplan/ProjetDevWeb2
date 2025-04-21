import React from 'react';
import { Link } from 'react-router-dom';
import { useNinjas } from '../Controleurs/NinjasContext';

export default function NinjasPage() {
    const ninjas = useNinjas();

    if (ninjas.length === 0) {
        return <p>Chargement des ninjas…</p>;
    }

    return (
        <div className="container container-fluid">
            <h1 className="my-3">Liste des Ninjas</h1>
            <div className="row" id="divNinjas">
                {ninjas.map((ninja) => (
                    <div
                        key={ninja.id}
                        className="card col-sm-12 col-md-6 col-lg-3 p-0 m-2"
                    >
                        <div className="card-header">
                            {ninja.name.common[0]}
                        </div>
                        <img
                            className="card-img-top rounded-0"
                            src={ninja.images.png}
                            alt={ninja.name.common}
                        />

                        <div className="card-body">
                            <h5 className="card-title">{ninja.name.common}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Clan : {ninja.clan}
                            </h6>
                            <div className="d-flex justify-content-between">
                                {/* Bouton pour ajouter au panier (à implémenter plus tard) */}
                                <button
                                    className="btn btn-success"
                                    onClick={() => console.log(`Ajout à la team: ${ninja.id}`)}>
                                    + Panier
                                </button>

                                {/* Bouton pour afficher les détails */}
                                <Link
                                    to={`/ninja/${ninja.id}`}
                                    className="btn btn-primary">
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
