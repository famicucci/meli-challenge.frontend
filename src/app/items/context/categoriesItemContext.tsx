"use client";
import React, { createContext, useContext, useState } from "react";

// Define the type for your state
type MyState = {
  categories: string[];
  addCategories: (newCategories: string[]) => void;
};

// Create the context with an initial state
export const CategoriesItemContext = createContext<MyState | undefined>(
  undefined
);

// Create a provider component
export const CategoriesItemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategories = (newCategories: string[]) => {
    setCategories(newCategories);
  };

  const state: MyState = {
    categories,
    addCategories,
  };

  return (
    <CategoriesItemContext.Provider value={state}>
      {children}
    </CategoriesItemContext.Provider>
  );
};
