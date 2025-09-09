import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FCC 2 >> CSS",
  description:
    "Complete the listed freeCodeCamp CSS sections, then share a public profile URL and a combined screenshot as evidence.",
};

export default function FCC2_CSS() {
  return (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          Complete these lessons in the freeCodeCamp Full Stack Curriculum. You'll need to create an account first.
        </p>
      </section>
      <hr />
      <section>
        <h2>Lessons to Complete</h2>
        <ul>
          <li>Computer Basics — 16 steps</li>
          <li>Basic CSS — 126 steps</li>
          <li>Design — 23 steps</li>
          <li>Absolute and Relative Units — 8 steps</li>
          <li>Pseudo Classes and Elements — 37 steps</li>
          <li>Colors — 98 steps</li>
          <li><strong>TOTAL — 308 steps</strong></li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Submission</h2>
        <p>
          Post the URL to your freeCodeCamp profile here. Ensure your profile is public and shows points and a timeline.
          If you chose an unusual username, make sure it clearly ties to your real name.
        </p>
        <p>
          Also attach a screenshot showing each of these lessons and the Certification Project with
          checkboxes/completion marks next to them. Add your name somewhere in the screenshot (e.g., visible in the
          URL). Create a single screenshot that includes only relevant portions—crop out anything unnecessary.
        </p>
        <p>Add any comments, notes, or collaborators you worked with.</p>
      </section>
    </>
  );
}

