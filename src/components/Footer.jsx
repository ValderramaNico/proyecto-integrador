import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.contenedor} ${styles.footer__contenido}`}>
        <h2 className={styles.footer__logo}>
          Octa<span className={styles.footer__logo__bold}>Bytes</span>
        </h2>
        <nav className={styles.footer__nav}>
          <Link to="/informacion" className={styles.footer__enlace}>
            Información
          </Link>
          <Link to="/blog" className={styles.footer__enlace}>
            Blog
          </Link>
          <Link to="/calculadora" className={styles.footer__enlace}>
            Calculadora
          </Link>
        </nav>
      </div>
    </footer>
  );
}
