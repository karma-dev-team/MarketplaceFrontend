import "./Notifications.css";
import ContentLine from "src/Components/ContentLine/ContentLine";
import NotificationComponent from "src/Components/Notification/Notification";
import logo from "@images/karmastore-logo.png"
import data from "@testdata/Notifications.json"
import { useState } from "react";

const NotificationTypeToText: { [key: string]: string | undefined } = { 
    "Other": undefined, 
    "Purchase": "Ваш товар купили", 
    "Buy": "Вы купили товар", 
    "Wallet": "Ваш кошелек изменился", 
    "Withdraw": "Пользватель купивший ваш товар отменил покупку", 
    "System": undefined
}

const NotificationsPage: React.FC = () => {  
    let notifications = data; 
    const [currentType, setCurrentType] = useState<string>(); 

    return (
        <div className="root-notifications">
            <div className="korobka337">
                <h2>Уведомления</h2>
                <ContentLine/>
                <div className="notif-container global-overflow">
                    {notifications.map((value) => {
                        if (value.type != currentType) { 
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
                <div className="notifications-selector">
                    
                </div>
            </div>
        </div>
    ); 
}

export default NotificationsPage; 