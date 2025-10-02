import styles from "./Bloque2.module.css";
import casaPanel from "../assets/images/casa-panel.jpg";

const Bloque2 = () => {
  return (
    <section className={styles.bloque2}>
      <div className={styles.subBloque}>
        <img src={casaPanel} alt="Casa con paneles" />
        <div className={styles.texto}>
          <h2>Energías en tu hogar</h2>
          <p>
           <ul> 
            <li>Tamaño de la vivienda. Lógicamente, las casas más grandes consumen más energía, porque aumentan sus necesidades de iluminación, calefacción y refrigeración; además, disponen de un mayor número de electrodomésticos (por ejemplo, más televisores, ordenadores, etc.). </li>
            <li>Número de habitantes. El número de personas que habitan en un hogar afecta también a cuántos kWh consume una casa al mes: más habitantes implica un mayor uso de electrodomésticos, agua caliente e iluminación. Todo este consumo se verá reflejado en la factura de la luz a final de mes.</li>
            <li>Uso de electrodomésticos. En este aspecto, no sólo importa la cantidad de electrodomésticos de un hogar, sino también su eficiencia energética. Hay electrodomésticos que son grandes consumidores de energía, como la nevera, el aire acondicionado, el horno o la secadora. Por ello, es importante asegurarse de escoger aquellos que tengan una etiqueta energética A, que garantiza un consumo más eficiente de la energía, lo que se traducirá en un ahorro de electricidad para el hogar.</li>
           </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bloque2;
