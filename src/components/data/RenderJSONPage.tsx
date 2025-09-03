import {HeaderConfig} from "@/app/(assignments)/layout";
import type { ReactNode } from "react";
// NOTE: This renderer expects data. Wire it to your data source.
// import {m0d} from '@/content/module-0/m0d' // Example future location
// import {section} from "@/content/types";

// Temporary placeholder until data is provided
const m0d = {
  title: { header: "Untitled", message: "No data wired" },
  sections: [] as { header: string; steps: ReactNode }[],
};

export const JSONRender = () => {
    return (
        <>
            <HeaderConfig title={m0d.title.header} message={m0d.title.message}/>
            {m0d.sections.map((section, index) => (
                <section key={(index * 2).toString()}>
                    <h2>{section.header}</h2>
                    <div>{section.steps}</div>
                </section>
            ))}
        </>
    );
}

export default JSONRender
