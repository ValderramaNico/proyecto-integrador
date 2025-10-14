import { useState, useEffect } from "react";
import { Newspaper, CalendarDays } from "lucide-react";
import styles from "./BlogCards.module.css";
import { Link } from "react-router-dom";

const BlogCards = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/noticias")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error al cargar noticias:", err));
  }, []);

  return (
    <div className={styles.blogCardsContainer}>
      {articles.slice(0, 3).map((article, index) => (
        <article key={article._id} className={styles.blogCard}>
          <Link to={`/blog/${article._id}`} className={styles.BlogCardLink}>
            <img
              className={styles.BlogCardImg}
              src={article.imageUrl || "https://via.placeholder.com/400x200"}
              alt={article.title}
            />
            <div className={styles.BlogCardBody}>
              <h3 className={styles.BlogCardTitle}>{article.title}</h3>
              <p className={styles.BlogCardExcerpt}>
                {article.articleBody?.slice(0, 150) ||
                  "No hay contenido disponible..."}
              </p>
              <div className={styles.BlogCardMeta}>
                <div className={styles.metaBlog}>
                  <Newspaper size={30} />
                  <p>Writer: {article.author || "Desconocido"}</p>
                </div>
                <div className={styles.metaBlog}>
                  <CalendarDays size={30} />
                  <p>Date: {article.date || "Sin fecha"}</p>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogCards;
