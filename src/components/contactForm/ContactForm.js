import React, { useState } from 'react';

function ContactForm() {
  // État pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // État pour les erreurs de validation
  const [errors, setErrors] = useState({});

  // État pour le message de succès
  const [successMessage, setSuccessMessage] = useState('');

  // Fonction de gestion des changements de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction de validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Le nom est requis.';
    if (!formData.email) {
      tempErrors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'L\'email n\'est pas valide.';
    }
    if (!formData.message) tempErrors.message = 'Le message est requis.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulaire soumis avec succès', formData);
      setSuccessMessage('Votre message a été envoyé avec succès!');
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      setErrors({}); // Réinitialiser les erreurs
    }
  };

  return (
    <div className='contact__form'>
      <h2>Contacte</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
