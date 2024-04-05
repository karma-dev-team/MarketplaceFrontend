import { asFileUrl } from "src/Gateway/Config";
import "./Notification.css"

type props = {
    notificationId: string,  
    title: string,
    image: string,
    content: string, 
    category: string
}

const NotificationComponent: React.FC<props> = (props: props) => {  
    return (
        <div className="root-notifications" >
            <div className="korobka1337">
                <div className="notifications-header">
                    <img src={asFileUrl(props.image)} alt="avatarimage" className="productcard-image"/>
                </div>
                <div className="notifications-info">
                    <h2 className="productcard-titletext">{props.title}</h2>
                    <h4 className="productcard-info">{props.content}</h4>
                </div>
            </div>
        </div>
    ); 
}

export default NotificationComponent; 
