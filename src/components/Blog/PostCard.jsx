import { Newspaper, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <article className={styles.blogCard}>
      <Link to={`/blog/${post.id}`} className={styles.BlogCardLink}>
        <img
          className={styles.BlogCardImg}
          src={post.imagen || "/hero.jpg"}
          alt={post.titulo}
          loading="lazy"
        />
        <div className={styles.BlogCardBody}>
          <h3 className={styles.BlogCardTitle}>{post.titulo}</h3>
          <p className={styles.BlogCardExcerpt}>
            {post.encabezado?.slice(0, 150) || "Sin descripción disponible..."}
          </p>

          <div className={styles.BlogCardMeta}>
            <div className={styles.metaBlog}>
              <Newspaper size={18} />
              <p>{post.autor || "Desconocido"}</p>
            </div>
            <div className={styles.metaBlog}>
              <CalendarDays size={18} />
              <p>{post.fecha || "Sin fecha"}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
