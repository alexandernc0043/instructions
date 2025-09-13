import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FCC 3 >> CSS",
  description:
    "Complete the listed freeCodeCamp CSS sections, then share a public profile URL and a combined screenshot as evidence.",
};

export default function FCC2_CSS() {
  return (
    <>
      <section>
        <h3>Overview</h3>
        <p>
          Complete these lessons in the freeCodeCamp Full Stack Curriculum. You&apos;ll need to create an account first.
        </p>
      </section>
      <hr />
      <section>
        <h3>Lessons to Complete</h3>
        <ul>
          <li>Styling Forms - 67 steps</li>
            <li>The Box Model - 54 steps</li>
            <li>Flexbox - 27 steps</li>
            <li>Typography - 78 steps</li>
            <li>Accessibility - 72 steps</li>
            <li>Positioning 88 steps</li>
        </ul>
      </section>
      <hr />
      <section>
        <h3>Submission</h3>
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

