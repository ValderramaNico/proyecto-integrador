import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import bannerImg from "../../src/assets/images/banner.jpg";

export default function Header() {
  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {" "}
      <div className={styles.contenedor}>
        {" "}
        <div className={styles.barra}>
          {" "}
          <Link to="/" className={styles.logo}>
            <h1 className={`${styles.logo__nombre} no-margin`}>
              Octa<span className={styles.logo__bold}>Bytes</span>{" "}
            </h1>{" "}
          </Link>
          <nav className={styles.navegacion}>
            <Link to="/informacion" className={styles.navegacion__enlace}>
              Información
            </Link>
            <Link to="/blog" className={styles.navegacion__enlace}>
              Blog
            </Link>
            <Link to="/calculadora" className={styles.navegacion__enlace}>
              Calculadora
            </Link>
          </nav>
        </div>
        <div className={styles.header__texto}>
          <h2 className="no-margin">Soluciones Integrales</h2>
          <p className="no-margin">Desarrollo sustentable</p>
        </div>
      </div>
    </header>
  );
}
