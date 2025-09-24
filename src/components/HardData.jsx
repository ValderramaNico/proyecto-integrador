import { useState, useEffect } from "react";
import styles from "./HardData.module.css";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // cuánto aumenta en cada paso
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target); // llega al número final
        clearInterval(timer); // detener el intervalo
      } else {
        setCount(Math.floor(start)); // número redondeado
      }
    }, 16); // cada 16ms ≈ 60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return <h3>{count}</h3>; // el número animado aparece dentro de un h3
};

const HardData = () => {
  return (
    <div className={styles.dataContainer}>
      <section className={styles.hardData}>
        <div className={styles.dataItem}>
          <div className={styles.counterWithSymbol}>
            <Counter target={1500} duration={2500} />
            <p>%</p>
          </div>
          <p>hogares rurales sin luz</p>
        </div>
        <div className={styles.dataItem}>
          <Counter target={320} duration={2000} />
          <p>No accede a la luz</p>
        </div>
        <div className={styles.dataItem}>
          <Counter target={25} duration={1500} />
          <p>Uso promedio de un hogar</p>
        </div>
      </section>
    </div>
  );
};

export default HardData;
