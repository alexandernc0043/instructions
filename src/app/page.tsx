import {Navigation} from "@/app/components/Navigation";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <>
            <Header title={"Instructions"} message={"Welcome to the instructions page."}/>
            <Navigation routes={[{text: "Module 0", path: "module-0"}]}/>
        </>
    );
}
