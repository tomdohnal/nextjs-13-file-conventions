"use client";

import { useEffect } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    fetch("http://localhost:3001/api/page-view", {
      method: "POST",
    });
  }, []);

  return children;
}
