export interface Message {
    msg_id: string;
    sender: User;
    receipient: User;
    content: string;
    timestamp: Date;
}

interface User {
    name: string;
    id: string;
    sid: string
}