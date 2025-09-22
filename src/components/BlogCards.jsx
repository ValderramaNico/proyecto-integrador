const BlogCards = () => {
  return (
    <div className="blogCardsContainer">
      <article class="blogCard">
        <a class="BlogCardLink" href="Link al artículo">
          <img class="BlogCardImg" src="#" alt="Imagen del artículo" />
          <div class="BlogCardBody">
            <h3 class="BlogCardTitle">
              The Economist Destaca a Chile como Ejemplo de Reconversión
              Energética
            </h3>
            <p class="BlogCardExcerpt">
              En agosto de 2025, la prestigiosa revista The Economist posicionó
              a Chile como ejemplo mundial de reconversión energética. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              nihil iure voluptatum aperiam accusantium, in unde deserunt aut
              ipsam atque consequatur fugit ea animi id quibusdam, at maiores?
              Magnam, soluta!
            </p>
            <div class="BlogCardMeta">
              <div class="metaBlog">
                <i class="fa-regular fa-newspaper me-2"></i>
                <p class="mb-0">Writer: Equipo redacción Octabyte</p>
              </div>
              <div class="metaBlog">
                <i class="fa-regular fa-clock me-2"></i>
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
