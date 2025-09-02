import React from "react";
import {Navigation, routeType} from "@/app/components/Navigation";
import Header from "@/app/components/Header";

export default function Index() {
    const routes = [
        {text: "M0a", path: "/assignments/m0a"},
        {text: "M0d - Set up your university webspace", path: "/assignments/m0d"},
    ] as routeType[];
    return (
        <>
            <Header title={"Module 0"} message={"Welcome to Module 0"}/>
            <Navigation routes={routes}/>
        </>
    );
}