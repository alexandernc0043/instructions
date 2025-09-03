"use client";

import {useEffect} from "react";

export default function Header({title, message}: { title: string, message: string }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <h1>{title}</h1>
            <blockquote>
                {message}
            </blockquote>

        </>
    );
}

