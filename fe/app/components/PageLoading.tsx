"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export default function PageLoading() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start transition và bật loading
    startTransition(() => {
      setLoading(true);
      setVisible(true);
    });

    // Ẩn sau 500ms + fade out mượt
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 300); // fade out 300ms
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm transition-opacity duration-300 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-16 h-16 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
