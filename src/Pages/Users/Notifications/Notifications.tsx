import "./Notifications.css";
import ContentLine from "src/Components/ContentLine/ContentLine";
import NotificationComponent from "src/Components/Notification/Notification";
import karmaLogo from "@images/karmastore-logo.png"
import { useEffect, useState } from "react";
import { NavbarProps } from "src/Utils/NavbarProps";
import { NotificationApi, NotificationEntity, NotificationEntityTypeEnum } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import Modal from "src/Modals/Base/Base";
import NotificationModal from "src/Modals/Notification/Notification";

const NotificationTypeToText: { [key in NotificationEntityTypeEnum]: string | undefined } = { 
    [NotificationEntityTypeEnum.Other]: undefined, 
    [NotificationEntityTypeEnum.Purchase]: "Ваш товар купили", 
    [NotificationEntityTypeEnum.Buy]: "Вы купили товар", 
    [NotificationEntityTypeEnum.Wallet]: "Ваш кошелек изменился", 
    [NotificationEntityTypeEnum.Withdraw]: "Пользователь, купивший ваш товар, отменил покупку", 
    [NotificationEntityTypeEnum.System]: undefined
}

const NotificationsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    let [notifications, setNotifications] = useState<NotificationEntity[]>([]); 
    const [cookies] = useCookies([AuthKey])
    const navigate = useNavigate()

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies, navigate])
    const [isNotificationOpen, setNotificationOpen] = useState<boolean>(false)
    const [currentNotification, setNotification] = useState<NotificationEntity>()

    const notificationTypes = { 
        "": "Все уведомления",  
        [NotificationEntityTypeEnum.Buy]: "Вы оплатили заказ", 
        [NotificationEntityTypeEnum.Purchase]: "Новые сделки", 
        [NotificationEntityTypeEnum.Withdraw]: "Возврат заказа", 
        [NotificationEntityTypeEnum.Wallet]: "Изменения в балансе", 
        [NotificationEntityTypeEnum.System]: "Системные"
    }  
    const [currentType, setCurrentType] = useState<string>(Object.keys(notificationTypes)[0]); 

    useEffect(() => { 
        (async () => { 
            const notificationApi = new NotificationApi(ApiConfig)

            try { 
                let response = await notificationApi.apiNotificationUserUserIdGet(props.user?.id || "", 0, 10)
                setNotifications(response.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [navigate, props.user])

    const openNotification = (notification: NotificationEntity) => { 
        setNotification(notification)
        setNotificationOpen(true)
    }

    return (
        <div className="root-notifications">
            <Modal isOpen={isNotificationOpen} onClose={() => setNotificationOpen(false)}>
                <NotificationModal 
                    information={JSON.parse(currentNotification?.data || "{}")}
                    isSystem={currentNotification?.type === "System"}
                    title={currentNotification?.title || ""}
                    text={currentNotification?.text || ""}
                />
            </Modal>
            <div className="korobka337">
                <div className="notifications-header">
                    <h2>Уведомления</h2>
                    <ContentLine/>
                </div>
                <div className="notifications-container">
                    <div className="notif-container global-overflow">
                        {notifications.length > 0 ? notifications.map((value) => {
                            if (value.type !== currentType && currentType !== "") { 
                                return null; 
                            } 
                            return (
                                <div onClick={() => openNotification(value)}>
                                    <NotificationComponent        
                                        notificationId = {value.id} 
                                        title = {value.title}
                                        image = {karmaLogo}
                                        content = {NotificationTypeToText[value.type || NotificationEntityTypeEnum.Other] || value.text}
                                    />
                                </div>
                            )
                        }) : <p className="none-text">У вас пока нету уведомлении</p>}
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