"use client";
import { useState, useEffect } from "react";
import PageLoading from "./components/PageLoading";
import {Analytics} from "@/app/components/Analytics";


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <PageLoading /> : <>
    <Analytics />
    {children}
  </>}</>;
}
