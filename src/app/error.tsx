"use client"; // Error components must be Client Components
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./styles/error.module.css";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const route = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h2>Ocurrió un error!</h2>
      <p>{error.message}</p>
      <button onClick={() => route.push("/")}>Try again</button>
    </div>
  );
}
