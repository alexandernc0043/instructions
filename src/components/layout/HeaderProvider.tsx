"use client";
import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";
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

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("N/A");
  const [message, setMessage] = useState("N/A");
  const pathname = usePathname();

  const setHeader = ({ title, message }: HeaderConfig) => {
    setTitle(title);
    setMessage(message);
  };

  const value = useMemo(() => ({ title, message, setHeader }), [title, message]);

  // Reset header on route changes to avoid stale values
  useEffect(() => {
    setTitle("N/A");
    setMessage("N/A");
  }, [pathname]);

  return (
    <HeaderContext.Provider value={value}>
      {title !== "N/A" && (
        <header>
          <Header title={title} message={message} />
        </header>
      )}
      <main>{children}</main>
    </HeaderContext.Provider>
  );
}
