import React from 'react';
import { useHomePageController } from '../Controleurs/HomePageControleur';
import '../styles/naruto-theme.css'; 


export default function HomePage() {
    const {
        formData,
        handleChange,
        handleSubmit,
        resetForm,
        errors,
      } = useHomePageController();
      

  return (
    <div className="container my-5">
      <div className="text-center mb-4 p-4 bg-light rounded shadow-sm headerHP">
        <h1>J'attends d'avoir un truc based à mettre ici</h1>
      </div>
  
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
        <h2 className="mb-4">Formulaire d'inscription</h2>
  
        <div className="mb-3">
          <label className="form-label">Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
          />
          {errors.nom && <div className="text-danger">{errors.nom}</div>}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Village :</label>
          <select
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Choisir son village --</option>
            <option value="Konoha">Konoha</option>
            <option value="Kiri">Kiri</option>
            <option value="Suna">Suna</option>
            <option value="Kumo">Kumo</option>
            <option value="Iwa">Iwa</option>
            <option value="Akatsuki">Akatsuki</option>
            <option value="Aucun">Aucun</option>
            <option value="Autre">Autre</option>
          </select>
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>
  
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
          <button type="button" onClick={resetForm} className="btn btn-secondary">
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
  
}

