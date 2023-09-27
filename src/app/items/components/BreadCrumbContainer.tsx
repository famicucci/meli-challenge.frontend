"use client";
import { useContext, useEffect } from "react";
import { CategoriesItemContext } from "../context/categoriesItemContext";

interface BreadCrumbContainerProps {
  categories: string[];
}
export default function BreadCrumbContainer({
  categories,
  children,
}: {
  categories: BreadCrumbContainerProps;
  children: React.ReactNode;
}) {
  const categoriesContext = useContext(CategoriesItemContext);

  useEffect(() => {
    categoriesContext && categoriesContext.addCategories(categories);
  }, [categories]);

  return <>{children}</>;
}
