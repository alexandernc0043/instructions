import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Assignment FCC1 >> HTML",
    description:
        "Complete the listed freeCodeCamp HTML sections, share a public profile URL, and attach a screenshot per instructions.",
};

export default function FCC1_HTML() {
    return (
        <>
            <section>
                <h2>Overview</h2>
                <p>
                    Complete these lessons in the <a href={"https://www.freecodecamp.org/learn/full-stack-developer/"} target={"_blank"}>freeCodeCamp Full Stack Curriculum</a>. You&apos;ll need to create an account first.
                </p>
            </section>
            <hr/>
            <section>
                <h2>Lessons to Complete</h2>
                <ul>
                    <li>Basic HTML — 91 steps</li>
                    <li>Semantic HTML — 39 steps</li>
                    <li>Forms and Tables — 59 steps</li>
                    <li>Accessibility — 24 steps</li>
                </ul>
            </section>
            <hr/>
            <section>
                <h2>Submission</h2>
                <p>
                    Then post the URL to your freeCodeCamp profile here. Be sure your profile is public and shows points
                    and a
                    timeline. If you have picked an odd username, make sure there&apos;s some affiliation with your actual
                    name so we
                    know it&apos;s you.
                </p>
                <p>
                    Take a screenshot of the page that shows each of these lessons and the Certification Project with
                    checkboxes/completion marks next to them and attach it here. (ADD YOUR NAME SOMEWHERE IN THE
                    SCREENSHOT — like
                    in the URL.) You can add the screenshot by clicking &#34;Insert&#34; in the text menu bar. From there, you
                    can also
                    add the URL to your FCC profile. With a quick search you can find an easy way to create a single
                    screenshot
                    that includes only the relevant portions. Crop out what is not relevant, but put everything else
                    into one
                    image.
                </p>
            </section>
        </>
    );
}
