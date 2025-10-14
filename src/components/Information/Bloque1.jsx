import styles from "./Bloque1.module.css";
import panelSolar from "../../assets/images/panel-solar.jpg";

const Bloque1 = () => {
  return (
    <section className={styles.bloque1}>
      <div className={styles.primerBloque}>
        <img src={panelSolar} alt="Trabajo en panel solar" />
        <div className={styles.texto}>
          <h2>Energías en Chile</h2>
          <p>En Chile, las energías renovables están ganando terreno, especialmente la solar y la eólica, que se aplican cada vez más en hogares para reducir costos y cuidar el medio ambiente.</p>
           <p> Las regiones del norte, como Antofagasta y Atacama, son líderes en energía solar debido a su alta radiación, con plantas y paneles solares instalados para autoconsumo residencial. También la energía eólica destaca en Atacama y en La Araucanía, donde las condiciones de viento favorecen su desarrollo. Se suman regiones como Coquimbo, Valparaíso, Metropolitana, O’Higgins, Maule y Ñuble, donde la instalación de paneles solares en viviendas es cada vez más común, ayudando a disminuir la factura eléctrica.
           </p>
            <p>Estas iniciativas buscan además disminuir la dependencia del carbón y otros combustibles fósiles, que generan más contaminación. En conjunto, la solar y eólica aportan más del 27% de la electricidad del país, superando por primera vez al carbón y promoviendo un modelo energético más sustentable y económico para las familias chilenas.
</p>
        </div>
      </div>
    </section>
  );
};

export default Bloque1;
