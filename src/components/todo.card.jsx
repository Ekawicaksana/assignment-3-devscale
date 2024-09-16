"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const TodoCard = ({ id, title, content }) => {
  const router = useRouter();

  async function handleDeleteTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/xCsBunhlUDe0", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <div className="w-fit border p-4 text-center rounded-xl">
      <h3 className="font-medium">{title}</h3>
      <p>{content}</p>
      <button onClick={handleDeleteTodo} className="btn-danger">
        Delete
      </button>
    </div>
  );
};
