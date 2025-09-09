import type { Metadata } from "next";
import CodeHighlight from "@/components/ui/CodeHighlight";

export const metadata: Metadata = {
  title: "Accumulus Validator Setup",
  description:
    "Add the Accumulus validator to all course pages, verify it runs, review warnings and WCAG, and upload your site.",
};

export default function AccumulusSetup() {
  return (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          Accumulus provides in‑browser feedback on your webpages, checking structure, accessibility compliance, and
          standardization. Add it to all pages and ensure your pages pass all tests. Manually run WCAG checks via the Accumulus cloud menu.
        </p>
      </section>
      <hr />
      <section>
        <h2>Required Script</h2>
        <p>Place this line at the bottom of your page head on each page:</p>
        <pre>
          <CodeHighlight>{`<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>`}</CodeHighlight>
        </pre>
      </section>
      <hr />
      <section>
        <h2>Steps</h2>
        <ul>
          <li>Include the Accumulus script on all pages in <code>/itis3135</code>.</li>
          <li>
            Verify a small colored cloud appears in the bottom‑left when the page loads on a public server (GitHub Pages
            or school site).
          </li>
          <li>Review warnings and errors via the Accumulus UI; consult the video guide as needed.</li>
          <li>Use Accumulus to check WCAG items explicitly.</li>
          <li>Upload your website to both GitHub Pages and your university hosting.</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Support</h2>
        <p>
          For issues or questions, contact the developer (Seth Vance, @voison on Discord, <a href={"mailto:svance3@uncc.edu"}>svance3@uncc.edu</a>) or your
          instructor.
        </p>
      </section>
    </>
  );
}

