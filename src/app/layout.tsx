"use client";
import {ReactNode} from "react";
import "./globals.css";
import "./atomOneDark.css"
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
const router = useRouter();
    return (
        <html lang="en">
        <body>
        {usePathname() !== "/" && (<button onClick={() => router.back()}>Go Back</button>)}
        {children}
        </body>
        </html>
    );
}
