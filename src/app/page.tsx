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
                ]
            }/>
        </>
    );
}
