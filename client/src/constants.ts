import { Feature } from "./types/Feature.types";
import {
    VideoCall,
    AudioCall,
    FileSharing,
    Chatting,
  } from "./assets/images";
import { ActiveUserProps } from "./types/User.types";


export const featuresData: Feature[] = [
    {
      text: "Video Conferencing",
      imageUrl: VideoCall,
    },
    {
      text: "Audio Calling",
      imageUrl: AudioCall,
    },
    {
      text: "File Sharing",
      imageUrl: FileSharing,
    },
    {
      text: "Chatting",
      imageUrl: Chatting,
    },
];

export const DummyOnlineData: ActiveUserProps[] = [
  {
    name: "Piyush Jaiswal",
    id: "1",
    imgUrl: "",
    socketId: ""
  },
  {
    name: "Shalabh Sharma",
    id: "2",
    imgUrl: "",
    socketId: ""
  },
  {
    name: "Prayas Pahwa",
    id: "3",
    imgUrl: "",
    socketId: ""
  },
]
  
