"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/styles/formSearch.module.css";
import { Search } from "react-feather";

export default function FormSearch() {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    const query = `/items?search=${value}`;
    router.push(`${query}`);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={styles.input}
      />
      <button className={styles.button}>
        <Search size={16} />
      </button>
    </form>
  );
}
