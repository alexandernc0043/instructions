import React from "react";
import Link from "next/link";

export type routeType = {
    text: string;
    path: string;
};

export type NavigationProps = {
    routes: routeType[];
};

export function Navigation({ routes }: NavigationProps) {
    return (
        <div id="toc">
            <div id="toc-title">Table of Contents</div>
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