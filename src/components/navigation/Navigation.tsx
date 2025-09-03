import React from "react";
import Link from "next/link";

export type routeType = {
    text: string;
    path: string;
};

export type NavigationProps = {
    title: string,
    routes: routeType[];
};

export function Navigation({ title, routes }: NavigationProps) {
    return (
        <div id="toc">
            <div id="toc-title">{title}</div>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.path}>{route.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

