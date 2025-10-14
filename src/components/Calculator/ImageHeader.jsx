import panelSolar1 from "../../assets/images/panel-solar-campo.webp";
import styles from "./images.module.css";

const Images = () => {
  return (
    <div>
      <img
        className={styles.imagenCentrada}
        src={panelSolar1}
        alt="Paneles solares en campo"
      />
    </div>
  );
};

export default Images;
