// src/views/PostDetailView.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetailView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function cargar() {
      const res = await fetch(`http://localhost:5000/api/noticias/${id}`);
      const data = await res.json();
      setPost(data);
    }
    cargar();
  }, [id]);

  if (!post) return <p style={{ padding: "1rem" }}>Cargando...</p>;

  return (
    <article style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem" }}>{post.title}</h1>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>{post.date}</p>
      <img
        src={post.imageUrl}
        alt={post.title}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "1rem",
          marginBottom: "1.5rem",
        }}
      />
      <p style={{ lineHeight: "1.6", color: "#333" }}>{post.articleBody }</p>

      {post.referenceUrl && (
        <p style={{ marginTop: "1.5rem" }}>
          <a href={post.referenceUrl} target="_blank" rel="noreferrer">
            Ver publicación original
          </a>
        </p>
      )}
    </article>
  );
}
