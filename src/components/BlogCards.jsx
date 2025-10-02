import styles from "./BlogCards.module.css";
import { Newspaper, CalendarDays } from 'lucide-react';
import { useState, useEffect } from "react";

const BlogCards = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://magicloops.dev/api/loop/40ce483d-b8d8-4b11-a1ec-7c33d09513c4/run?input=Hello+World"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
  }, []);

  return (
    <div className={styles.blogCardsContainer}>
      {articles.slice(0,3).map((article, index) => (
        <article key={index} className={styles.blogCard}>
          <a className={styles.BlogCardLink} href={article.link || "#"}>
            <img
              className={styles.BlogCardImg}
              src={article.image || "https://via.placeholder.com/400x200"}
              alt={article.title}
            />
            <div className={styles.BlogCardBody}>
              <h3 className={styles.BlogCardTitle}>{article.title}</h3>
              <p className={styles.BlogCardExcerpt}>
                {article.body?.slice(0, 150) ||
                  "No hay contenido disponible..."}
              </p>
              <div className={styles.BlogCardMeta}>
                <div className={styles.metaBlog}>
                  <Newspaper size={30} />
                  <p>
                    Writer: {article.author || "Desconocido"}
                  </p>
                </div>
                <div className={styles.metaBlog}>
                  <CalendarDays size={30} />
                  <p>Date: {article.date || "Sin fecha"}</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default BlogCards;
