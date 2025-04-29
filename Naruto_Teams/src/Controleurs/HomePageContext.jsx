import React, { createContext, useContext, useState, useEffect } from 'react';
import { HomePageService } from '../Modeles/HomePageService';

// Création du contexte pour le formulaire de la page d'accueil
const HomePageContext = createContext();

export function HomePageProvider({ children }) {
  // État pour les champs du formulaire, un genre de constructeur 
  const [formData, setFormData] = useState(
    {
      nom: '',
      email: '',
      village: ''
    }
  );
  // État pour les erreurs de validation ( Quand y'a les ptits DATTEBAYO)
  const [errors, setErrors] = useState({});
  // Utilisation de l'Effet si on a submit! :) 
  const [isSubmitted, setIsSubmitted] = useState(false); // false par défaut, car pas encore submit 

  // Handler pour mettre à jour formData à chaque changement de champ
  // Dans le fond cette fonction va aller sauvegarder la valeur entrée dans le constructeur par défaut...
  // C'est avec elle qu'on va ben... handle le changement! 
  const handleChange = (evt) => {
    const { name, value } = evt.target; // C'est dynamique; name sera email ou village quand on changera de champ 
    setFormData(prev => (
      {
        ...prev, // On garde le previous state 
        [name]: value // Pis on update le champ ^^ 
      }
    ));
  };

  // Réinitialise le formulaire, les erreurs et l'état de soumission
  const resetForm = () => {
    setIsSubmitted(false);    // revient à l'état initial (affiche le formulaire)
    setFormData( // data vide 
      {
        nom: '',
        email: '',
        village: ''
      }
    );
    setErrors({});
  };

  // Handle pour le submit! 
  const handleSubmit = (evt) => {
    evt.preventDefault(); // ça va empêcher tout ce qui est comportement navigateur 
    const inscription = new HomePageService(formData);
    const validationErrors = inscription.getErrors(); // validation par le service ! 

    // objet parce que mon form est un objet!! 
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // si il est plus gros que le lenght, c'est sus 
    } else {
      // Marquer le formulaire comme soumis correctement
      setIsSubmitted(true);
      console.log('Formulaire valide :', inscription); // feedback console 
    }
  };

  // provider!
  return (

    <HomePageContext.Provider
      value={{ formData, handleChange, handleSubmit, resetForm, errors, isSubmitted }}>
      {children}
    </HomePageContext.Provider>
  );
}

// Hook!!!!! 
export function useHomePageContext() {
  return useContext(HomePageContext);
}
