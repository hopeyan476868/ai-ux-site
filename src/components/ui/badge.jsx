import React from "react";

export function Badge({ children }) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
      {children}
    </span>
  );
}
