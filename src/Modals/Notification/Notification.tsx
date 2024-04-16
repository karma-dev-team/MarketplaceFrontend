import "./Notification.css"

type props = { 
    information:{ [key: string]: string }
    isSystem: boolean, 
    title: string, 
    text: string
}

const NotificationModal: React.FC<props> = (props: props) => { 
    return ( 
        <div className="root-notificationmodal">
            <h1>Информация про событие</h1>

            <h3>{props.title}</h3>
            <h3>{props.text}</h3>
            {Object.entries(props.information).map((values) => { 
                return <div className="notification-field">
                    <div className="notification-info-field">{values[0]}</div>
                    <div className="notification-value-field">{values[1]}</div>
                </div>
            })}
        </div>
    )
} 

export default NotificationModal; 