import styles from "./HeroHome.module.css";
import paneles from "../../assets/images/paneles-solares-sobre-techo-3.webp";

const HeroHome = () => {
  return (
    <div>
      <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
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