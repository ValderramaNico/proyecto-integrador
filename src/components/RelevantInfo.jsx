import styles from "./RelevantInfo.module.css";
import bgImage from "../assets/images/instalacion-paneles-solares.webp";

const RelevantInfo = () => {
  return (
    <div>
      <section className={styles.relevantInfo} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cardsContainer}>
        <div className={styles.relevantCard}>
          <h3>Solar</h3>
          <p>Energía limpia</p>
        </div>
        <div className={styles.relevantCard}>
          <h3>Eficiencia</h3>
          <p>Ahorro garantizado</p>
        </div>
        <div className={styles.relevantCard}>
          <h3>Ecológico</h3>
          <p>Cero emisiones</p>
        </div>
        <div className={`${styles.relevantCard} ${styles.wide}`}>
          <h3>Ecológico</h3>
          <p>Cero emisiones</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default RelevantInfo