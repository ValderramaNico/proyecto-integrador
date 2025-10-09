// src/views/PostDetailView.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetailView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function cargar() {
      const res = await fetch("/posts.json");
      const data = await res.json();
      const encontrado = data.find((p) => String(p.id) === id);
      setPost(encontrado);
    }
    cargar();
  }, [id]);

  if (!post) return <p style={{ padding: "1rem" }}>Cargando...</p>;

  return (
    <article style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem" }}>{post.titulo}</h1>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>{post.fecha}</p>
      <img
        src={post.imagen}
        alt={post.titulo}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "1rem",
          marginBottom: "1.5rem",
        }}
      />
      <p style={{ lineHeight: "1.6", color: "#333" }}>{post.desarrollo}</p>

      {post.enlace && (
        <p style={{ marginTop: "1.5rem" }}>
          <a href={post.enlace} target="_blank" rel="noreferrer">
            Ver publicación original
          </a>
        </p>
      )}
    </article>
  );
}
