import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.loginView}>
      <form className={styles.formContainer} onSubmit={handleSubmit} action="">
        <h2 className={styles.title}>Login</h2>
        <p className={styles.subTitle}>Ingresa aquí para manejar el blog</p>
        <div>
        <label className={styles.formLabel} htmlFor="">Usuario</label>
        <input
          className={styles.formInput}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label className={styles.formLabel} htmlFor="">Password</label>
        <input
          className={styles.formInput}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className={styles.formButton} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
