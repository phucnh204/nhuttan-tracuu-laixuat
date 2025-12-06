"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSelectedLayoutSegments } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";
import { useTransition } from "react";

export default function PageLoading() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Bật spinner ngay khi pathname thay đổi
    setLoading(true);

    // Tắt sau khi transition xong
    const timer = setTimeout(() => setLoading(false), 300); 
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return <LoadingSpinner />;
}
