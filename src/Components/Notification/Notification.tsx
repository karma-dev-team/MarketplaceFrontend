import { asFileUrl } from "src/Gateway/Config";
import "./Notification.css"

type props = {
    notificationId: string,  
    title: string,
    image: string,
    content: string, 
}

const NotificationComponent: React.FC<props> = (props: props) => {  
    return (
        <div className="root-notification" >
            <div className="notfication-container">
                <div className="notification-header">
                    <img src={asFileUrl(props.image)} alt="avatarimage" className="notification-image"/>
                </div>
                <div className="notification-header">
                    <h3 className="notification-titletext">{props.title}</h3>
                    <p className="notification-info">{props.content.slice(0, 100)}</p>
                </div>
            </div>
        </div>
    ); 
}

export default NotificationComponent; 
