import styles from './HeroComponent.module.css';

export default function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.titleh1}>Transforma tu cuerpo con FitnessPro</h1>
        <p className={styles.description}>Entrenamientos personalizados para todos los niveles.</p>
        <button className={styles.download}>Descarga la App</button>
        <div className={styles.downloadIcons}>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/play-store.png" alt="Descargar en Google Play" className={styles.storeIcon} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/app-store.png" alt="Descargar en App Store" className={styles.storeIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
