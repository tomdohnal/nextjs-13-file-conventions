"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);

    fetch("http://localhost:3001/api/error", {
      method: "POST",
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
      }),
    });
  }, [error]);

  return (
    <div>
      <h2 className="text-6xl text-neutral-100 mb-4">
        Oopsie! A goofy bug must have sneaked into our
        codebase 🐞
      </h2>
      <p>Try again or refresh the page</p>
    </div>
  );
}
