"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}
