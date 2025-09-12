import React from "react";
import {Navigation, routeType} from "@/components/navigation/Navigation";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Module 1",
    description: "Welcome to Module 1",
};

export default function Index() {
    const routes = [
        {text: "M0a - Start Using NinerLink Discussion", path: "/module-1/m0a"},
        {text: "M0b - Introductions in shared Google Doc", path: "/module-1/m0b"},
        {text: "M0c - freeCodeCamp (FCC) & Codecademy Setup/Start", path: "/module-1/m0c"},
        {text: "M0d - Set up your university webspace", path: "/module-1/m0d"},
        {text: "FCC1 >> HTML: Basic, Semantic, Forms & Tables, Accessibility", path: "/module-1/fcc1-html"},
    ] as routeType[];
    return (
        <>
            <Navigation routes={routes} title={metadata.title!.toString()}/>
        </>
    );
}
