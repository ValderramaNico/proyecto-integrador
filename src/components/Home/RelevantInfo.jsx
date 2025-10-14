import styles from "./RelevantInfo.module.css";
import bgImage from "../../assets/images/panel-solar-campo.webp";

const RelevantInfo = () => {
  return (
    <div>
      <section
        className={styles.relevantInfo}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.cardsContainer}>
          <div className={styles.relevantCard}>
            <h3>El consumo</h3>
            <p>
              de electricidad de una persona equivale al funcionamiento de 2
              paneles solares.
            </p>
          </div>
          <div className={styles.relevantCard}>
            <h3>Existen alrededor</h3>
            <p>de 50 mil hogares en Chile fuera de la red eléctrica</p>
          </div>
          <div className={styles.relevantCard}>
            <h3>Off grid</h3>
            <p>
              Sistema solar independiente, almacena energía en baterías, sin
              conexión a red eléctrica. Es autónomo y confiable
            </p>
          </div>
          <div className={`${styles.relevantCard} ${styles.wide}`}>
            <h3>On grid</h3>
            <p>
              Sistema solar conectado a red eléctrica, inyecta excedentes y usa
              energía de la red. Es más barato de implementar ya que puede
              prescindir de baterías.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelevantInfo;
