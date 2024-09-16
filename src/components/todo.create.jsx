"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreateTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/xCsBunhlUDe0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content }]),
    });
    router.refresh();
  }

  return (
    <div className="flex flex-col justify-center w-fit mb-8">
      <div className="flex text-center gap-x-3">
        <div>
          <h1 className="text-xl font-medium">Input Title</h1>
          <textarea onChange={(e) => setTitle(e.target.value)}></textarea>
        </div>
        <div>
          <h1 className="text-xl font-medium">Input Content</h1>
          <textarea onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
      </div>
      <button onClick={handleCreateTodo} className="btn-primary">
        Save
      </button>
    </div>
  );
};
