import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Leer variables de entorno
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    // Verificar credenciales
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdmin", "true");
      navigate("/dashboard"); // Redirigir al dashboard
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className={styles.loginView}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <p className={styles.subTitle}>Ingresa aquí para manejar el blog</p>

        <div>
          <label className={styles.formLabel}>Usuario</label>
          <input
            className={styles.formInput}
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.formLabel}>Password</label>
          <input
            className={styles.formInput}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.formButton} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
