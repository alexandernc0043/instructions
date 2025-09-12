"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function TableOfContents() {
    const [sections, setSections] = useState<Element[]>([]);
    const pathname = usePathname();

    // Re-scan sections whenever the route changes so TOC stays in sync
    useEffect(() => {
        const timer = setTimeout(() => {
            setSections(Array.from(document.querySelectorAll("section")));
        }, 0);
        return () => clearTimeout(timer);
    }, [pathname]);
    useEffect(() => {
        sections.forEach((elem, index) => {
            elem.id = (index + 1).toString();
        });
    }, [sections]);
    return sections.length > 0 ? <div id="toc">
        <div id="toc-title">Table of Contents</div>
        <ul>
            {sections.map((elem, index) => (
                <li key={index + 1}>
                    <Link href={`#${index + 1}`}>
                        {elem.querySelector("h2")?.textContent}
                    </Link>
                </li>
            ))}
        </ul>
    </div> : null;
}
