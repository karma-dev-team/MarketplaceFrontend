
import plusIcon from "@images/PlusLog.svg"
import { ChangeEvent, Dispatch, KeyboardEvent } from "react"
import "./ChatInputField.css"

type props = { 
    selectedFileBinary: string | undefined, 
    setSelectedFile: Dispatch<File | null>, 
    setFileBinary: Dispatch<string | undefined>, 
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void, 
    messageText: string, 
    setMessageText: Dispatch<string>, 
    handleSendMessage: () => void, 
}

type iconProps = { width?: string, height?: string }

const SendIcon: React.FC<iconProps> = (props: iconProps) => { 
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "23"} height={props.height || "23"} viewBox="0 0 15 20" fill="none">
            <path d="M0.849336 0.0606498L18.9337 8.97178C19.2254 9.11554 19.3454 9.46858 19.2016 9.76032C19.1443 9.87672 19.0501 9.97092 18.9337 10.0283L0.849708 18.9392C0.557965 19.083 0.204923 18.963 0.0611659 18.6713C-0.00169501 18.5437 -0.0162668 18.3977 0.0201422 18.2602L1.81186 11.4942C1.87111 11.2704 2.05596 11.1021 2.28428 11.0641L10.3886 9.71277C10.4879 9.69622 10.57 9.63067 10.6094 9.54158L10.6306 9.47073C10.6536 9.33324 10.5772 9.20214 10.4539 9.15066L10.3886 9.13189L2.23852 7.77354C2.01011 7.73547 1.82521 7.56708 1.76601 7.34321L0.0197339 0.739521C-0.0634541 0.425102 0.123996 0.102778 0.438415 0.0195896C0.575854 -0.0167737 0.721809 -0.00218951 0.849336 0.0606498Z" fill="#0066FF"/>
        </svg>
    )
}

const ChatInputField: React.FC<props> = (props: props) => { 
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        // Check if Enter key is pressed
        if (e.key === 'Enter') {
            // Prevent default behavior of the Enter key (e.g., form submission)
            e.preventDefault();
            // Call the function to send the message
            props.handleSendMessage();
        }
    };

    return ( 
        <>
            {props.selectedFileBinary !== undefined && props.selectedFileBinary !== "" ? <div className="message-added-files">
                <div className="message-added-file-container">
                    <img src={props.selectedFileBinary} alt="" className="message-added-file-image" height={"100%"}/>
                    <img src={plusIcon} alt="close-icon" width={25} height={25} className="message-file-clear" onClick={() => { 
                        props.setSelectedFile(null)
                        props.setFileBinary("")
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
                                onChange={props.handleFileChange} 
                                style={{ display: 'none' }} // Hide the input element
                            />
                            <img src={plusIcon} alt="Add File" className="add-file-icon" width={30} height={30}/>
                        </label>
                    </div>
                    <input
                        type="text"
                        className="message-input-text"
                        placeholder="Написать сообщение..."
                        value={props.messageText}
                        onChange={(e) => props.setMessageText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        autoFocus={true} 
                    />
                </div>
                <button className="message-send" onClick={props.handleSendMessage}>
                    <SendIcon width="23" height="23"/>
                </button>
            </div>
        </>
    )
}

export default ChatInputField; 