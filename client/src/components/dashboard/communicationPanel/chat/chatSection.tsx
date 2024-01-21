import ReceivedMsgCard from "./receivedMsgCard";
import SentMsgCard from "./sentMsgCard";

export default function ChatSection() {
    return (
        <div className="h-[90%] w-[85%] mx-auto overflow-x-hidden overflow-y-scroll px-2">
            <SentMsgCard msg="hi, r u up?" />
            <ReceivedMsgCard msg="yeah buddy!" />
            <SentMsgCard msg="Fuck you!" />
            <ReceivedMsgCard msg="What??" />
            <SentMsgCard msg="Fuck your own self!" />
            <ReceivedMsgCard msg="Fuck you bitch! Fuck you!" />
            <SentMsgCard msg="Get the fuck out of here" />
            <ReceivedMsgCard msg="you too, otherwise I'll break your finger and shove it up your ass" />
            <SentMsgCard msg="go get a nap bitch" />
            <ReceivedMsgCard msg="fuck off!" />
        </div>
    )
}