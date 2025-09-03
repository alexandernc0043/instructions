import {ReactNode} from "react";
import "@/styles/globals.css";
import "@/styles/themes/atomOneDark.css";
import BackLink from "@/components/shared/BackLink";

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <BackLink />
        {children}
        </body>
        </html>
    );
}
