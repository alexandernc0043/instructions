import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Error 404",
    description: "Sorry, the page you’re looking for doesn’t exist."
}
export default function Custom404(){
    return <>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
        <br/>
    </>

}