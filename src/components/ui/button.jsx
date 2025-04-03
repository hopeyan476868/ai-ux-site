import React from "react";

export function Button({ children, size = "base" }) {
  const sizes = {
    base: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full ${sizes[size]}`}>
      {children}
    </button>
  );
}
