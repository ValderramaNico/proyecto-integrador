import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import imageBlog from "../../assets/images/how-to-write-a-blog-post.jpeg";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Bienvenido al dashboard</h2>

      <div className={styles.card}>
        {/* Contenido de texto */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Crear un nuevo artículo</h3>
          <p className={styles.cardText}>
            Aquí puedes escribir un nuevo artículo para el blog
          </p>
          <Link to="/crud-post">
            <button className={styles.cardButton}>+ Nuevo Artículo</button>
          </Link>
        </div>

        {/* Imagen al lado derecho */}
        <div className={styles.cardImageContainer}>
          <img
            src={imageBlog}
            alt="Nuevo artículo"
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
