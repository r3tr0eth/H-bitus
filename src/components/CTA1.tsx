import React, { useState } from 'react';

export default function CTA1() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para manejar el envío del correo (API, Mailchimp, etc.)
    alert(`¡Gracias! Te has registrado con: ${email}`);
    setEmail('');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Sé de los primeros en probar Hábitus</h2>
        <form className="cta-form" onSubmit={handleSubmit}>
          <label htmlFor="cta-email" className="cta-label">
            Introduce tu email para acceso anticipado
          </label>
          <input
            type="email"
            id="cta-email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="cta-input"
          />
          <button type="submit" className="cta-button">
            Quiero ser parte del pre-lanzamiento
          </button>
        </form>
        <p className="cta-text">
          Acceso exclusivo + una recompensa especial en la app para los primeros registrados.
        </p>
      </div>
    </section>
  );
}
