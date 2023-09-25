"use client";
import { useRouter } from "next/navigation";

export default function FormSearch() {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const query = `items?search=${e.target[0].value}`;
    router.push(`${query}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
}
