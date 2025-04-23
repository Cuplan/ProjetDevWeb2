import React, { createContext, useContext, useState } from 'react';
import { HomePageService } from '../Modeles/HomePageService';

const HomePageContext = createContext();

export function HomePageProvider({ children }) { 
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = new HomePageService(formData);
    const validationErrors = contact.getErrors();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('✅ Formulaire valide :', contact);
      alert('Formulaire envoyé avec succès !');
      resetForm();
    }
  };

  return (
    <HomePageContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        resetForm,
        errors,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export function useHomePageController() {
  return useContext(HomePageContext);
}
