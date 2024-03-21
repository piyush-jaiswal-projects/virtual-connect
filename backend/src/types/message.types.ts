export interface Message {
    msg_id: string;
    sender: User;
    receipient: User;
    content: string;
    timestamp: Date;
}

export interface User {
    name: string;
    uid: string;
    sid: string
}