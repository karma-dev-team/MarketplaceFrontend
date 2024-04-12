import { MessageScheme } from "./Message";

export interface ChatUser {
    id: string;
    name: string;
    isOnline: boolean;
}

export interface ChatScheme {
    id: string;
    name: string;
    lastMessage: MessageScheme;
    createdBy: ChatUser;
    image: string;
    type: string;
    isVerified: boolean, 
    unreadMessages: number;
    messages: MessageScheme[];
}