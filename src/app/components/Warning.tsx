export default function Warning({msg}: { msg: string }) {
    return <blockquote className={"blockquote-red"}>
        <strong>WARNING: </strong> {msg}
    </blockquote>
}