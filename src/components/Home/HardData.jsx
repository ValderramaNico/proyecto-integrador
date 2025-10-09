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
              target={1500}
              duration={2500}
              startCounting={startCounting}
            />
            <p>%</p>
          </div>
          <p>hogares rurales sin luz</p>
        </div>
        <div className={styles.dataItem}>
          <Counter target={320} duration={2000} startCounting={startCounting} />
          <p>No accede a la luz</p>
        </div>
        <div className={styles.dataItem}>
          <Counter target={25} duration={1500} startCounting={startCounting} />
          <p>Uso promedio de un hogar</p>
        </div>
      </section>
    </div>
  );
};

export default HardData;
