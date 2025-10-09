import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbarBg}>
    <p><a href="">Tengo una duda energetica </a></p>
      <ul className={styles.links}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/informacion">Información</Link>
        </li>
        <li>
          <Link to="/calculadora">Calculadora</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
