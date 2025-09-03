import React from "react";
import {Navigation, routeType} from "@/components/navigation/Navigation";
import {HeaderConfig} from "@/app/(modules)/layout";

export default function Index() {
    const routes = [
        {text: "M0a", path: "/module-0/m0a"},
        {text: "M0d - Set up your university webspace", path: "/module-0/m0d"},
    ] as routeType[];
    return (
        <>
            <HeaderConfig title={"Module 0"} message={"Welcome to Module 0"} />
            <Navigation routes={routes} title={"Module 0"}/>
        </>
    );
}
