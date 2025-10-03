import panelSolar1 from "./images/panel-solar-campo.webp";
import panelSolar2 from "./images/paneles-solares-sobre-techo.webp";
import styles from "./images.module.css";

export default function Images() {
  return (
    <div>
      <img
        className={styles.imagenCentrada}
        src={panelSolar1}
        alt="Paneles solares en campo"
      />
      <img
        className={styles.imagenCentrada2}
        src={panelSolar2}
        alt="Paneles solares sobre techo"
      />
    </div>
  );
}
