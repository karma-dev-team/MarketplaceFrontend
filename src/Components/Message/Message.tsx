import { Dispatch } from "react";
import { MessageEntity, PurchaseEntity, PurchaseEntityStatusEnum, UserEntity } from "restclient";
import StarsComponent from "../Stars/Stars";
import { asFileUrl } from "src/Gateway/Config";
import "./Message.css"
import { formatDefault } from "src/Utils/Date";

type props = { 
    message: MessageEntity, 
    setReviewOpen: Dispatch<boolean>,
    setCurrentPurchase: Dispatch<PurchaseEntity | undefined>, 
    currentUser?: UserEntity, 
}

const MessageComponent: React.FC<props> = (props: props) => { 
    const message = props.message
    if (props.currentUser === undefined) { 
        return null; 
    }

    return ( 
        
        <div className={message.fromUser.id === props.currentUser.id ? "user-message" : "other-message"}>
            <div className="chat-message"> 
                {message.image !== null && message.image !== undefined ? <div className="message-image-container">
                    <img src={asFileUrl(message.image?.id || "")} alt="" className="message-image"/>
                </div> : null}
                {message.type === "Review" ? 
                    <span className="chat-message-text">{message.text}</span> : null }
                {message.type === "Purchase" ? <div className="message-product">
                    <div className="message-product-image-container">
                        <img 
                            src={
                                (message.purchase?.product.images.length || 0) > 0
                                ? asFileUrl(message.purchase?.product.images[0].id)
                                : ""} alt="" className="message-product-image"
                        />
                    </div>
                    <div className="message-product-info">
                        <h3>{message.purchase?.product.currentPrice.amount || 0} ₽</h3>
                        <p className="message-product-name">
                            {message.purchase?.product.name}
                        </p>
                        <div className="message-product-stars">
                            <p className="message-product-stars-counter">
                                {4}
                            </p>
                            <StarsComponent stars={4} width={20} height={20}/>
                        </div>
                        {message.purchase?.transaction.createdByUser.id === message.fromUser.id 
                        && (!message.purchase?.completed 
                            || message.purchase.status !== PurchaseEntityStatusEnum.Success) ? <button className="purchase-confirm" onClick={() => { 
                            props.setCurrentPurchase(message.purchase)
                            props.setReviewOpen(true) 
                        }}>
                            Подвердить
                        </button>
                        : null } 
                    </div>
                </div> : null}
                {message.type === "Text" ? 
                    <span className="chat-message-text">{message.text}</span>
                : null}
                <span className="chat-message-corner">
                    <div className="chat-message-date-container">
                        <span className="chat-message-date">
                            {
                                message.createdAt !== null || message.createdAt !== undefined 
                                    ? formatDefault(message.createdAt) : null}
                            </span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default MessageComponent; 