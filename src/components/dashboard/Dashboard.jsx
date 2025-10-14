import styles from "./Dashboard.module.css";
  import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Bienvenido al dashboard</h2>

      <div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Crear un nuevo artículo</h3>
          <p className={styles.cardText}>
            Aquí puedes escribir un nuevo artículo para el blog
          </p>
          <Link to="/crud-post">
            <button className={styles.cardButton}>+ Nuevo Artículo</button>
          </Link>
        </div>
        <div>
          <img src="picsum" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
