import styles from "./Hero.module.css";
import bgImage from "../../assets/images/panel-solar-campo.webp";

export default function Hero() {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className={styles.heroTitle}>BLOG</h1>
    </header>
  );
}
