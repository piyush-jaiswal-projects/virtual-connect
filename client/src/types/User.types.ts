export type ActiveUserProps = {
    name: string;
    id: string;
    imgUrl: string;
    socketId: string;
};

export interface User {
    name: string;
    email: string;
    uid: string;
    sid: string;
  }
  
export type OnlineUserProps = {
    name: string;
    uid: string;
    imgUrl: string;
    socketId: string
}