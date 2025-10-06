import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const consumos = {
    estufa: 2.5,
    televisor: 0.3,
    computador: 0.5,
    calientacama: 1.0,
  };

  const [electro, setElectro] = useState("");
  const [horas, setHoras] = useState("");
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!electro || !horas || horas <= 0) return;

    const consumo = consumos[electro] * Number(horas);
    setLista([...lista, { tipo: electro, horas, consumo }]);
    setTotal(total + consumo);
    setElectro("");
    setHoras("");
  };

  const handleRemove = (index) => {
    const removed = lista[index];
    setTotal(total - removed.consumo);
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.body}>
      <div className={styles.calculadora}>
        <form onSubmit={handleAdd}>
          <label>Electrodoméstico:</label>
          <select value={electro} onChange={(e) => setElectro(e.target.value)}>
            <option value="">-- selecciona --</option>
            <option value="estufa">Estufa</option>
            <option value="televisor">Televisor</option>
            <option value="computador">Computador</option>
            <option value="calientacama">Calienta cama</option>
          </select>

          <label>Horas de uso:</label>
          <input
            type="number"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            placeholder="ej. 2"
            min="0"
            step="0.5"
          />

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
      </div>
    </div>
  );
};

export default Calculator;
