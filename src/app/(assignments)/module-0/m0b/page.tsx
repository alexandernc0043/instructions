import type {Metadata} from "next";
import Warning from "@/components/feedback/Warning";

export const metadata: Metadata = {
    title: "Assignment M0b - Introductions in shared Google Doc",
    description:
        "Add your introduction to the shared Google Doc, follow formatting, complete peer reviews, and submit the direct link to your entry.",
};

export default function M0b() {
    return (
        <>
            <section>
                <h2>Overview</h2>
                <p>
                    Add your introduction to the shared course Google Doc and follow the
                    specified formatting and checklist below. You will also complete two
                    peer reviews.
                </p>
                <p>
                    Instructions are here: {" "}
                    <a
                        href="https://docs.google.com/document/d/16gWOKFFqFE2QyFEXwCDIWb6u3eLwPyS6_OGdggxAdlI/edit?usp=sharing"
                        target="_blank"
                    >
                        Shared Google Doc
                    </a>
                    . The document is also linked from the front page of the course.
                </p>
                <Warning msg={
                    "The document allows all to edit. Be careful not to edit other students' entries."
                }/>
            </section>
            <hr/>
            <section>
                <h2>Formatting requirements</h2>
                <p>Under your last bullet, add a centered menu with these links (to your accounts):</p>
                <ul>
                    <li>CLT Web</li>
                    <li>GitHub</li>
                    <li>GitHub.io</li>
                    <li>ITIS3135.io (where Course is your course ID)</li>
                    <li>freeCodeCamp</li>
                    <li>Codecademy</li>
                    <li>LinkedIn</li>
                </ul>
                <blockquote>
                    <strong>Note:</strong> These are absolute links, but once moved to an HTML page, the
                    ITIS3135.io link will become relative.
                </blockquote>
            </section>
            <hr/>
            <section>
                <h2>Peer reviews</h2>
                <p>
                    Complete two peer reviews. Use the commenting feature in the Google
                    Doc (highlight text, right-click, comment) to suggest updates or
                    corrections so your classmates can fix typos or formatting issues.
                </p>
            </section>
            <hr/>
            <section>
                <h2>Grading details</h2>
                <p>
                    We will give you 1 point for any errors/typos with feedback to correct
                    them. If there are still errors, it will be 1 more point, and so on
                    until it’s about perfect. The closer to perfect you start, the better.
                </p>
            </section>
            <hr/>
            <section>
                <h2>What to post</h2>
                <p>When posting to Canvas for this assignment, confirm that:</p>
                <ul>
                    <li>You added your entry following the required formatting.</li>
                    <li>
                        Your name in the table of contents is listed as <em>Last, First</em>
                        and alphabetized by last name.
                    </li>
                    <li>
                        Your bullets are tidy with no extra spaces, and your nested course
                        list contains course names without sections.
                    </li>
                    <li>
                        You have all seven links above, and each goes to your own accounts.
                    </li>
                    <li>
                        You completed two peer reviews and briefly summarize who you
                        reviewed and what you suggested.
                    </li>
                </ul>
            </section>
            <hr/>
            <section>
                <h2>Submission</h2>
                <p>
                    In the Google Doc, go to your entry&apos;s heading (the H2 you created
                    with <em>Last, First</em>), copy the link to that heading, and submit
                    that URL in Canvas. We should be able to click it and jump directly to
                    your entry.
                </p>
            </section>
        </>
    );
}

