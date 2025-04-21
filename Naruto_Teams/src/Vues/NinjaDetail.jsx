// src/pages/NinjaDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNinjas } from '../Controleurs/NinjasContext';

export default function NinjaDetail() {
  const { id } = useParams();
  const ninjas = useNinjas();
  const ninja = ninjas.find((n) => n.id === parseInt(id, 10));

  
  return (
    <div className="container my-4">
      <Link to="/list" className="btn btn-secondary mb-3">
         Retour à la liste
      </Link>

      <h1>{ninja.name.common}</h1>
      <img
        src={ninja.images.png}
        alt={ninja.name.common}
        className="img-fluid mb-4"
      />

      <h2>Clan</h2>
      <p>{ninja.clan}</p>

      <h2>Débuts</h2>
      <ul>
        <li>Manga : {ninja.debut.manga}</li>
        <li>Anime : {ninja.debut.anime}</li>
        <li>Roman : {ninja.debut.novel}</li>
        <li>Film : {ninja.debut.movie}</li>
        <li>Jeu : {ninja.debut.game}</li>
        <li>OVA : {ninja.debut.ova}</li>
        <li>Apparitions : {ninja.debut.appearsIn}</li>
      </ul>

      <h2>Famille</h2>
      <ul>
        <li>Père : {ninja.family.father}</li>
        <li>Mère : {ninja.family.mother}</li>
        <li>Fils : {ninja.family.son}</li>
        <li>Fille : {ninja.family.daughter}</li>
        <li>Épouse : {ninja.family.wife}</li>
        <li>Fils adoptif : {ninja.family['adoptive son']}</li>
        <li>Parrain : {ninja.family.godfather}</li>
      </ul>

      <h2>Jutsu</h2>
      <ul>
        {ninja.jutsu.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h2>Nature Types</h2>
      <ul>
        {ninja.natureType.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>

      <h2>Infos personnelles</h2>
      <ul>
        <li>Date de naissance : {ninja.personal.birthdate}</li>
        <li>Sexe : {ninja.personal.sex}</li>

        <li>
          Âge :
          <ul>
            {Object.entries(ninja.personal.age).map(([phase, âge]) => (
              <li key={phase}>{phase} : {âge}</li>
            ))}
          </ul>
        </li>

        <li>
          Taille :
          <ul>
            {Object.entries(ninja.personal.height).map(([phase, taille]) => (
              <li key={phase}>{phase} : {taille}</li>
            ))}
          </ul>
        </li>

        <li>
          Poids :
          <ul>
            {Object.entries(ninja.personal.weight).map(([phase, poids]) => (
              <li key={phase}>{phase} : {poids}</li>
            ))}
          </ul>
        </li>

        <li>Groupe sanguin : {ninja.personal.bloodType}</li>

        <li>
          Kekkei Genkai :
          <ul>
            {ninja.personal.kekkeiGenkai.map((kg) => (
              <li key={kg}>{kg}</li>
            ))}
          </ul>
        </li>

        <li>
          Classification :
          <ul>
            {ninja.personal.classification.map((cls) => (
              <li key={cls}>{cls}</li>
            ))}
          </ul>
        </li>

        <li>Bête à queue : {ninja.personal.tailedBeast}</li>

        <li>
          Occupations :
          <ul>
            {ninja.personal.occupation.map((occ) => (
              <li key={occ}>{occ}</li>
            ))}
          </ul>
        </li>

        <li>
          Affiliations :
          <ul>
            {ninja.personal.affiliation.map((aff) => (
              <li key={aff}>{aff}</li>
            ))}
          </ul>
        </li>

        <li>
          Équipes :
          <ul>
            {ninja.personal.team.map((team) => (
              <li key={team}>{team}</li>
            ))}
          </ul>
        </li>

        <li>Clan (répétition) : {ninja.personal.clan}</li>

        <li>
          Titres :
          <ul>
            {ninja.personal.titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </li>
      </ul>

      <h2>Rank</h2>
      <ul>
        <li>Registration : {ninja.rank.ninjaRegistration}</li>
        <li>
          Ninja Rank :
          <ul>
            {Object.entries(ninja.rank.ninjaRank).map(([phase, rang]) => (
              <li key={phase}>{phase} : {rang}</li>
            ))}
          </ul>
        </li>
      </ul>

      <h2>Outils</h2>
      <ul>
        {ninja.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>

      <h2>Voice Actors</h2>
      <h3>Japanese</h3>
      <ul>
        {ninja.voiceActors.japanese.map((va) => (
          <li key={va}>{va}</li>
        ))}
      </ul>
      <h3>English</h3>
      <ul>
        {ninja.voiceActors.english.map((va) => (
          <li key={va}>{va}</li>
        ))}
      </ul>
    </div>
  );
}
