import React from 'react';

type BenefitItem = {
  icon: string;
  title: string;
  description: string;
};

const benefitsData: BenefitItem[] = [
  {
    icon: '/images/icons/customize.svg', // Cambia la ruta a tu ícono real
    title: 'Diseña tus Hábitos a tu Medida',
    description: 'Define tus metas, personaliza recordatorios y sigue tu progreso diario.',
  },
  {
    icon: '/images/icons/gamification.svg', // Cambia la ruta a tu ícono real
    title: 'Gamifica tu Progreso',
    description: 'Gana puntos, desbloquea logros y colecciona recompensas mientras avanzas hacia tus objetivos.',
  },
  {
    icon: '/images/icons/community.svg', // Cambia la ruta a tu ícono real
    title: 'Comunidad que te Impulsa',
    description: 'Conecta con personas que comparten tus metas, comparte logros y motívate en grupo.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Beneficios Principales</h2>
      <div className="benefits-container">
        {benefitsData.map((benefit) => (
          <div className="benefit-card" key={benefit.title}>
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="benefit-icon"
            />
            <h3 className="benefit-card-title">{benefit.title}</h3>
            <p className="benefit-card-description">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
