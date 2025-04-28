import React, { createContext, useContext, useState, useEffect } from 'react';
import { HomePageService } from '../Modeles/HomePageService';

// Création du contexte pour le formulaire de la page d'accueil
const HomePageContext = createContext();

export function HomePageProvider({ children }) {
  // État pour les champs du formulaire
  const [formData, setFormData] = useState(
    {
      nom: '',
      email: '',
      village: ''
    }
  );
  // État pour les erreurs de validation
  const [errors, setErrors] = useState({});
  // État pour indiquer que le formulaire a été soumis avec succès
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handler pour mettre à jour formData à chaque changement de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [name]: value
      }
    )
    );
  };

  // Réinitialise le formulaire, les erreurs et l'état de soumission
  const resetForm = () => {
    setIsSubmitted(false);    // revient à l'état initial (affiche le formulaire)
    setFormData(
      {
        nom: '',
        email: '',
        village: ''
      }
    );
    setErrors({});
  };

  // Handler soumis lors de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = new HomePageService(formData);
    const validationErrors = contact.getErrors();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Marquer le formulaire comme soumis correctement
      setIsSubmitted(true);
      console.log('Formulaire valide :', contact);
    }
  };

  return (
    // On expose formData, handlers, erreurs et l'état de soumission
    <HomePageContext.Provider
      value={{ formData, handleChange, handleSubmit, resetForm, errors, isSubmitted }}>
      {children}
    </HomePageContext.Provider>
  );
}

// Hook personnalisé pour consommer le contexte
export function useHomePageContext() {
  return useContext(HomePageContext);
}
