import { calculateSum } from "src/Utils/Math";
import "./User.css"
import data from "@testdata/User.json"
import StarsComponent from "src/Components/Stars/Stars";
import ContentLine from "src/Components/ContentLine/ContentLine";
import { RoleConversion } from "src/Utils/Conversions";
import { useState } from "react";
import UserOptionsIcon from "src/Components/Icons/UserOptions";
import ProductCardComponent from "src/Components/ProductCard/ProductCard";

type userPageStatuses = "Products" | "Reviews"

const UserPage: React.FC = () => {  
    const products = data.products; 
    const reviews = data.reviews; 
    const user = data; 
    const [currentState, setCurrentState] = useState<userPageStatuses>('Products'); 

    const reviewsRating: number[] = []
    data.reviews.forEach(element => {
        reviewsRating.push(element.rate)
    });

    const avarageRating = data.reviews.length / calculateSum(reviewsRating);
    const userRating = Math.ceil(avarageRating)

    return (
        <div className="root-user">
            <div className="root-user-banner">
                <img src={user.banner} alt="" className="banner-image"/>
            </div>

            <div className="user-container">
                <div className="user-info">
                    <div className="user-avatar">
                        <div className="user-avatar-container">
                            {user.avatar === undefined 
                                ? <div className="user-avatar-none"></div>
                                : <img className="user-avatar-image" src={user.avatar} alt={user.name}/>}
                        </div>
                    </div>
                    <div className="user-main-info">
                        <h1>{user.name}</h1>
                        <div className="user-online-indicator" style={{color: user.isOnline ? "rgb(139, 195, 74)" : "#A8A8A8"}}>
                            {user.isOnline ? "Онлайн" : "Не в сети"}
                        </div>
                    </div>
                    <div className="user-meta-info">
                        <div className="user-purchases-info user-info-field">
                            <div className="user-purchases user-wallet-info">
                                {user.purchases}
                                <span>Продаж</span>
                            </div>
                            <div className="vertical-border"></div>
                            <div className="user-sells user-wallet-info">
                                {user.sells}
                                <span>Покупок</span>
                            </div>
                        </div>
                        <div className="user-info-field user-stars-field">
                            <p>Рейтинг</p>
                            <div className="user-stars-container">
                                <div className="user-stars">
                                    <h1>{userRating}</h1>
                                    <StarsComponent stars={userRating} width={24} height={24}/>
                                </div>
                                <div className="user-reviews-info">
                                    {user.reviews.length} {user.reviews.length > 1 ? "Отзывов" : "Отзыв"}
                                </div>
                            </div>
                        </div>
                        <div className="user-info-field user-description">
                            <h4 className="user-description-header">
                                О пользвателе
                            </h4>
                            <div className="user-description-content">{user.description}</div>
                            <ContentLine color="rgb(43, 45, 60)" />
                            <h4 className="user-description-header">
                                Роль
                            </h4>
                            <div className="user-description-content">{RoleConversion.get(user.role)}</div>
                            <ContentLine color="#303139"/>
                            <h4 className="user-description-header">
                                Регистрация
                            </h4>
                            <div className="user-description-content">{user.createdAt}</div>
                        </div>
                    </div>
                </div>
                <div className="user-content-container">
                    <div className="user-content-nav">
                        <nav>
                            <ul className="control-buttons-list">
                                <li className={`control-button user-products-button ${currentState === "Products" ? "current-control" : ""}`} onClick={() => setCurrentState("Products")}>
                                    Товары
                                    <span className="nav-counter">{user.products.length}</span>
                                </li>
                                <li className={`control-button user-reviews-button ${currentState === "Reviews" ? "current-control" : ""}`} onClick={() => setCurrentState("Reviews")}>
                                    Отзывы
                                    <span className="nav-counter">{user.reviews.length}</span>
                                </li>
                            </ul>
                        </nav>
                        <div className="user-actions">
                            <div className="user-options">
                                <button className="user-options-button">
                                    <UserOptionsIcon width={20} height={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="user-content">
                        {currentState === "Products"
                            ? <div className="user-products">
                                {products.map((value) => { 
                                    return ( 
                                        <ProductCardComponent 
                                            title={value.title}
                                            category={value.category}
                                            price={value.price}
                                            game={value.game}
                                            gameImage={value.gameImage}
                                            productId={value.id}
                                            image={value.image}
                                            userStars={value.stars}
                                        />
                                    )
                                })}
                            </div> 
                            : <div className="user-reviews-list">
                                {reviews.map((value) => { 
                                    return ( 
                                        <div className="user-review">
                                            <img src={value.createdBy.image} alt="" className="user-review-image"/>
                                            <div className="user-review-container">
                                                <div className="user-review-header">
                                                    <h4 className="user-review-createdby">{value.createdBy.name}</h4>
                                                    <div className="user-review-stars">
                                                        <div className="review-stars-meta">
                                                            <span>Оценка: {value.rate}</span>
                                                        </div>
                                                        <StarsComponent stars={value.rate} width={13} height={13}/>
                                                    </div>
                                                </div>
                                                <p className="user-review-product">{value.product.name}, {value.product.price}</p>
                                                <p className="user-review-content">{value.text}</p>
                                                <p className="user-review-createdat">{value.createdAt}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default UserPage; 