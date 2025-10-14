import { useState, useEffect, useRef } from "react";
import styles from "./HardData.module.css";

const Counter = ({ target, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
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
  }, [target, duration, startCounting]);

  return <h3>{count}</h3>; // el número animado aparece dentro de un h3
};

const HardData = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // se ejecuta una sola vez
        }
      },
      {
        threshold: 0.5, // se activa cuando al menos el 50% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.dataContainer} ref={sectionRef}>
      <section className={styles.hardData}>
        <div className={styles.dataItem}>
          <div className={styles.counterWithSymbol}>
            <Counter
              target={50000}
              duration={2500}
              startCounting={startCounting}
            />
          </div>
          <p className={styles.cardText}>
            Existen alrededor de 50 mil hogares en Chile fuera de la red
            eléctrica.
          </p>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.counterWithSymbol}>
            <Counter
              target={15}
              duration={2000}
              startCounting={startCounting}
            />{" "}
            <span>%</span>
          </div>
          <p>
            Porciento de los hogares sin conexión a red eléctrica acceden a
            soluciones de generación solar.
          </p>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.counterWithSymbol}>
            <Counter target={3} duration={1500} startCounting={startCounting} />{" "}
            <span>%</span>
          </div>
          <p>
            Porciento del consumo eléctrico domiciliario se cubre con generación
            residencial distribuida (principalmente solar).
          </p>
        </div>
      </section>
    </div>
  );
};

export default HardData;
