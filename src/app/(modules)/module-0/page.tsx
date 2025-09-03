import React from "react";
import {Navigation, routeType} from "@/components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Module 0",
    description: "Welcome to Module 0",
};

export default function Index() {
    const routes = [
        {text: "M0a", path: "/module-0/m0a"},
        {text: "M0d - Set up your university webspace", path: "/module-0/m0d"},
    ] as routeType[];
    return (
        <>
            <Navigation routes={routes} title={"Module 0"}/>
        </>
    );
}
