"use client";
import React, {ReactNode, createContext, useContext, useEffect, useMemo, useState} from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
type HeaderConfig = { title: string; message: string };

type HeaderContextValue = {
    title: string;
    message: string;
    setHeader: (update: HeaderConfig) => void;
};

const HeaderContext = createContext<HeaderContextValue | null>(null);

export function useHeader() {
    const ctx = useContext(HeaderContext);
    if (!ctx) throw new Error("useHeader must be used within the Layout HeaderContext provider");
    return ctx;
}

export function HeaderConfig({title, message}: HeaderConfig) {
    const {setHeader} = useHeader();
    useEffect(() => {
        setHeader({title, message});
    }, [title, message, setHeader]);
    return null;
}

export default function Layout({children}: { children: ReactNode }) {
    const [title, setTitle] = useState("N/A");
    const [message, setMessage] = useState("N/A");

    const setHeader = ({title, message}: HeaderConfig) => {
        setTitle(title);
        setMessage(message);
    };

    const value = useMemo(() => ({title, message, setHeader}), [title, message]);
    return (
        <HeaderContext.Provider value={value}>
            {(title != "N/A") && (
                <header>
                    <Header title={title} message={message}/>
                </header>
            )}
            <main>
                {children}
            </main>
            <Footer/>
        </HeaderContext.Provider>
    );
}
