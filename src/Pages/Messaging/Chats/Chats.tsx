import { useState } from "react";
import "./Chats.css"
import data from "@testdata/Chats.json"
import { MessageScheme } from "src/Schemas/Message";
import { Link, useParams } from "react-router-dom";

const ChatsPage: React.FC = () => {  
    const { chatId } = useParams()
    const [currentChatId, setCurrentChatId] = useState<string>(chatId || "")
    const [currentMessages, setMessages] = useState<MessageScheme[]>([])
    const [currentChatName, setCurrentChatName] = useState<string>('')

    data.chats.forEach((value) => { 
        if (currentChatId === value.id) { 
            setCurrentChatId(value.id)
            setCurrentChatName(value.name)
            setMessages(value.messages)
        }
    })

    return (
        <div className="root-chats">
            <div className="chats-list">
                {data.chats.map((value) => { 
                    return (
                        <Link to={`/chats/${value.id}`} className={`chat-container ${currentChatId == value.id ? "active" : ""}`}>
                            <div className="chat-image">
                                <img src={value.image} alt="" />
                                <div className="chat-image-online"></div>
                            </div>
                            <div className="chat-header">
                                <div className="chat-header-text">
                                    <p className="chat-name">
                                        {value.name}
                                    </p>
                                    <p className="chat-last-message-date">
                                        {value.lastMessage.createdAt}
                                    </p>
                                </div>
                                <div className="chat-last-message">
                                    {value.lastMessage.text}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="chat-container">
                <div className="current-chat-header">

                </div>
            </div>
        </div>
    ); 
}

export default ChatsPage; 