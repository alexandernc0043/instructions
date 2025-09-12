import type {Metadata} from "next";
import Warning from "@/components/feedback/Warning";

export const metadata: Metadata = {
    title: "Start Using NinerLink Discussion",
    description: "Explore NinerLink, make a public post, and submit your post URL.",
};

export default function Page() {
    return (
        <>
            <section>
                <h2>Explore NinerLink</h2>
                <p>
                    Explore NinerLink from on the left-hand menu of Canvas. Look at the various options and adjust your
                    settings to your preference. <strong>This is the NUMBER ONE WAY TO GET HELP</strong> — before you text, email, call,
                    or Discord, you should post here so it will benefit all in the class.
                </p>
            </section>
            <hr/>
            <section>
                <h2>Make a Public Post</h2>
                <p>
                    Make a public post or question — preferably a real question about the course. Note the different
                    kinds of ways you can post.
                </p>
            </section>
            <hr/>
            <section>
                <h2>Submission</h2>
                <p>
                    Copy the URL of your post, and paste it here to complete this assignment.
                </p>
            </section>
            <hr/>
            <section>
                <h2>Ongoing Participation</h2>
                <p>
                    READ EVERY POST TWICE WEEKLY, even if you have no questions — <strong>THIS IS PART OF THE CLASS/COURSE MATERIALS.</strong>
                </p>
                <p>
                    To the extent possible, you&apos;ll earn some required participation points from your readings.
                </p>
                <p>
                    Additional work (posts, replies, upvotes, etc...) will count towards extra credit.
                </p>
                <Warning
                    msg={"This tool can generate a lot of email. Adjust your notification settings (under your profile image, top-right) or configure your email to filter them."}/>

            </section>
        </>
    );
}
