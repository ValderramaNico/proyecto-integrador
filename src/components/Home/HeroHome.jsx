import styles from "./HeroHome.module.css";
import paneles from "../../assets/images/paneles-solares-sobre-techo-3.webp";

const HeroHome = () => {
  return (
    <div>
      <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>
            El consumo promedio de electricidad en los hogares chilenos es de aproximadamente 8.083 kWh al año, lo que representa un gasto anual de alrededor de $600.000 CLP.
          </h1>
        </div>
        <div className={styles.heroImage}>
          <img src={paneles} alt="Paneles solares" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroHome