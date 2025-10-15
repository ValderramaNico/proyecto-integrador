import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });
  // Estado para controlar envío (simula loading)
  const [sending, setSending] = useState(false);
  // Maneja cambios en inputs/textarea
  // Maneja cambios en inputs/textarea
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el input es teléfono, formatea automáticamente
    if (name === "telefono") {
      // Eliminamos todo lo que no sea número
      let numbers = value.replace(/\D/g, "");

      // Si empieza con 56, lo mantenemos, si no, lo agregamos
      if (!numbers.startsWith("56")) {
        numbers = "56" + numbers;
      }

      // Limitamos a 11 dígitos totales (56 + 9 + 8 números)
      numbers = numbers.slice(0, 11);

      // Aplicamos formato +56 x xxxxxxxx
      let formatted = "+56";
      if (numbers.length > 2) formatted += " " + numbers[2]; // el 9
      if (numbers.length > 3) formatted += " " + numbers.slice(3, 11); // los 8 números finales

      setForm((prev) => ({ ...prev, telefono: formatted }));
    } else {
      // para los demás campos, sin cambios
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  // Validaciones simples
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Validación de teléfono chileno: +56 x xxxxxxxx
  const isValidPhone = (phone) => /^\+56\s\d\s\d{8}$/.test(phone.trim());

  const isFormValid = () =>
    form.nombre.trim().length >= 2 &&
    isValidEmail(form.correo) &&
    isValidPhone(form.telefono);

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación antes de enviar
    if (!isFormValid()) {
      toast.error("Por favor completa correctamente Nombre y Correo.");
      return;
    }
    try {
      setSending(true);
      // Simulación de llamada a API (reemplaza por fetch/axios si corresponde)
      await new Promise((res) => setTimeout(res, 900));
      toast.success(`Gracias ${form.nombre}, tu mensaje fue enviado.`);
      // Reset del formulario
      setForm({ nombre: "", telefono: "", correo: "", mensaje: "" });
    } catch (err) {
      console.error("Error al enviar:", err);
      toast.error("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setSending(false); // siempre se ejecuta
    }
  };
  return (
    <section className={styles.wrapper} aria-labelledby="contact-title">
      {/* Componente de react-hot-toast */}
      <Toaster position="top-right" />
      <div className={styles.card}>
        {/* Columna izquierda: texto / información */}
        <div className={styles.left}>
          <h1 id="contact-title" className={styles.title}>
            ¿Tienes alguna duda?
          </h1>
          <h1>
            <p className={styles.lead}>
              Escríbenos y te responderemos lo antes posible. También puedes
              dejarnos tu teléfono para que te contactemos.
            </p>
          </h1>
          <ul className={styles.infoList}>
            <li>
              <strong>Horario:</strong> Lun - Vie 9:00 Hrs - 18:00 Hrs
            </li>
            <li>
              <strong>Teléfono:</strong> +56 9 1234 5678
            </li>
            <li>
              <strong>Correo:</strong> admi@octabytes.cl
            </li>
          </ul>
        </div>
        {/* Columna derecha: formulario */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Nombre */}
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ej: Miguel Pineda"
              value={form.nombre}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={form.nombre.trim().length < 2}
            />
            {/* Teléfono */}
            <label htmlFor="telefono">Número de Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="+56 9 1234 5678"
              value={form.telefono}
              onChange={handleChange}
            />
            {/* Correo */}
            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="tu@correo.cl"
              value={form.correo}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!isValidEmail(form.correo)}
            />
            {/* Mensaje */}
            <label htmlFor="mensaje">Sugerencia o reclamos</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={form.mensaje}
              onChange={handleChange}
              rows="5"
            />
            {/* Botón de envío: deshabilitado si inválido o en envío */}
            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.btn}
                disabled={!isFormValid() || sending}
                aria-disabled={!isFormValid() || sending}
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
              {/* Pequeño hint de validación */}
              <span className={styles.hint}>
                {isFormValid()
                  ? "Listo para enviar"
                  : "Nombre (min 2) y correo válido requerido"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
