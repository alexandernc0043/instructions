import {ReactNode} from "react";
import {highlight} from 'sugar-high'

export default function CodeHighlight({children}: { children: ReactNode }) {
    const codeHTML = highlight(children as string);
    return (
        <pre className="highlight bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto my-6">
            <div
                className="font-mono text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: codeHTML }}
            />
        </pre>
    );
}