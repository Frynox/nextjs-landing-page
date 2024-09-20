import styles from './BenefitsComponent.module.css';

export default function BenefitsComponent() {
  const benefits = [
    'Entrenamiento personalizado a tu medida',
    'Asesorías Online 24/7',
    'Equipo avalado por Universidad XXXX',
    'Seguimiento en temas de nutrición',
    'Los mejores entrenadores preparados para ti',
  ];

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.benefitsTitle}>¿Por qué unirte a FitnessPro?</h2>
      <ul className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
}
