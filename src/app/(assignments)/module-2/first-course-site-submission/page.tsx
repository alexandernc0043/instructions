import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Course Site Submission",
  description: "Submit the initial version of your ITIS3135 course site."
};

export default function FirstCourseSiteSubmission() {
  return (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          This assignment is for submitting the first version of your course site. Follow the detailed requirements in
          the course instructions. If additional specifics are needed here, please provide the latest text and I will
          incorporate it.
        </p>
          <Link href={"/module-2/first-course-site-submission/introductions"}>INTRODUCTION GENERATOR</Link>
      </section>
      <hr />
      <section>
        <h2>Submission</h2>
        <ul>
          <li>Provide the public URL to your course site.</li>
          <li>Ensure pages validate and include the Accumulus validator.</li>
          <li>Confirm links and navigation function correctly.</li>
        </ul>
      </section>
    </>
  );
}

