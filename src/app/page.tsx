import {Navigation} from "@/components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instructions",
    description: "Welcome to the instructions page.",
};

export default function Home() {
    return (
        <>
            <Navigation title={"Modules"} routes={
                [
                    {text: "Module 0", path: "/module-0"},
                    {text: "Module 2", path: "/module-2"},
                    {text: "Module 4", path: "/module-4"},
                ]
            }/>
        </>
    );
}
