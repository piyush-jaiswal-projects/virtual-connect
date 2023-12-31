import { Feature } from "./types/Feature.types";
import {
    VideoCall,
    AudioCall,
    FileSharing,
    Chatting,
  } from "./assets/images";


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
  
