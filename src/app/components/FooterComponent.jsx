import styles from './FooterComponent.module.css';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>Contenido</h4>
          <ul>
            <li>Entrenamientos</li>
            <li>Nutrición</li>
            <li>Entrenadores</li>
            <li>Planes</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Herramientas</h4>
          <ul>
            <li>Calculadora de IMC</li>
            <li>Seguimiento Progreso</li>
            <li>App Móvil</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Ayuda</h4>
          <ul>
            <li>FAQs</li>
            <li>Soporte</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Compañía</h4>
          <ul>
            <li>Sobre nosotros</li>
            <li>Nuestra historia</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSocial}>
        <h4>Síguenos</h4>
        <div className={styles.socialIcons}>
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/twitter (1).png" alt="Twitter" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
}
