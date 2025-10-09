import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetail() {
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
    <article
      style={{ padding: "1rem 2rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>{post.titulo}</h1>
      <p>
        <strong>{post.fecha}</strong>
      </p>
      <img
        src={post.imagen}
        alt={post.titulo}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "1rem" }}>{post.desarrollo}</p>
      <a href={post.enlace} target="_blank" rel="noreferrer">
        Ver publicación original
      </a>
      <p>{post.autor}</p>
    </article>
  );
}
