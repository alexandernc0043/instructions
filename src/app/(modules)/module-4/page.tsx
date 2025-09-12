import React from "react";
import {Navigation, routeType} from "@/components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Module 4",
    description: "Welcome to Module 4",
};

export default function Index() {
    const routes = [
        {text: "About Page - Mascot Company", path: "/module-4/aboutPageMC"},
        {text: "Create your Design Firm One Page Site", path:"/module-4/createDesignFirm"}
    ] as routeType[];
    return (
        <>
            <Navigation routes={routes} title={metadata.title!.toString()}/>
        </>
    );
}
