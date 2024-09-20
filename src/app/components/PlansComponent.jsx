import styles from './PlansComponent.module.css';

export default function PlansComponent() {
  const plans = [
    {
      title: 'Basic',
      price: '$24.99 al mes',
      features: ['2 entrenamientos al mes', '4 videos a la semana', '1 video llamada al mes'],
    },
    {
      title: 'Premium',
      price: '$42.99 al mes',
      features: ['5 entrenamientos al mes', '8 videos a la semana', '4 video llamadas al mes'],
    },
    {
      title: 'Premium Pro',
      price: '$74.99 al mes',
      features: ['10 entrenamientos al mes', 'Videos ilimitados a la semana', '10 video llamadas al mes'],
    },
  ];

  return (
    <section className={styles.plansSection}>
      <h2 className={styles.plansTitle}>Nuestros Planes de Entrenamiento</h2>
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div className={styles.plan} key={index}>
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
