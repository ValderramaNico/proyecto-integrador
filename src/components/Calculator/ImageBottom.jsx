import panelSolar2 from "../../assets/images/paneles-solares-sobre-techo.webp";
import styles from "./images.module.css";

const Images = () => {
  return (
    <div>
      <img
        className={styles.imagenCentrada2}
        src={panelSolar2}
        alt="Paneles solares sobre techo"
      />
    </div>
  );
};

export default Images;
