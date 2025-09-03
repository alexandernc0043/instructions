import {ReactNode} from "react";
import "@/styles/globals.css";
import "@/styles/themes/atomOneDark.css";
import Footer from "@/components/layout/Footer";
import AutoBreadcrumbs from "@/components/navigation/AutoBreadcrumbs";
import {HeaderProvider} from "@/components/layout/HeaderProvider";
export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {

    return (
        <html lang="en">
        <body className="min-h-screen antialiased">
        <div className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
            <AutoBreadcrumbs />
            <HeaderProvider>
                {children}
            </HeaderProvider>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
