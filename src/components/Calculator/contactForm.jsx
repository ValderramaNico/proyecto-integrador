import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${form.nombre}, tu mensaje fue enviado.`);
    setForm({ nombre: "", telefono: "", correo: "", mensaje: "" });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>
            Si tienes alguna duda, consulta o sugerencia
            <br />
            <br />
            ¡Contáctanos!
          </p>
        </div>

        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            <label>Nombre y Apellido</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} />

            <label>Número de Telefono</label>
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
            />

            <label>Correo</label>
            <input name="correo" value={form.correo} onChange={handleChange} />

            <label>Sugerencia o reclamos</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className={styles.clearfix}></div>
      </div>
    </div>
  );
};

export default ContactForm;
