"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function TableOfContents() {
    const [sections, setSections] = useState<Element[]>([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSections(Array.from(document.querySelectorAll("section")));
        }, 0);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        sections.forEach((elem, index) => {
            elem.id = (index + 1).toString();
        });
    }, [sections]);
    return (
        <div id="toc">
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
        </div>
    );
}
