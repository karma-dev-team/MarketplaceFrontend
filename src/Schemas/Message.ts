import ImageScheme from "./Image";

export interface MessageScheme { 
    text: string, 
    id: string, 
    createdAt: string, 
    type: string, 
    images?: ImageScheme[]
}