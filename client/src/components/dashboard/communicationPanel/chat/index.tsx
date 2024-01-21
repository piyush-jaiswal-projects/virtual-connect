import ChatBar from "./chatBar";
import ChatSection from "./chatSection";

export default function Chat() {
    return (
        <div className="flex flex-col justify-between h-[90%]">
            <ChatSection />
            <ChatBar />
        </div>
    )
}