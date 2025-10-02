import styles from "./Banner.module.css";
import eolicoPanel from "../assets/images/eolico-panel.jpg";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img
        src={eolicoPanel}
        className={styles.bannerImg}
        alt="Paneles solares y eólicos"
      />
      <div className={styles.bannerOverlay}></div>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitulo}>Energías Renovables</h1>
      </div>
    </section>
  );
};

export default Banner;
