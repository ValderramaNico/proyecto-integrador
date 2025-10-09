import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "./PostGrid.module.css";

export default function PostGrid() {
  const [posts, setPosts] = useState([]);
  const [estado, setEstado] = useState({ loading: true, error: null });

  useEffect(() => {
    let cancelado = false;

    async function cargar() {
      try {
        const res = await fetch("/posts.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        const data = await res.json();

 const normalizados = Array.isArray(data) ? data : [];


        if (!cancelado) {
          setPosts(normalizados);
          setEstado({ loading: false, error: null });
        }
      } catch (err) {
        if (!cancelado) {
          setEstado({ loading: false, error: err.message || "Error de carga" });
        }
      }
    }

    cargar();
    return () => {
      cancelado = true;
    };
  }, []);

  if (estado.loading)
    return <p style={{ padding: "1rem" }}>Cargando noticias…</p>;
  if (estado.error)
    return (
      <p style={{ padding: "1rem", color: "crimson" }}>Error: {estado.error}</p>
    );

  return (
    <section className={styles.grid}>
      {posts.slice(0, 6).map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </section>
  );
}
