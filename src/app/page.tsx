import {Navigation} from "@/components/navigation/Navigation";
import Header from "@/components/layout/Header";

export default function Home() {
    return (
        <>
            <Header title={"Instructions"} message={"Welcome to the instructions page."}/>
            <Navigation title={"Modules"} routes={
                [
                    {text: "Module 0", path: "/module-0"},
                ]
            }/>
        </>
    );
}
