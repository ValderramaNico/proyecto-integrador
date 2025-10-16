import styles from "./calculator.module.css";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Calculator() {
  // Consumo promedio de electrodomésticos en kW/h
  const consumos = {
    estufa: 2.5,
    televisor: 0.3,
    computador: 0.5,
    calientacama: 1.0,
    refrigerador: 0.8,
    microondas: 1.2,
    lavadora: 1.0,
  };
  // Estados de la calculadora
  const [electro, setElectro] = useState("");
  const [horas, setHoras] = useState("");
  const [lista, setLista] = useState([]);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const MIN_HORAS = 0.5;
  const MAX_HORAS = 24;
  // Actualizar total automáticamente
  useEffect(() => {
    const suma = lista.reduce((acc, item) => acc + item.consumo, 0);
    setTotal(suma);
  }, [lista]);
  // Agregar electrodoméstico
  const handleAdd = (e) => {
    e.preventDefault();
    setError("");
    if (!electro) return setError("Selecciona un electrodoméstico.");
    if (!horas || horas < MIN_HORAS || horas > MAX_HORAS) {
      return setError(`Ingresa horas entre ${MIN_HORAS} y ${MAX_HORAS}`);
    }
    const consumo = consumos[electro] * Number(horas);
    setLista([...lista, { tipo: electro, horas, consumo }]);
    setElectro("");
    setHoras("");
    toast.success(`${electro} agregado correctamente!`);
  };
  // Eliminar electrodoméstico
  const handleRemove = (index) => {
    const removed = lista[index];
    setLista(lista.filter((_, i) => i !== index));
    toast.error(`${removed.tipo} eliminado!`);
  };
  return (
    <div className={styles.wrapper}>
      <h2>Calculadora de Consumo Eléctrico</h2>
      <form onSubmit={handleAdd} className={styles.form}>
        <label>Electrodoméstico:</label>
        <select value={electro} onChange={(e) => setElectro(e.target.value)}>
          <option value="">-- selecciona --</option>
          {Object.keys(consumos).map((key) => (
            <option key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>
        <label>Horas de uso:</label>
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder={`Min ${MIN_HORAS} - Max ${MAX_HORAS}`}
          step="0.5"
          min={MIN_HORAS}
          max={MAX_HORAS}
        />
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit">Agregar</button>
      </form>
      <div className={styles.resultado}>
        <ul>
          {lista.map((item, index) => (
            <li key={index} className={styles.item}>
              {item.tipo} – {item.horas} h × {consumos[item.tipo]} kW ={" "}
              {item.consumo.toFixed(2)} kW
              <button onClick={() => handleRemove(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <div className={styles.total}>Total kW: {total.toFixed(2)}</div>
      </div>
      <div className={styles.footer}>Diseñado por Miguel</div>
      {/* Componente Toast */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
