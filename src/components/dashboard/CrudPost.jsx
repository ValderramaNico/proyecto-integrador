import { useState } from "react";
import styles from "./CrudPost.module.css";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    articleBody: "",
    author: "",
    date: "",
    referenceUrl: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/noticias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al crear el post");
      const data = await res.json();
      alert("✅ Post creado correctamente");
      console.log(data);

      // Reiniciar formulario
      setFormData({
        title: "",
        imageUrl: "",
        articleBody: "",
        author: "",
        date: "",
        referenceUrl: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error al crear el post");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <h1 className={styles.logoText}>Blog</h1>
          </div>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Crea un post nuevo</h2>

          <form className={styles.postForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                placeholder="Título del post"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="imageUrl">URL de la imagen</label>
              <input
                id="imageUrl"
                type="text"
                placeholder="URL de la imagen o ruta local Ej: /images/1.jpg o https://ejemplo.com/imagen.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="articleBody">Cuerpo del artículo</label>
              <textarea
                id="articleBody"
                rows="20"
                placeholder="Escribe aquí"
                value={formData.articleBody}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="author">Autor</label>
                <select
                  id="author"
                  value={formData.author}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un autor</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Alex Johnson</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Fecha</label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="referenceUrl">URL de referencia</label>
              <input
                id="referenceUrl"
                type="url"
                placeholder="URL de referencia"
                value={formData.referenceUrl}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Publicar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
