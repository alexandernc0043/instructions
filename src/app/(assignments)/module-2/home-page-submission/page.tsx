import type {Metadata} from "next";
import Link from "next/link";
import Warning from "@/components/feedback/Warning";

export const metadata: Metadata = {
    title: "Home Page Submission",
    description: "Create a personal home page (index.html) for school and GitHub Pages with required structure, styling, and links.",
};

export default function HomePageSubmission() {
    return (
        <>
            <section>
                <h3>Overview</h3>
                <p>
                    Create a personal home page (<code>index.html</code>) that serves as your main landing page for both
                    your
                    school website and GitHub Pages. This page should be professional, represent you well, and serve as
                    a gateway
                    to your coursework and professional profiles. Complete the first HTML tutorials before doing this.
                </p>
            </section>
            <hr/>
            <section>
                <h3>Technical Structure</h3>
                <ul>
                    <li>
                        Use HTML5 semantic elements: within the body
                        use <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and
                        <code>&lt;footer&gt;</code>.
                    </li>
                    <li>
                        Header: include an <code>&lt;h1&gt;</code> with your name or personal branding.
                    </li>
                    <li>
                        Main: include one <code>&lt;h3&gt;</code> (the page name) and at least
                        two <code>&lt;p&gt;</code> elements
                        with content about you.
                    </li>
                    <li>
                        Title: combine your <code>&lt;h1&gt;</code> and <code>&lt;h3&gt;</code> with a divider for the
                        <code>&lt;title&gt;</code>.
                    </li>
                    <li>Footer: include navigation links (see below).</li>
                    <li>CSS: use an embedded stylesheet inside <code>&lt;style&gt;</code> in the head.</li>
                    <li>Validation: include the <Link href={"/module-2/accumulus-validator-setup"} target={"_blank"}>Accumulus
                        validator</Link> and test all items.
                    </li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>Styling Requirements</h3>
                <p>Use embedded CSS and update at least these selectors and properties:</p>
                <ul>
                    <li>Selectors: at minimum style <code>body</code>, <code>h1</code>, and <code>h3</code>.</li>
                    <li>Fonts: pick at least two; differentiate headings from normal text.</li>
                    <li>Colors: set background and font colors (tip: use coolors.co and save the palette URL).</li>
                    <li>Layout: set <strong>margin:</strong> <code>0
                        auto</code>, <strong>max-width</strong> between <code>600–1000px</code>,
                        and <strong>width</strong> <code>80–95%</code>.
                    </li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>Navigation Links (Footer)</h3>
                <p>Include these links with clear separators (e.g., ~, |, spacing, or icons):</p>
                <ul>
                    <li>ITIS3135 — link to <code>itis3135/</code> (your course home page)<Warning msg={"This link should be relative and not absolute."}/></li>
                    <li>GitHub.com — link to your GitHub account profile</li>
                    <li>CLT Web — link to your UNCC web home</li>
                    <li>GitHub.io — link to your GitHub Pages home</li>
                    <li>LinkedIn — link to your LinkedIn profile</li>
                </ul>
                <blockquote>Example: <a href={"https://github.com/alexandernc0043"}
                                        target={"_blank"}>GitHub.com</a> ~ <a
                    href={"https://webpages.charlotte.edu/aprechte/"} target={"_blank"}>CLT Web</a> ~ <a
                    href={"https://alexandernc0043.github.io/"} target={"_blank"}>GitHub.io</a> ~ <a
                    href={"https://alexandernc0043.github.io/itis3135"} target={"_blank"}>ITIS3135</a> ~ <a
                    href={"https://www.linkedin.com/in/alexander-prechtel-b4a0a9283/"} target={"_blank"}>LinkedIn</a>
                    <br/><strong>Note: </strong> for this example my link isn&apos;t relative but yours should be.
                </blockquote>
            </section>
            <hr/>
            <section>
                <h3>Content Guidelines</h3>
                <ul>
                    <li>Professional tone suitable for any viewer.</li>
                    <li>Personal focus; do not include course‑specific content.<Warning msg={"This includes things like your freeCodeCamp and Codecademy profile links."}/></li>
                    <li>Design should be distinct from your course pages.</li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>File Management</h3>
                <ul>
                    <li>Create <code>index.html</code> for both your root and <code>itis3135</code> folders.</li>
                    <li>Use SFTP for school website uploads.</li>
                    <li>Use GitHub Desktop or CLI for GitHub Pages.</li>
                    <li>Keep both versions synchronized.</li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>Important Notes</h3>
                <ul>
                    <li>“Home page” context varies; ensure correct location.</li>
                    <li><code>index.html</code> is the default filename servers look for.</li>
                    <li>Test links, validate HTML, and verify in private browsing.</li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>Quality Standards</h3>
                <ul>
                    <li>All links functional and public.</li>
                    <li>No HTML validation errors.</li>
                    <li>Professional appearance; easy navigation.</li>
                </ul>
            </section>
            <hr/>
            <section>
                <h3>Submission</h3>
                <p>Submit ONE link to your UNCC website home page.</p>
                <blockquote>
                    <strong>Example: </strong> <a href={"https://webpages.charlotte.edu/aprechte/"} target={"https://webpages.charlotte.edu/aprechte/"}>https://webpages.charlotte.edu/aprechte/</a>
                </blockquote>
            </section>
            <hr/>
            <section>
                <h3>Grading</h3>
                <p>
                    1/30 points for pages with errors (with feedback), 2/30 for second submission with remaining errors;
                    continues
                    until full credit is achieved.
                </p>
            </section>
        </>
    );
}

