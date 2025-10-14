import { useState } from "react";
import styles from "./Calculator.module.css";
import { toast, Toaster } from "react-hot-toast";


const CustomToast = ({ t, status = "info", title, message, onUndo }) => {
  // status: 'success' | 'error' | 'info'
  return (
    <div
      className={`${styles.toast} ${t.visible ? styles.toastEnter : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.toastLeft}>
        <div className={styles.toastTitle}>
          {/* icono sencillo según status */}
          {status === "success" ? "✅" : status === "error" ? "⚠️" : "ℹ️"}{" "}
          <strong>{title}</strong>
        </div>
        <div className={styles.toastMessage}>{message}</div>
      </div>

      <div className={styles.toastActions}>
        {onUndo && (
          <button
            className={styles.toastButton}
            onClick={() => {
              onUndo();
              toast.dismiss(t.id);
            }}
          >
            Deshacer
          </button>
        )}

        <button
          className={styles.closeBtn}
          onClick={() => toast.dismiss(t.id)}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

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
    //  Muestra error si faltan datos
    if (!electro || !horas || horas <= 0) {
      toast.custom((t) => (
        <CustomToast
          t={t}
          status="error"
          title="Datos inválidos"
          message="Por favor selecciona un electrodoméstico y horas válidas"
        />
      ));
      return;
    }

    const consumo = consumos[electro] * Number(horas);
    setLista([...lista, { tipo: electro, horas, consumo }]);
    setTotal(total + consumo);
    setElectro("");
    setHoras("");

    //  Notificación de éxito al agregar (toast bonito)
    toast.custom(
      (t) => (
        <CustomToast
          t={t}
          status="success"
          title="Agregado"
          message="Electrodoméstico agregado correctamente"
        />
      ),
      { duration: 2500 }
    );
  };

  const handleRemove = (index) => {
    const removed = lista[index];
    setTotal(total - removed.consumo);
    setLista(lista.filter((_, i) => i !== index));

    // Notificación al eliminar con opción Deshacer
    toast.custom(
      (t) => (
        <CustomToast
          t={t}
          status="info"
          title="Eliminado"
          message={`${removed.tipo} eliminado`}
          onUndo={() => {
            setLista((prev) => {
              const copy = [...prev];
              copy.splice(index, 0, removed);
              return copy;
            });
            setTotal((prev) => prev + removed.consumo);
          }}
        />
      ),
      { duration: 4000 }
    );
  };

  return (
    <div className={styles.body}>
      {/*  Contenedor global de los toasts (config por defecto y fallback) */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            // estilo base por si muestra toasts sin custom
            borderRadius: "10px",
            background: "#111827",
            color: "#fff",
          },
        }}
      />

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
