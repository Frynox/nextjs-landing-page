import styles from './CommentsComponent.module.css';

export default function CommentsComponent() {
  const comments = [
    {
      name: 'Carlos García',
      text: 'FitnessPro ha transformado por completo mi estilo de vida. Los entrenamientos son de alta calidad y el equipo es súper atento. ¡100% recomendado!',
      image: '/uifaces-popular-image.jpg',
    },
    {
      name: 'Ana López',
      text: 'Nunca pensé que pudiera obtener entrenamientos personalizados tan buenos online. FitnessPro me ha motivado como nunca.',
      image: '/uifaces-popular-image (1).jpg',
    },
    {
      name: 'Jorge Martínez',
      text: 'La mejor aplicación de fitness que he probado. Los entrenadores están siempre disponibles y el seguimiento nutricional es excelente.',
      image: '/uifaces-popular-image (2).jpg',
    },
  ];

  return (
    <section className={styles.commentsSection}>
      <h2 className={styles.commentsTitle}>Lo que nuestros usuarios dicen</h2>
      <div className={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <div className={styles.comment} key={index}>
            <img src={comment.image} alt={comment.name} className={styles.commentImage} />
            <div className={styles.commentContent}>
              <h3 className={styles.commentName}>{comment.name}</h3>
              <p className={styles.commentText}>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
