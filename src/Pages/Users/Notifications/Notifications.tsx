import "./Notifications.css";
import ContentLine from "src/Components/ContentLine/ContentLine";
import NotificationComponent from "src/Components/Notification/Notification";
import logo from "@images/karmastore-logo.png"

const NotificationsPage: React.FC = () => {  
    return (
        <div className="root-notifications">
            <div className="korobka337">
                <h2>Уведомления</h2>
                <ContentLine/>
                <div className="notif-container global-overflow">
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Ваш аккаунт был улучшен до Премиум уровня"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "На ваш аккаунт поступила жалоба"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Вывод средств был успешно произведен"
                        category = "string"
                    />
                    <NotificationComponent        
                        notificationId = "string" 
                        title = "Karma Market"
                        image = {logo}
                        content = "Кто-то приобрел ваш товар"
                        category = "string"
                    />
                </div>
            </div>
        </div>
    ); 
}

export default NotificationsPage; 