import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Create your Design Firm One Page Site",
    description: "Make your design firm."
}

export default function Page() {
    return <>
        <section>
            <h2>Overview</h2>
            <p>Note - to clarify at this point - for our purposes when we say &#34;firm&#34; &#34;design
                company&#34; &#34;your design firm&#34;
                or &#34;design firm&#34; we mean your web development/design brand, NOT your animal/whimsical company.
                So we&apos;ll
                distinguish these by saying &#34;firm&#34; for the design firm and company
                and/or &#34;mascot&#34; or &#34;animal&#34; or even
                &#34;fun&#34; or &#34;whimsical&#34; site for your website that incorporates a business idea and
                products, and is named
                after your mascot.</p>
            <br/>
            <p>
                Here you&apos;ll create your design/consulting firm brand - starting with a subfolder within your course
                folder. All your other pages (not in the subfolder) will point to this one in their footers, where it
                says something like &#34;Page designed by YourName Enterprises&#34; where the YourName is your design
                firm name,
                and is linked to your firm. You may have done some of this already. Also put a link to this page in the
                footer of your Whimsical Company site.
            </p>
        </section>
        <hr/>
        <section>
            <h2>Create your design firm</h2>
            <p>Come up with a design/consulting/development firm that has your name in it. So for John Jackson it might
                be Jackson Enterprises, or JJ Unlimited, or something like that.</p>
        </section>
    </>
}