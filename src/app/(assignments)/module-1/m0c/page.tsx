import type { Metadata } from "next";
import Warning from "@/components/feedback/Warning";

export const metadata: Metadata = {
  title: "Assignment M0c - freeCodeCamp (FCC) & Codecademy Setup/Start",
  description:
    "Create FCC and Codecademy accounts, make profiles public, and submit clickable profile links per requirements.",
};

export default function M0c() {
  return (
    <>
      <section>
        <h3>Create your accounts</h3>
        <p>
          Create accounts on
          {" "}
          <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>
          {" "}
          and
          {" "}
          <a href="https://www.codecademy.com/" target="_blank">Codecademy</a>
          {" "}
          (ideally using the Google account tied to your school account). Your username must clearly identify you (name,
          initials, mascot, or something unique) so we can cross‑reference with your Canvas name. Feel free to add any
          additional information to your profiles.
        </p>
      </section>
      <hr />
      <section>
        <h3>Make profiles public</h3>
        <p>
          Adjust each platform’s profile settings so we can view your visible activity (points, timelines/heatmap,
          certifications, etc.).
        </p>
        <Warning
          msg={
            "Test visibility by opening your profile URLs in a private/incognito window. If you can see them there, we can too. If not, fix your privacy settings."
          }
        />
      </section>
      <hr />
      <section>
        <h3>What to submit</h3>
        <ul>
          <li>
            The URL to your <strong>freeCodeCamp</strong> profile showing a public profile with timeline, any
            certifications, and at least <strong>10+</strong> points; the activity heatmap and timeline must be visible.
          </li>
          <li>
            The URL to your <strong>Codecademy</strong> profile showing a public profile with completion of the
            <em> Welcome to Codecademy</em> lesson.
          </li>
          <li>
            Ensure the URLs are <strong>clickable links</strong> in your Canvas post (don’t leave them as plain text).
          </li>
          <li>
            Optional: Any notes you’d like to share in the text area.
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h3>Submission</h3>
        <p>
          Post a reply in Canvas with the two clickable profile links and your notes (if any). Re‑check that both links
          open and show required details in a private/incognito window before submitting.
        </p>
      </section>
      <hr />
      <section>
        <h3>Grading</h3>
        <p>
          There is no partial score for this assignment. Full score means everything is correct. A score of 1/20 means
          you need to fix/complete the requirements as soon as possible; it’s not a reflection of the portion
          completed.
        </p>
      </section>
    </>
  );
}
