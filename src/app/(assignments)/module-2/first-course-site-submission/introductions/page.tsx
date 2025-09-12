import type {Metadata} from "next";
import Introductions from "@/components/data/Introductions";

export const metadata: Metadata = {
    title: "Introduction Generator",
    description: "Generate your introduction!",
};

export default function Page() {
    return <Introductions/>
}
