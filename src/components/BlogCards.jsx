import styles from "./BlogCards.module.css";
import { Newspaper, CalendarDays } from 'lucide-react';



const BlogCards = () => {
  return (
    <div className={styles.blogCardsContainer}>
      <article class={styles.blogCard}>
        <a class={styles.BlogCardLink} href="Link al artículo">
          <img class={styles.BlogCardImg} src="#" alt="Imagen del artículo" />
          <div class={styles.BlogCardBody}>
            <h3 class={styles.BlogCardTitle}>
              The Economist Destaca a Chile como Ejemplo de Reconversión
              Energética
            </h3>
            <p class={styles.BlogCardExcerpt}>
              En agosto de 2025, la prestigiosa revista The Economist posicionó
              a Chile como ejemplo mundial de reconversión energética. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              nihil iure voluptatum aperiam accusantium, in unde deserunt aut
              ipsam atque consequatur fugit ea animi id quibusdam, at maiores?
              Magnam, soluta!
            </p>
            <div class={styles.BlogCardMeta}>
              <div class={styles.metaBlog}>
                <Newspaper size={30} />
                <p class="mb-0">Writer: Equipo redacción Octabyte</p>
              </div>
              <div class={styles.metaBlog}>
                <CalendarDays size={30} />
                <p class="mb-0">Date: 20/10/2025</p>
              </div>
            </div>
          </div>
        </a>
      </article>
    </div>
  );
};

export default BlogCards;
