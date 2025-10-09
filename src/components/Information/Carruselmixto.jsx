import { useState } from "react";
import subidaluz from "../assets/subida-luz.webp";
import styles from "./Carruselmixto.module.css";

function Carruselmixto() {
  const slides = [
    {
      tipo: "imagen",
      src: subidaluz,
      titulo: "Cómo podemos reducir el consumo energético⚡"
    },
    {
      tipo: "texto",
      fondo: "orange",
      titulo: "Mejorar el aislamiento de su vivienda 🌟",
      descripcion: "Una vivienda correctamente aislada reduce sus necesidades de calefacción y refrigeración, ahorrando así energía. Preste especial atención a los vanos de las ventanas y puertas y, si nota algún tipo de corriente, coloque burletes de silicona. Además, considere la posibilidad de instalar ventanas de doble acristalamiento para mejorar aún más el aislamiento."
    },
    {
      tipo: "texto",
      fondo: "yellow",
      titulo: "Optar por electrodomésticos eficientes",
      descripcion: "Sustituir paulatinamente sus electrodomésticos de mayor consumo por otros de clasificación energética A hará que su consumo de energía se reduzca en hasta un 30% respecto de los antiguos. ✨"
    },
    {
      tipo: "texto",
      fondo: "green",
      titulo: "El gasto vampiro en luz 🧛‍♂️", 
      descripcion: "Acciones sencillas como apagar las luces cuando salgamos de una habitación o desenchufar los dispositivos cuando estén cargados le ayudará a reducir cuántos kWh consume una casa al mes. Además, debemos tener en cuenta que los aparatos en modo stand-by siguen consumiendo energía; es por ello que la mejor opción es apagarlos por completo cuando no los estemos utilizando."
    },
    {
      tipo: "texto",
      fondo: "orange",
      titulo: "Utiliza la teconología a tu favor💻", 
      descripcion: "Opta por regletas programables o inteligentes que corten automáticamente la energía a dispositivos seleccionados en horarios determinados o cuando detecten que no hay consumo, optimizando el ahorro nocturno."


    },
  {
      tipo: "texto",
      fondo: "yellow",
      titulo: "Optimiza los lavados de ropa 🧼", 
      descripcion: "Utiliza programas cortos y de agua fría para lavar ropa, y carga la lavadora o lavavajillas completamente antes de usarlos. Evita el uso de la secadora: tiende la ropa siempre que sea posible."
    }
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => setIndice((prev) => (prev + 1) % slides.length);
  const anterior = () => setIndice((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[indice];

  return (
    <div>
      <div className={styles.carrusel}>
        <div className={styles["carrusel-slide"]} style={{ backgroundColor: slide.fondo || "#fff" }}>
          {slide.tipo === "imagen" ? (
            <img
              src={slide.src}
              alt={`slide-${indice}`}
              className={styles["carrusel-img"]}
            />
          ) : (
            <div className={styles["carrusel-texto"]}>
              <h2>{slide.titulo}</h2>
              <p>{slide.descripcion}</p>
            </div>
          )}
        </div>
        {/* Flechas */}
        <button
          className={`${styles["carrusel-flecha"]} ${styles.izquierda}`}
          onClick={anterior}
          aria-label="Anterior"
        >
          ❮
        </button>
        <button
          className={`${styles["carrusel-flecha"]} ${styles.derecha}`}
          onClick={siguiente}
          aria-label="Siguiente"
        >
          ❯
        </button>
      </div>
     {/* Título fijo*/}
<div className={styles["titulo-fijo"]}>
  <h2>{slides[0].titulo}</h2>
  <p>{slides[0].descripcion}</p>
</div>
    </div>
  );
}

export default Carruselmixto;