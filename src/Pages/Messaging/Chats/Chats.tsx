import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import "./Chats.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import plusIcon from "@images/PlusLog.svg"
import VerifiedIcon from "src/Components/Icons/VerfiedIcon";
import { NavbarProps } from "src/Utils/NavbarProps";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { ChatControllersApi, ChatEntity, FileControllersApi, FileEntity, MessageEntity, MessagesApi, PurchaseControllersApi, PurchaseEntity } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import karmaLogo from "@images/karmastore-logo.png"
import { format } from "date-fns";
import { ru } from 'date-fns/locale'
import Modal from "src/Modals/Base/Base";
import PurchaseConfirmModal from "src/Modals/Messaging/PurchaseConfirm";

type iconProps = { width?: string, height?: string }

const SendIcon: React.FC<iconProps> = (props: iconProps) => { 
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 15 20" fill="none">
            <path d="M0.849336 0.0606498L18.9337 8.97178C19.2254 9.11554 19.3454 9.46858 19.2016 9.76032C19.1443 9.87672 19.0501 9.97092 18.9337 10.0283L0.849708 18.9392C0.557965 19.083 0.204923 18.963 0.0611659 18.6713C-0.00169501 18.5437 -0.0162668 18.3977 0.0201422 18.2602L1.81186 11.4942C1.87111 11.2704 2.05596 11.1021 2.28428 11.0641L10.3886 9.71277C10.4879 9.69622 10.57 9.63067 10.6094 9.54158L10.6306 9.47073C10.6536 9.33324 10.5772 9.20214 10.4539 9.15066L10.3886 9.13189L2.23852 7.77354C2.01011 7.73547 1.82521 7.56708 1.76601 7.34321L0.0197339 0.739521C-0.0634541 0.425102 0.123996 0.102778 0.438415 0.0195896C0.575854 -0.0167737 0.721809 -0.00218951 0.849336 0.0606498Z" fill="#0066FF"/>
        </svg>
    )
}

const ChatsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Сообщение')  

    const [cookies] = useCookies([AuthKey])
    const navigate = useNavigate()
    const chatApi = new ChatControllersApi(ApiConfig)
    const messagesApi = new MessagesApi(ApiConfig)
    const fileApi = new FileControllersApi(ApiConfig)

    const { chatId } = useParams()
    const [currentMessages, setMessages] = useState<MessageEntity[]>([])
    const [currentChat, setCurrentChat] = useState<ChatEntity>()
    const [messageText, setMessageText] = useState<string>('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFileBinary, setFileBinary] = useState<string>()
    const [chats, setChats] = useState<ChatEntity[]>([])
    const [currentFileScheme, setCurrentFileScheme] = useState<FileEntity>()
    const [currentPurchase, setCurrentPurchase] = useState<PurchaseEntity>()
    const [reviewOpen, setReviewOpen] = useState<boolean>(false)

    useEffect(() => { 
        (async () => {
            try { 
                let chatResponse = await chatApi.apiChatMeGet()
                setChats(chatResponse.data)

                setCurrentChat(chatResponse.data.filter(x => x.id === chatId)[0])
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [chatId, navigate])

    useEffect(() => { 
        (async () => {
            try { 
                let messageResponse = await messagesApi.apiMessagesChatChatIdMessagesGet(chatId || "")
                setMessages(messageResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [currentChat, chatId])

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            let fileResponse = await fileApi.apiFilesUploadPostForm(file)
            setCurrentFileScheme(fileResponse.data)
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => { 
                if (typeof reader.result === "string") {
                    setFileBinary(reader.result)
                } 
                setSelectedFile(file);
            }
        }
    };

    const handleSendMessage = async () => {
        if (chatId === "" || chatId === undefined) { 
            return; 
        }
        if (messageText.trim() !== '') {
            console.log('Sending message:', messageText);
        }
        if (selectedFile !== null) {
            console.log('Uploading file:', selectedFile);
        }
        if (messageText.length === 0 && (selectedFileBinary === "" || selectedFileBinary === undefined)) { 
            return; 
        }
        let newMessageResponse = await messagesApi.apiMessagesChatChatIdSendPost(chatId, { 
            chatId: chatId, 
            text: messageText, 
            image: currentFileScheme !== undefined ? { 
                fileId: currentFileScheme.id, 
            } : undefined, 
        })

        let newMessages = [newMessageResponse.data, ...currentMessages]
        setMessages(newMessages)
        setFileBinary(undefined)
        setMessageText('');
        setSelectedFile(null);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        // Check if Enter key is pressed
        if (e.key === 'Enter') {
            // Prevent default behavior of the Enter key (e.g., form submission)
            e.preventDefault();
            // Call the function to send the message
            handleSendMessage();
        }
    };
    

    useEffect(() => {
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [chatId])

    return (
        <div className="root-chats">
            <Modal isOpen={reviewOpen} onClose={() => setReviewOpen(false)}>
                <PurchaseConfirmModal 
                    productId={currentPurchase?.product.id || ""}
                    purchaseId={currentPurchase?.id || ""}
                    price={currentPurchase?.product.currentPrice.amount || 0}
                    onClose={() => setReviewOpen(false)}
                />
            </Modal>
            <div className="chats-list">
                {chats.map((value) => { 
                    return (
                        <Link
                            to={`/chat/${value.id}`}
                            className={`chat-container ${
                            currentChat?.id === value.id ? "active" : ""
                            }`}
                            key={value.id}
                        >
                            <div className="chat-image">
                                <img src={value.image !== null ? asFileUrl(value.image?.id) : karmaLogo} alt="" />
                                {value.type === "Support" ? <div className="chat-image-online"></div> : null}
                            </div>
                            <div className="chat-header">
                                <div className="chat-header-text">
                                    <p className="chat-name">
                                        {value.name}
                                        
                                        {value.isVerified ? <div className="verified-icon-container"><VerifiedIcon /></div> : null}
                                    </p>
                                    {value.lastMessage !== null ? 
                                        <p className="chat-last-message-date">
                                            {value.lastMessage?.createdAt !== null || value.lastMessage?.createdAt !== undefined 
                                                ? format(value.lastMessage?.createdAt || "", "eeee", { locale: ru }) : null}
                                        </p>
                                    : null }
                                </div>
                                <div className="chat-last-message">
                                    {value.lastMessage?.text || ""}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="current-chat-container">
                {currentChat !== undefined ?
                    <div className="current-chat">
                        <div className="current-chat-header">
                            <div className="current-chat-logo">                           
                                <img src={currentChat.image !== null ? asFileUrl(currentChat.image?.id) : karmaLogo} alt="" />
                                {false || currentChat.type === "Support" ?
                                    <div className="chat-online"></div> : null}
                            </div>
                            <div className="current-chat-text">
                                <p>{currentChat.name}</p>
                                {currentChat.isVerified ? <div className="verified-icon-container"><VerifiedIcon /></div> : null}
                            </div>
                        </div>
                        <div className="current-chat-messages">
                            {currentMessages.map(value => { 
                                return (
                                    <div className={value.fromUser.id === props.user?.id ? "user-message" : "other-message"}>
                                        <div className={`chat-message `}> 
                                            {value.image !== null ? <div className="message-image-container">
                                                <img src={asFileUrl(value.image?.id || "")} alt="" className="message-image"/>
                                            </div> : null}
                                            <span className="chat-message-text">{value.text}</span>
                                            <span className="chat-message-corner">
                                                <div className="chat-message-date-container">
                                                    <span className="chat-message-date">
                                                        {
                                                            value.createdAt !== null || value.createdAt !== undefined 
                                                                ? format(value.createdAt || "", "eeee", { locale: ru }) : null}
                                                        </span>
                                                </div>
                                            </span>
                                            {value.type === "Purchase" && value.purchase?.status !== "Success" ? 
                                                <button className="purchase-confirm" onClick={() => { 
                                                    setCurrentPurchase(value.purchase)
                                                    setReviewOpen(true)
                                                }}>
                                                    Подвердить
                                                </button>
                                            : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {selectedFileBinary !== undefined && selectedFileBinary !== "" ? <div className="message-added-files">
                            <div className="message-added-file-container">
                                <img src={selectedFileBinary} alt="" className="message-added-file-image" height={"100%"}/>
                                <img src={plusIcon} alt="close-icon" width={25} height={25} className="message-file-clear" onClick={() => { 
                                    setSelectedFile(null)
                                    setFileBinary("")
                                }}/>
                            </div>
                        </div> : null }
                        <div className="message-input">
                            <div className="message-input-container">
                                <div className="message-add-file">
                                    <label htmlFor="fileInput" className="fileInputLabel">
                                        <input 
                                            type="file" 
                                            id="fileInput" 
                                            className="message-input-file"      
                                            accept="image/png,.png,image/jpeg,.jpg,.jpeg"
                                            onChange={handleFileChange} 
                                            style={{ display: 'none' }} // Hide the input element
                                        />
                                        <img src={plusIcon} alt="Add File" className="add-file-icon" width={30} height={30}/>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    className="message-input-text"
                                    placeholder="Написать сообщение..."
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    autoFocus={true} 
                                />
                            </div>
                            <button className="message-send" onClick={handleSendMessage}>
                                <SendIcon width="25" height="25"/>
                            </button>
                        </div>
                    </div>
                 : <div className="chat-select-message">
                        <svg width="125" height="119" viewBox="0 0 125 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.334 0.168678C34.8277 0.757919 27.2486 3.05878 20.9326 6.65038C9.24815 13.2724 2.0334 23.2615 0.332959 35.2148C-0.541556 41.1634 0.308667 47.1119 2.85934 53.0605C4.58407 57.0449 6.09018 59.458 9.07811 62.9093C11.6531 65.8836 14.058 68.0442 17.5318 70.4292L20.0824 72.1689L14.3981 84.6272C11.2644 91.4737 8.76231 97.1136 8.81089 97.1978C8.85948 97.2539 14.0337 93.2134 20.301 88.2188C26.5441 83.1962 32.1313 78.7628 32.69 78.342L33.7103 77.5563L36.6982 78.1455C44.5688 79.6888 51.2249 79.6046 58.8769 77.893C69.5654 75.508 79.3308 69.6436 85.4767 61.9834C90.8938 55.165 93.5903 47.7573 93.5903 39.592C93.5903 26.2638 85.9625 14.1422 72.8448 6.7065C63.9296 1.65582 53.0711 -0.673103 42.334 0.168678ZM32.0341 38.1891V43.9412H27.1757H22.3173V38.1891V32.4369H27.1757H32.0341V38.1891ZM51.9536 38.1891V43.9412H47.0952H42.2368V38.1891V32.4369H47.0952H51.9536V38.1891ZM72.1161 38.1891V43.9412H67.1362H62.1563V38.1891V32.4369H67.1362H72.1161V38.1891Z" fill="#3E4157"/>
                            <path d="M100.78 31.6512C100.78 31.7073 100.95 32.6333 101.145 33.6995C101.339 34.7938 101.582 37.1227 101.655 38.8905C102.238 50.8718 97.3552 62.4042 87.8327 71.6077C77.8972 81.232 62.8118 87.2648 48.3095 87.4612L45.2729 87.4892L46.609 88.8922C49.3054 91.6981 54.1881 95.1214 58.2692 97.0575C65.1925 100.368 71.6541 101.799 79.8892 101.856C84.7233 101.884 86.3266 101.715 90.6263 100.733L92.4725 100.312L104.23 109.684C110.667 114.847 116.011 119.028 116.036 119C116.084 118.944 113.704 113.584 110.74 107.075C107.776 100.565 105.396 95.2336 105.444 95.1775C105.469 95.1494 106.44 94.5041 107.582 93.7745C115.623 88.4713 121.526 80.2499 123.566 71.4674C124.101 69.1384 124.174 68.2125 124.174 64.5648C124.174 60.9171 124.101 59.9911 123.542 57.6341C121.672 49.4688 117.056 42.5382 109.793 36.8983C106.951 34.6816 100.78 31.09 100.78 31.6512Z" fill="#3E4157"/>
                        </svg>
                 
                        <p>Выбирите чат для переписки</p>
                    </div>}
            </div>
        </div>
    ); 
}

export default ChatsPage; 