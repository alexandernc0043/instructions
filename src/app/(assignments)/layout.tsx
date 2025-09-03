import React, {ReactNode} from "react";
import TableOfContents from "@/components/layout/TableOfContents";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <TableOfContents />
            {children}
        </>
    );
}
