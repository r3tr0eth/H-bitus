import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Crea hábitos que transforman tu vida, con diversión y apoyo
        </h1>
        <h2 className="hero-subtitle">
          Hábitus es la nueva app iOS que convierte tus metas diarias en logros épicos 
          con un toque social. ¡Sé de los primeros en probarla!
        </h2>

        {/* Mockup del iPhone */}
        <div className="hero-mockup-container">
          {/* Sustituye la ruta con la imagen que desees (p.ej. /images/iphone-mockup.png) */}
          <img 
            src="/images/iphone-mockup.png" 
            alt="Mockup de iPhone mostrando calendario de hábitos, logros y comunidad" 
            className="hero-mockup"
          />
          <p className="hero-mockup-text">Próximamente en la App Store.</p>
        </div>
      </div>
    </section>
  );
}
