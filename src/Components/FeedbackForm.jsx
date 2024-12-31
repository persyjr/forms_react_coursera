import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '' // Nuevo estado para calificación
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Nombre: ${formData.name}
      Correo electrónico: ${formData.email}
      Comentarios: ${formData.feedback}
      Calificación: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Por favor confirma tus detalles:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Enviando comentarios:', formData);
      setFormData({
        nombre: '',
        correo_electrónico: '',
        comentarios: '',
        rating: '' // Reiniciar calificación después del envío
      });
      alert('¡Gracias por tus valiosos comentarios!');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={formData.name}//integro el estado de la variable name
          onChange={handleChange}//integro la funcion que me controla el cambio del estado de name
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Tu Retroalimentación"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

<div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Califícanos:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>
        <button type="submit">Enviar Retroalimentación</button>
      </form>
    </>
  );
};

export default FeedbackForm;
