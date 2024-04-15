import "./Notifications.css";
import ContentLine from "src/Components/ContentLine/ContentLine";
import NotificationComponent from "src/Components/Notification/Notification";
import data from "@testdata/Notifications.json"
import { useState } from "react";
import { NavbarProps } from "src/Utils/NavbarProps";

const NotificationTypeToText: { [key: string]: string | undefined } = { 
    "Other": undefined, 
    "Purchase": "Ваш товар купили", 
    "Buy": "Вы купили товар", 
    "Wallet": "Ваш кошелек изменился", 
    "Withdraw": "Пользватель купивший ваш товар отменил покупку", 
    "Review": "Пользватель оставил отзыв после покупки", 
    "System": undefined
}

const NotificationsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    let notifications = data; 
    
    const notificationTypes = { 
        "": "Все уведомления",  
        "Buy": "Вы оплатили заказ", 
        "Purchase": "Новые сделки", 
        "Review": "Отзывы", 
        "Witdraw": "Возврат заказа", 
        "Wallet": "Измнения в балансе", 
        "System": "Системные"
    }   
    const [currentType, setCurrentType] = useState<string>(Object.keys(notificationTypes)[0]); 

    return (
        <div className="root-notifications">
            <div className="korobka337">
                <div className="notifications-header">
                    <h2>Уведомления</h2>
                    <ContentLine/>
                </div>
                <div className="notifications-container">
                    <div className="notif-container global-overflow">
                        {notifications.map((value) => {
                            if (value.type !== currentType && currentType !== "") { 
                                return null; 
                            } 
                            return <NotificationComponent        
                                notificationId = {value.id} 
                                title = {value.title}
                                image = {value.byUserImage}
                                content = {NotificationTypeToText[value.type] || value.text}
                            />
                        })}
                    </div>
                    <ul className="notifications-selector-list">
                        {Object.entries(notificationTypes).map((value) => {
                            return (
                                <li className={`notification-type-selector ${value[0] === currentType ? "active" : ""}`} onClick={() => setCurrentType(value[0])}>
                                    {value[1]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    ); 
}

export default NotificationsPage; 