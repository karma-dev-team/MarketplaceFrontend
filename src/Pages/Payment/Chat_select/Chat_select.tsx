import "./Chat_select.css"

import telegramIcon from "@images/telegram-icon.png"
import chatIcon from "@images/Group.png"
import { NavbarProps } from "src/Utils/NavbarProps";


const ChatSelectPage: React.FC<NavbarProps> = (props: NavbarProps) => {  
    props.setCategory('Покупки')
    return (
        <div className="root-chatselect">
            <h1 className="text-123">Выбырите тип чата в котором хотите продолжить общение</h1>
            <br />
            <div className="container12332">
                <div className="left-part">
                    <div className="img3218327"><img src={telegramIcon} alt="telegram" /></div>
                    <p>Telegram</p>
                </div>
                <div className="right-part">
                    <div className="img3218327"><img src={chatIcon} alt="chat" /></div>
                    <p>Сообщение</p>
                </div>
            </div>
        </div>
    ); 
}

export default ChatSelectPage; 
