"use client";
import { useEffect, useState } from "react";
import { getItems } from "./services";
import { useSearchParams } from "next/navigation";

export default function Items() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const textSearch = searchParams.get("search");

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getItems(textSearch);
        setData(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [textSearch]);

  return <div>{loading ? <p>Loading...</p> : JSON.stringify(data)}</div>;
}
