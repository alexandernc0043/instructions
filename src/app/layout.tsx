import {ReactNode} from "react";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import AutoBreadcrumbs from "@/components/navigation/AutoBreadcrumbs";
import {HeaderProvider} from "@/components/layout/HeaderProvider";
import Warning from "@/components/feedback/Warning";
import {Analytics} from "@vercel/analytics/next";

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {

    return (
        <html lang="en">
        <body className="min-h-screen antialiased">
        <Analytics/>
        <div className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
            <Warning
                msg={"THIS WEBSITE IS A WORK IN PROGRESS PLEASE DO NOT SOLELY RELY ON THIS WEBSITE FOR ASSIGNMENT INSTRUCTIONS. PLEASE USE THE OFFICIAL SOURCE (CANVAS)"}/>
            <AutoBreadcrumbs/>
            <HeaderProvider/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
