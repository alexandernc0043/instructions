"use client";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {usePathname} from "next/navigation";
import Header from "@/components/layout/Header";

export type HeaderConfig = { title: string; message: string };

type HeaderContextValue = {
  title: string;
  message: string;
  setHeader: (update: HeaderConfig) => void;
};

export const HeaderContext = createContext<HeaderContextValue | null>(null);

export function useHeader() {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error("useHeader must be used within the HeaderProvider");
  return ctx;
}

// Component to be used inside pages to update the header
export function HeaderConfig({ title, message }: HeaderConfig) {
  const { setHeader } = useHeader();
  useEffect(() => {
    setHeader({ title, message });
  }, [title, message, setHeader]);
  return null;
}

export function HeaderProvider() {
  const [title, setTitle] = useState("N/A");
  const [message, setMessage] = useState("N/A");
  const pathname = usePathname();

  const setHeader = ({ title, message }: HeaderConfig) => {
    setTitle(title);
    setMessage(message);
  };

  const value = useMemo(() => ({ title, message, setHeader }), [title, message]);

  // On route change, attempt to read Next.js metadata (title/description)
  // to populate the header without requiring <HeaderConfig>.
  useEffect(() => {
    // Defer to let Next apply <head> updates first.
    const id = setTimeout(() => {
      try {
        const docTitle = typeof document !== "undefined" ? document.title : "";
        const metaDesc = typeof document !== "undefined"
          ? document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""
          : "";
        if (docTitle) {
          setTitle(docTitle);
        }
        if (metaDesc) {
          setMessage(metaDesc);
        }
      } catch {
        // no-op; metadata might not be available
      }
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <HeaderContext.Provider value={value}>
      {title !== "N/A" && (
        <header>
          <Header title={title} message={message} />
        </header>
      )}
    </HeaderContext.Provider>
  );
}
